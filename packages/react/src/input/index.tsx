import {
  inputContainerVariants,
  inputLabelVariants,
  inputLineVariants,
  inputVariants,
  type InputContainerVariants,
} from "@libnyanpasu/material-design-components";
import { cn } from "@libnyanpasu/material-design-libs";
import { useCreation } from "ahooks";
import React from "react";

export const InputContext = React.createContext<{
  haveLabel?: boolean;
  haveValue?: boolean;
}>({});

export const InputContainer = ({
  haveLabel,
  className,
  ...props
}: React.ComponentProps<"div"> & InputContainerVariants) => {
  return (
    <div
      className={cn(inputContainerVariants({ haveLabel }), className)}
      {...props}
    />
  );
};

export const InputLine = ({
  className,
  ...props
}: React.ComponentProps<"input">) => {
  return <div className={cn(inputLineVariants(), className)} {...props} />;
};

export const Input = ({
  className,
  label,
  children,
  ...props
}: React.ComponentProps<"input"> & {
  label?: string;
}) => {
  const haveLabel = useCreation(() => {
    if (label) {
      return true;
    }

    if (React.isValidElement(children)) {
      if (typeof children.type !== "string") {
        if ("displayName" in children.type) {
          if (children.type.displayName === InputLabel.displayName) {
            return true;
          }
        }
      }
    }

    return false;
  }, []);

  const haveValue = React.useMemo(() => {
    return Boolean(props.value || props.defaultValue);
  }, [props.value, props.defaultValue]);

  return (
    <InputContext.Provider value={{ haveLabel, haveValue }}>
      <InputContainer haveLabel={haveLabel}>
        <input className={cn(inputVariants(), className)} {...props} />

        {label && <InputLabel>{label}</InputLabel>}

        {children}

        <InputLine />
      </InputContainer>
    </InputContext.Provider>
  );
};

Input.displayName = "Input";

export const InputLabel = ({
  className,
  ...props
}: React.ComponentProps<"label">) => {
  const { haveValue } = React.useContext(InputContext);

  return (
    <label
      className={cn(inputLabelVariants({ haveValue }), className)}
      {...props}
    />
  );
};

InputLabel.displayName = "InputLabel";
