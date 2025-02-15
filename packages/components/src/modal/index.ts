import { tcva, type VariantProps } from "@nyanpasu/material-design-libs";

export const modalOverlayVariants = tcva([
  "fixed inset-0 z-50",
  "backdrop-blur-xl",
  "bg-primary/10",
]);

export type ModalOverlayVariantsProps = VariantProps<
  typeof modalOverlayVariants
>;

export const modalContainerVariants = tcva([
  "fixed inset-0 z-50 grid place-items-center",
]);

export type ModalContainerVariantsProps = VariantProps<
  typeof modalContainerVariants
>;
