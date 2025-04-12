import {
  selectContentVariants,
  selectIconVariants,
  selectItemVariants,
  selectLabelVariants,
  selectLineVariants,
  SelectTriggerVariants,
  selectTriggerVariants,
  selectValuePlaceholderFieldsetVariants,
  selectValuePlaceholderLegendVariants,
  selectValuePlaceholderVariants,
  selectValueVariants,
} from "@libnyanpasu/material-design-components";
import { cn } from "@libnyanpasu/material-design-libs";
import * as SelectPrimitive from "@radix-ui/react-select";
import { useControllableValue } from "ahooks";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { ArrowDropDown } from "../built-in/icon/arrow-drop-down";
import { Check } from "../built-in/icon/check";
import { chains } from "../utils/chian";

type SelectContextType = {
  haveValue?: boolean;
  open?: boolean;
} & SelectTriggerVariants;

const SelectContext = React.createContext<SelectContextType | null>(null);

const useSelectContext = () => {
  const context = React.useContext(SelectContext);

  if (!context) {
    throw new Error("Select compound components must be used within a Select");
  }

  return context;
};

export const SelectLine = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const { variant } = useSelectContext();

  return (
    <div
      className={cn(
        selectLineVariants({
          variant,
        }),
        className,
      )}
      {...props}
    />
  );
};

export const Select = ({
  onValueChange,
  variant,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root> &
  SelectTriggerVariants) => {
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
    <SelectContext.Provider
      value={{
        open,
        haveValue,
        variant,
      }}
    >
      <SelectPrimitive.Root
        open={open}
        onOpenChange={setOpen}
        onValueChange={chains(handleOnChange, onValueChange)}
        {...props}
      />
    </SelectContext.Provider>
  );
};

export type SelectProps = React.ComponentProps<typeof Select>;

export const SelectValue = ({
  className,
  placeholder,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) => {
  const { haveValue, open, variant } = useSelectContext();

  return (
    <>
      <div
        className={cn(
          selectValueVariants({
            variant,
            haveValue,
          }),
          className,
        )}
      >
        <SelectPrimitive.Value {...props} />
      </div>

      <fieldset
        className={cn(
          selectValuePlaceholderFieldsetVariants({
            variant,
          }),
        )}
      >
        <legend
          className={cn(
            selectValuePlaceholderLegendVariants({
              variant,
              haveValue,
            }),
          )}
        >
          {placeholder}
        </legend>
      </fieldset>

      <div
        className={cn(
          selectValuePlaceholderVariants({
            variant,
            focus: haveValue || open,
          }),
        )}
      >
        {placeholder}
      </div>
    </>
  );
};

export const SelectGroup = (
  props: React.ComponentProps<typeof SelectPrimitive.Group>,
) => {
  return <SelectPrimitive.Group {...props} />;
};

export const SelectLabel = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) => {
  return (
    <SelectPrimitive.Label
      className={cn(selectLabelVariants(), className)}
      {...props}
    />
  );
};

export const SelectTrigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) => {
  const { variant } = useSelectContext();

  return (
    <SelectPrimitive.Trigger
      className={cn(selectTriggerVariants({ variant }), className)}
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
  const { open } = useSelectContext();

  return (
    <AnimatePresence initial={false}>
      {open && (
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content {...props} position="popper" asChild>
            <motion.div
              className={cn(selectContentVariants(), className)}
              style={{
                width: "var(--radix-popper-anchor-width)",
                height: "var(--radix-popper-anchor-height)",
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
