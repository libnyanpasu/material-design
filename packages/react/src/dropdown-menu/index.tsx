import {
  dropdownMenuLabelVariants,
  dropdownMenuSeparatorVariants,
  dropdownMenuContentVariants,
  selectItemVariants,
} from "@nyanpasu/material-design-components";
import { cn } from "@nyanpasu/material-design-libs";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { useControllableValue } from "ahooks";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Check } from "../built-in/icon/check";
import { Radio } from "../built-in/icon/radio";
import { RadioChecked } from "../built-in/icon/radio-checked";

const DropdownMenuContext = React.createContext<{
  open: boolean;
}>({ open: false });

const useDropdownMenuContext = () => {
  const context = React.useContext(DropdownMenuContext);

  if (context === undefined) {
    throw new Error(
      "DropdownMenu compound components cannot be rendered outside the DropdownMenu component",
    );
  }

  return context;
};

export const DropdownMenu = (
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Root>,
) => {
  const [open, setOpen] = useControllableValue(props, {
    valuePropName: "open",
    trigger: "onOpenChange",
    defaultValue: props.defaultOpen,
  });

  return (
    <DropdownMenuContext.Provider value={{ open }}>
      <DropdownMenuPrimitive.Root
        {...props}
        open={open}
        onOpenChange={setOpen}
      />
    </DropdownMenuContext.Provider>
  );
};

export const DropdownMenuTrigger = (
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>,
) => {
  return <DropdownMenuPrimitive.Trigger {...props} />;
};

export const DropdownMenuGroup = (
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Group>,
) => {
  return <DropdownMenuPrimitive.Group {...props} />;
};

export const DropdownMenuPortal = (
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>,
) => {
  return <DropdownMenuPrimitive.Portal {...props} />;
};

export const DropdownMenuSub = (
  props: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>,
) => {
  return <DropdownMenuPrimitive.Sub {...props} />;
};

const DropdownMenuRadioGroupContext = React.createContext<{
  value: string | null;
}>({ value: null });

const useDropdownMenuRadioGroupContext = () => {
  const context = React.useContext(DropdownMenuRadioGroupContext);

  if (context === undefined) {
    throw new Error(
      "DropdownMenuRadioGroup compound components cannot be rendered outside the DropdownMenuRadioGroup component",
    );
  }

  return context;
};

export const DropdownMenuRadioGroup = (
  props: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>,
) => {
  const [value, setValue] = useControllableValue(props, {
    valuePropName: "value",
    trigger: "onValueChange",
  });

  return (
    <DropdownMenuRadioGroupContext.Provider value={{ value }}>
      <DropdownMenuPrimitive.RadioGroup
        {...props}
        value={value}
        onValueChange={setValue}
      />
    </DropdownMenuRadioGroupContext.Provider>
  );
};

export const DropdownMenuSubTrigger = (
  props: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger>,
) => {
  return <DropdownMenuPrimitive.SubTrigger {...props} />;
};

export const DropdownMenuSubContent = (
  props: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>,
) => {
  return <DropdownMenuPrimitive.SubContent {...props} />;
};

export const DropdownMenuContent = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) => {
  const { open } = useDropdownMenuContext();

  return (
    <AnimatePresence initial={false}>
      {open && (
        <DropdownMenuPrimitive.Portal forceMount>
          <DropdownMenuPrimitive.Content {...props} asChild>
            <motion.div
              className={cn(dropdownMenuContentVariants(), className)}
              initial={{ opacity: 0, scaleY: 0.9, transformOrigin: "top" }}
              animate={{ opacity: 1, scaleY: 1, transformOrigin: "top" }}
              exit={{ opacity: 0, scaleY: 0.9, transformOrigin: "top" }}
              transition={{
                type: "spring",
                bounce: 0,
                duration: 0.35,
              }}
            >
              {children}
            </motion.div>
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      )}
    </AnimatePresence>
  );
};

export const DropdownMenuItem = ({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item>) => {
  return (
    <DropdownMenuPrimitive.Item
      className={cn(selectItemVariants(), className)}
      {...props}
    />
  );
};

export const DropdownMenuCheckboxItem = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) => {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      className={cn(selectItemVariants(), className)}
      {...props}
    >
      {children}

      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="text-primary" />
      </DropdownMenuPrimitive.ItemIndicator>
    </DropdownMenuPrimitive.CheckboxItem>
  );
};

export const DropdownMenuRadioItem = ({
  value,
  children,
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) => {
  const context = useDropdownMenuRadioGroupContext();

  const selected = context.value === value;

  return (
    <DropdownMenuPrimitive.RadioItem
      className={cn(selectItemVariants(), className)}
      value={value}
      {...props}
    >
      <DropdownMenuPrimitive.ItemIndicator>
        <RadioChecked className="text-primary" />
      </DropdownMenuPrimitive.ItemIndicator>

      {!selected && (
        <span>
          <Radio className="text-zinc-700" />
        </span>
      )}

      <div className="flex-1">{children}</div>
    </DropdownMenuPrimitive.RadioItem>
  );
};

export const DropdownMenuLabel = ({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label>) => {
  return (
    <DropdownMenuPrimitive.Label
      className={cn(dropdownMenuLabelVariants(), className)}
      {...props}
    />
  );
};

export const DropdownMenuSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) => {
  return (
    <DropdownMenuPrimitive.Separator
      className={cn(dropdownMenuSeparatorVariants(), className)}
      {...props}
    />
  );
};
