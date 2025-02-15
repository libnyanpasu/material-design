import { tcva, type VariantProps } from "@nyanpasu/material-design-libs";

export const dropdownMenuLabelVariants = tcva([
  "flex h-12 items-center justify-between p-4 outline-none gap-2 cursor-default",
]);

export type DropdownMenuLabelVariants = VariantProps<
  typeof dropdownMenuLabelVariants
>;

export const dropdownMenuSeparatorVariants = tcva(["h-px bg-on-surface/30"]);

export type DropdownMenuSeparatorVariants = VariantProps<
  typeof dropdownMenuSeparatorVariants
>;
