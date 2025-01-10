import {
  cardContentVariants,
  cardFooterVariants,
  cardHeaderVariants,
  cardVariants,
  type CardContentVariantsProps,
  type CardFooterVariantsProps,
  type CardHeaderVariantsProps,
  type CardVariantsProps,
} from "@nyanpasu/material-design-components";
import { cn } from "@nyanpasu/material-design-libs";
import { Slot } from "@radix-ui/react-slot";
import React from "react";

type CardContextType = {
  variant: CardVariantsProps["variant"];
  divider: CardHeaderVariantsProps["divider"] &
    CardFooterVariantsProps["divider"];
};

const CardContext = React.createContext<CardContextType | null>(null);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CardVariantsProps,
    Partial<CardContextType> {
  asChild?: boolean;
}

export const Card = ({
  variant,
  divider,
  asChild,
  className,
  ...props
}: CardProps) => {
  const Comp = asChild ? Slot : "div";

  return (
    <CardContext.Provider value={{ variant, divider }}>
      <Comp className={cn(cardVariants({ variant }), className)} {...props} />
    </CardContext.Provider>
  );
};

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CardContentVariantsProps {}

export const CardContent = ({ className, ...props }: CardContentProps) => {
  return <div className={cn(cardContentVariants(), className)} {...props} />;
};

export interface CardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CardHeaderVariantsProps {
  asChild?: boolean;
}

export const CardHeader = ({
  divider,
  className,
  ...props
}: CardHeaderProps) => {
  const context = React.useContext(CardContext);

  return (
    <div
      className={cn(
        cardHeaderVariants({
          divider: context?.divider ?? divider,
        }),
        className,
      )}
      {...props}
    />
  );
};

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CardFooterVariantsProps {}

export const CardFooter = ({
  divider,
  className,
  ...props
}: CardFooterProps) => {
  const context = React.useContext(CardContext);
  return (
    <div
      className={cn(
        cardFooterVariants({
          divider: context?.divider ?? divider,
        }),
        className,
      )}
      {...props}
    />
  );
};
