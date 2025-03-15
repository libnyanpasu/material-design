import {
  inputContainerVariants,
  inputLabelFieldsetVariants,
  inputLabelLegendVariants,
  inputLabelVariants,
  inputLineVariants,
  inputVariants,
  type InputContainerVariants,
} from "@libnyanpasu/material-design-components";
import { cn } from "@libnyanpasu/material-design-libs";
import { useCreation } from "ahooks";
import React, { useEffect } from "react";

type InputContextType = {
  haveLabel?: boolean;
  haveValue?: boolean;
} & InputContainerVariants;

const InputContext = React.createContext<InputContextType | null>(null);

const useInputContext = () => {
  const context = React.useContext(InputContext);

  if (!context) {
    throw new Error("InputContext is undefined");
  }

  return context;
};

export const InputContainer = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const { variant } = useInputContext();

  return (
    <div
      className={cn(
        inputContainerVariants({
          variant,
        }),
        className,
      )}
      {...props}
    />
  );
};

export const InputLine = ({
  className,
  ...props
}: React.ComponentProps<"input">) => {
  const { variant } = useInputContext();

  return (
    <div
      className={cn(
        inputLineVariants({
          variant,
        }),
        className,
      )}
      {...props}
    />
  );
};

export type InputProps = React.ComponentProps<"input"> & {
  label?: string;
} & InputContainerVariants;

export const Input = ({
  variant,
  className,
  label,
  children,
  onChange,
  ...props
}: InputProps) => {
  const [haveValue, setHaveValue] = React.useState(false);

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

  useEffect(() => {
    if (props.value || props.defaultValue) {
      setHaveValue(true);
    } else {
      setHaveValue(false);
    }
  }, [props.value, props.defaultValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHaveValue(event.target.value.length > 0);
    onChange?.(event);
  };

  useEffect(() => {
    console.log("haveValue", haveValue);
  }, [haveValue]);

  return (
    <InputContext.Provider
      value={{
        haveLabel,
        haveValue,
        variant,
      }}
    >
      <InputContainer>
        <input
          className={cn(
            inputVariants({
              variant,
              haveValue,
              haveLabel,
            }),
            className,
          )}
          onChange={handleChange}
          {...props}
        />

        {label && (
          <>
            <fieldset
              className={cn(
                inputLabelFieldsetVariants({
                  variant,
                }),
              )}
            >
              <legend
                className={cn(
                  inputLabelLegendVariants({
                    variant,
                    haveValue,
                  }),
                )}
              >
                {label}
              </legend>
            </fieldset>

            <InputLabel>{label}</InputLabel>
          </>
        )}

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
  const { haveValue, variant } = useInputContext();

  return (
    <label
      className={cn(
        inputLabelVariants({
          variant,
          focus: haveValue,
        }),
      )}
      {...props}
    />
  );
};

InputLabel.displayName = "InputLabel";
