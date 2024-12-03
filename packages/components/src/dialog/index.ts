import { cn, tcva, type VariantProps } from "@nyanpasu/material-design-libs";

export const dialogOverlayClassName = cn(
  "fixed inset-0 z-50",
  "backdrop-blur-xl",
  "bg-opacity-10 bg-primary",
);

export const dialogContainerClassName = cn(
  "fixed inset-0 z-50 grid place-items-center",
);

export const dialogContentVariants = tcva(["bg-surface"], {
  variants: {
    fullScreen: {
      true: "fixed inset-0",
      false: "min-w-96 rounded-3xl shadow",
    },
  },
  defaultVariants: {
    fullScreen: false,
  },
});

export const dialogContentContainerVariants = tcva(["overflow-auto p-4"], {
  variants: {
    fullScreen: {
      true: "",
      false: "h-dvh-subtract-40",
    },
    subtract: {
      0: "",
      1: "h-dvh-subtract-14",
      2: "h-dvh-subtract-28",
    },
  },
  defaultVariants: {
    fullScreen: false,
    subtract: 0,
  },
});

export const dialogHeaderClassName = cn(
  "flex h-14 items-center gap-2 border-b p-4 text-xl",
);

export const dialogFooterClassName = cn(
  "flex h-14 flex-row-reverse items-center gap-2 border-t p-2",
);

export interface DialogContentContainerVariantsProps
  extends VariantProps<typeof dialogContentContainerVariants> {}

export interface DialogContentVariantsProps
  extends VariantProps<typeof dialogContentVariants> {}
