import {
  selectContentVariants,
  selectIconVariants,
  selectItemVariants,
  selectLabelVariants,
  selectLineVariants,
  selectTriggerVariants,
} from "@nyanpasu/material-design-components";
import { cn } from "@nyanpasu/material-design-libs";
import * as SelectPrimitive from "@radix-ui/react-select";
import { useControllableValue } from "ahooks";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { ArrowDropDown } from "../built-in/icon/arrow-drop-down";
import { Check } from "../built-in/icon/check";
import { chains } from "../utils/chian";

const SelectContext = React.createContext<{
  haveValue?: boolean;
  open?: boolean;
}>({});

export const SelectLine = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, haveValue } = React.useContext(SelectContext);

  return (
    <div
      className={cn(
        selectLineVariants({
          focus: open ?? haveValue,
        }),
        className,
      )}
      {...props}
    />
  );
};

export const Select = ({
  onValueChange,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) => {
  const [open, setOpen] = useControllableValue(props, {
    valuePropName: "open",
    trigger: "onOpenChange",
    defaultValue: props.defaultOpen,
  });

  const [haveValue, setHaveValue] = React.useState(
    Boolean(props.value || props.defaultValue),
  );

  const handleOnChange = React.useCallback(
    (value?: string) => {
      setHaveValue(Boolean(value));
    },
    [props.value],
  );

  return (
    <SelectContext.Provider value={{ open, haveValue }}>
      <SelectPrimitive.Root
        open={open}
        onOpenChange={setOpen}
        onValueChange={chains(handleOnChange, onValueChange)}
        {...props}
      />
    </SelectContext.Provider>
  );
};

export const SelectValue = ({
  className,
  placeholder,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) => {
  return (
    <div className={cn("pointer-events-none mt-3 pr-10", className)}>
      <SelectPrimitive.Value {...props} />

      {placeholder && <SelectLabel>{placeholder}</SelectLabel>}
    </div>
  );
};

export const SelectLabel = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, haveValue } = React.useContext(SelectContext);

  return (
    <div
      className={cn(selectLabelVariants({ haveValue, focus: open }), className)}
      {...props}
    />
  );
};

export const SelectTrigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) => {
  return (
    <SelectPrimitive.Trigger
      className={cn(selectTriggerVariants(), className)}
      {...props}
    >
      {children}

      <SelectLine />

      <SelectIcon />
    </SelectPrimitive.Trigger>
  );
};

export const SelectIcon = ({
  asChild,
  children,
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Icon>) => {
  return (
    <SelectPrimitive.Icon
      className={cn(selectIconVariants(), className)}
      asChild
      {...props}
    >
      {asChild ? children : <ArrowDropDown />}
    </SelectPrimitive.Icon>
  );
};

export const SelectContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) => {
  const { open } = React.useContext(SelectContext);

  return (
    <AnimatePresence initial={false}>
      {open && (
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content {...props} position="popper" asChild>
            <motion.div
              className={cn(selectContentVariants(), className)}
              style={{
                width: "var(--radix-popper-anchor-width)",
              }}
              initial={{ opacity: 0, scaleY: 0.9, transformOrigin: "top" }}
              animate={{ opacity: 1, scaleY: 1, transformOrigin: "top" }}
              exit={{ opacity: 0, scaleY: 0.9, transformOrigin: "top" }}
              transition={{
                type: "spring",
                bounce: 0,
                duration: 0.35,
              }}
            >
              <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
            </motion.div>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      )}
    </AnimatePresence>
  );
};

export const SelectItem = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) => {
  return (
    <SelectPrimitive.Item
      className={cn(selectItemVariants(), className)}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>

      <SelectPrimitive.ItemIndicator>
        <Check className="text-primary" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
};
