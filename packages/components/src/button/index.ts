import { tcva, type VariantProps } from "@libnyanpasu/material-design-libs";

export const buttonVariants = tcva(
  [
    "h-10 text-sm font-medium",
    "transition-shadow",
    "rounded-full",
    "cursor-pointer select-none",
    "relative overflow-hidden",
    "focus:outline-hidden",
  ],
  {
    variants: {
      variant: {
        basic: [
          "px-4",
          "text-primary dark:text-on-primary",
          "bg-transparent-fallback-surface dark:bg-transparent-fallback-on-surface",
          "hover:bg-primary-container dark:hover:bg-on-primary-container",
        ],
        raised: [
          "px-6",
          "text-primary dark:text-on-primary",
          "shadow-container hover:shadow-container-lg focus:shadow-container",
          "bg-surface dark:bg-on-surface",
          "hover:bg-surface-variant dark:hover:bg-on-surface-variant",
        ],
        stroked: [
          "px-6",
          "text-primary dark:text-on-primary",
          "border border-primary-container dark:hover:border-on-primary-container",
          "bg-transparent-fallback-surface dark:bg-transparent-fallback-on-surface",
          "hover:bg-primary-container dark:hover:bg-on-primary-container",
        ],
        flat: [
          "px-6",
          "text-white",
          "bg-primary dark:bg-on-primary-container",
          "hover:bg-primary/95",
        ],
        fab: [
          "px-4 h-14",
          "rounded-2xl",
          "shadow-container-xl",
          "bg-primary-container dark:bg-on-primary-container",
          "text-on-primary-container dark:text-primary-container",
          "hover:shadow-container-2xl",
          "hover:brightness-95 dark:hover:brightness-105",
        ],
      },
      disabled: {
        true: "cursor-not-allowed shadow-none hover:shadow-none focus:shadow-none",
        false: "",
      },
      icon: {
        true: "p-0 grid place-content-center",
        false: "min-w-16",
      },
    },
    compoundVariants: [
      {
        variant: "basic",
        disabled: true,
        className: "text-zinc-900/40 hover:bg-transparent",
      },
      {
        variant: "raised",
        disabled: true,
        className: "bg-gray-900/20 text-zinc-900/40 hover:bg-gray-900/20",
      },
      {
        variant: "stroked",
        disabled: true,
        className: "text-zinc-900/40 hover:bg-transparent border-zinc-300",
      },
      {
        variant: "flat",
        disabled: true,
        className: "bg-gray-900/20 text-gray-900/40 hover:bg-primary",
      },
      {
        variant: "fab",
        disabled: true,
        className:
          "bg-gray-900/20 text-gray-900/40 hover:brightness-100 hover:shadow-container-xl",
      },
      {
        icon: true,
        className: "w-10",
      },
      {
        variant: "fab",
        icon: true,
        className: "w-14",
      },
    ],
    defaultVariants: {
      variant: "basic",
      disabled: false,
      icon: false,
    },
  },
);

export interface ButtonVariantsProps
  extends VariantProps<typeof buttonVariants> {}
