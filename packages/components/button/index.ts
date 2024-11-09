import { tcva, type VariantProps } from "@nyanpasu/material-design-libs";

export const buttonVariants = tcva(
  [
    "h-10 min-w-16 text-sm font-medium",
    "transition-shadow",
    "rounded-full",
    "cursor-pointer",
    "relative overflow-hidden",
  ],
  {
    variants: {
      variant: {
        basic: "px-4 text-primary hover:bg-primary-container",
        raised: [
          "px-6",
          "text-primary",
          "shadow-container hover:shadow-container-lg focus:shadow-container",
          "hover:bg-primary-container",
        ],
        stroked: [
          "px-6",
          "text-primary",
          "border-2/3 border-zinc-500",
          "hover:bg-primary-container",
        ],
        flat: ["px-6", "text-white", "bg-primary", "hover:bg-opacity-95"],
        fab: [
          "px-4 h-14",
          "rounded-2xl",
          "shadow-container-xl",
          "bg-primary-container",
          "text-on-primary-container",
          "hover:shadow-container-2xl",
          "hover:brightness-95",
        ],
      },
      disabled: {
        true: "cursor-not-allowed hover:bg-transparent text-zinc-900/40",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "basic",
        disabled: true,
        className: "dark:text-neutral-900/40 ",
      },
      {
        variant: "raised",
        disabled: true,
        className:
          "shadow-none hover:shadow-none focus:shadow-none bg-zinc-900/10 hover:bg-zinc-900/10",
      },
      {
        variant: "stroked",
        disabled: true,
        className: "hover:bg-transparent border-zinc-400",
      },
      {
        variant: "flat",
        disabled: true,
        className: "bg-zinc-900/10",
      },
      {
        variant: "fab",
        disabled: true,
        className:
          "bg-zinc-900/10 hover:shadow-container-xl hover:brightness-100",
      },
    ],
    defaultVariants: {
      variant: "basic",
      disabled: false,
    },
  },
);

export interface ButtonVariantsProps
  extends VariantProps<typeof buttonVariants> {}
