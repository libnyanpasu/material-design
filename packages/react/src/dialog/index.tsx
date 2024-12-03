import {
  dialogContainerClassName,
  dialogContentContainerVariants,
  dialogContentVariants,
  dialogFooterClassName,
  dialogHeaderClassName,
  dialogOverlayClassName,
  type DialogContentVariantsProps,
} from "@nyanpasu/material-design-components";
import { cn } from "@nyanpasu/material-design-libs";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useControllableValue } from "ahooks";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Button, ButtonProps } from "../button";

const DialogPortal = DialogPrimitive.Portal;

const DialogContext = React.createContext<{
  open: boolean;
  layoutId?: string;
}>({ open: false });

export const DialogTrigger = (
  props: React.ComponentProps<typeof DialogPrimitive.Trigger>,
) => {
  const { layoutId } = React.useContext(DialogContext);

  const Trigger = DialogPrimitive.Trigger as React.FC<
    React.ComponentProps<typeof DialogPrimitive.Trigger> & {
      layoutId?: string;
    }
  >;

  return <Trigger layoutId={layoutId} {...props} />;
};

export const DialogClose = ({
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close> &
  (React.ComponentProps<typeof DialogPrimitive.Close>["asChild"] extends true
    ? {}
    : ButtonProps)) => {
  return (
    <DialogPrimitive.Close {...props} asChild>
      {props.asChild ? children : <Button>{children}</Button>}
    </DialogPrimitive.Close>
  );
};

export const DialogOverlay = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) => {
  return (
    <DialogPrimitive.Overlay {...props} asChild>
      <motion.div
        className={cn(dialogOverlayClassName, className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    </DialogPrimitive.Overlay>
  );
};

type DialogContentExtraProps = {
  contentPrefix?: React.ReactNode;
  contentSuffix?: React.ReactNode;
};

const FullScreenDialogContent = ({
  contentPrefix,
  contentSuffix,
  fullScreen,
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> &
  DialogContentVariantsProps &
  DialogContentExtraProps) => {
  return (
    <DialogPrimitive.Content
      className={cn(dialogContentVariants({ fullScreen }), className)}
      {...props}
      aria-describedby={undefined}
      asChild
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.8,
        }}
        transition={{
          type: "spring",
          bounce: 0,
          duration: 0.35,
        }}
      >
        {contentPrefix}

        <div
          className={cn(
            dialogContentContainerVariants({
              fullScreen,
              subtract:
                contentPrefix && contentSuffix
                  ? 2
                  : contentPrefix || contentSuffix
                    ? 1
                    : 0,
            }),
          )}
        >
          {children}
        </div>

        {contentSuffix}
      </motion.div>
    </DialogPrimitive.Content>
  );
};

const DefaultDialogContent = ({
  contentPrefix,
  contentSuffix,
  fullScreen,
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> &
  DialogContentVariantsProps &
  DialogContentExtraProps) => {
  const { layoutId } = React.useContext(DialogContext);

  return (
    <div className={dialogContainerClassName}>
      <DialogPrimitive.Content
        className={cn(dialogContentVariants({ fullScreen }), className)}
        aria-describedby={undefined}
        {...props}
        asChild
      >
        <motion.div layoutId={layoutId}>
          {contentPrefix}

          <div className={cn(dialogContentContainerVariants({ fullScreen }))}>
            {children}
          </div>

          {contentSuffix}
        </motion.div>
      </DialogPrimitive.Content>
    </div>
  );
};

export const DialogContent = (
  props: React.ComponentProps<typeof DialogPrimitive.Content> &
    DialogContentVariantsProps &
    DialogContentExtraProps,
) => {
  const { open } = React.useContext(DialogContext);

  return (
    <AnimatePresence initial={false}>
      {open && (
        <DialogPortal forceMount>
          {!props.fullScreen && <DialogOverlay />}

          {props.fullScreen ? (
            <FullScreenDialogContent {...props} />
          ) : (
            <DefaultDialogContent {...props} />
          )}
        </DialogPortal>
      )}
    </AnimatePresence>
  );
};

export const DialogHeader = ({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLDivElement>) => {
  return <div className={cn(dialogHeaderClassName, className)} {...props} />;
};

export const DialogFooter = ({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLDivElement>) => {
  return <div className={cn(dialogFooterClassName, className)} {...props} />;
};

export const Dialog = (
  props: React.ComponentProps<typeof DialogPrimitive.Root>,
) => {
  const layoutId = React.useMemo(() => Math.random().toString(36), []);

  const [open, setOpen] = useControllableValue(props, {
    valuePropName: "open",
    trigger: "onOpenChange",
    defaultValue: props.defaultOpen,
  });

  return (
    <DialogContext.Provider value={{ open, layoutId }}>
      <DialogPrimitive.Root open={open} onOpenChange={setOpen} {...props} />
    </DialogContext.Provider>
  );
};
