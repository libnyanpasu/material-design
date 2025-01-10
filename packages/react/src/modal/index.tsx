import {
  modalContainerVariants,
  modalOverlayVariants,
} from "@nyanpasu/material-design-components";
import { cn } from "@nyanpasu/material-design-libs";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useControllableValue, useCreation } from "ahooks";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Button, ButtonProps } from "../button";

const ModalPortal = DialogPrimitive.Portal;

const ModalContext = React.createContext<{
  open?: boolean;
  layoutId?: string;
}>({});

const useModalContext = () => {
  const context = React.useContext(ModalContext);

  if (context === undefined) {
    throw new Error(
      "Dialog compound components cannot be rendered outside the Dialog component",
    );
  }

  return context;
};

export const ModalTrigger = (
  props: React.ComponentProps<typeof DialogPrimitive.Trigger>,
) => {
  const { layoutId } = useModalContext();

  const Trigger = DialogPrimitive.Trigger as React.FC<
    React.ComponentProps<typeof DialogPrimitive.Trigger> & {
      layoutId?: string;
    }
  >;

  return <Trigger layoutId={layoutId} {...props} />;
};

export const ModalClose = ({
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

export const ModalOverlay = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) => {
  return (
    <DialogPrimitive.Overlay {...props} asChild>
      <motion.div
        className={cn(modalOverlayVariants(), className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    </DialogPrimitive.Overlay>
  );
};

export const ModalContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) => {
  const { open, layoutId } = useModalContext();

  return (
    <AnimatePresence initial={false}>
      {open && (
        <ModalPortal forceMount>
          <ModalOverlay />

          <div className={cn(modalContainerVariants(), className)}>
            <DialogPrimitive.Content
              {...props}
              aria-describedby={undefined}
              asChild
            >
              <motion.div
                layoutId={layoutId}
                initial={{
                  opacity: 0,
                  scale: 1.2,
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
                {children}
              </motion.div>
            </DialogPrimitive.Content>
          </div>
        </ModalPortal>
      )}
    </AnimatePresence>
  );
};

export const Modal = (
  props: React.ComponentProps<typeof DialogPrimitive.Root>,
) => {
  const layoutId = useCreation(() => Math.random().toString(36), []);

  const [open, setOpen] = useControllableValue(props, {
    valuePropName: "open",
    trigger: "onOpenChange",
    defaultValue: props.defaultOpen,
  });

  return (
    <ModalContext.Provider value={{ open, layoutId }}>
      <DialogPrimitive.Root open={open} onOpenChange={setOpen} {...props} />
    </ModalContext.Provider>
  );
};
