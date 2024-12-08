import {
  inputContainerVariants,
  inputLabelVariants,
  inputLineVariants,
  inputVariants,
  type InputContainerVariants,
} from "@nyanpasu/material-design-components";
import { cn } from "@nyanpasu/material-design-libs";
import { useCreation } from "ahooks";
import React from "react";
import { chains } from "../utils/chian";

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
  onChange,
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

  const [haveValue, setHaveValue] = React.useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHaveValue(Boolean(e.target.value));
  };

  return (
    <InputContext.Provider value={{ haveLabel, haveValue }}>
      <InputContainer haveLabel={haveLabel}>
        <input
          className={cn(inputVariants(), className)}
          onChange={chains(handleOnChange, onChange)}
          {...props}
        />

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
