import { tcva, type VariantProps } from "@libnyanpasu/material-design-libs";

export const dropdownMenuLabelVariants = tcva([
  "flex h-12 items-center justify-between p-4 outline-hidden gap-2 cursor-default",
]);

export type DropdownMenuLabelVariants = VariantProps<
  typeof dropdownMenuLabelVariants
>;

export const dropdownMenuSeparatorVariants = tcva(["h-px bg-on-surface/30"]);

export type DropdownMenuSeparatorVariants = VariantProps<
  typeof dropdownMenuSeparatorVariants
>;

export const dropdownMenuContentVariants = tcva([
  "relative w-full overflow-hidden rounded shadow-container z-50",
  "bg-inverse-on-surface dark:bg-inverse-surface",
  "dark:text-surface"
]);

export type DropdownMenuContentVariants = VariantProps<
  typeof dropdownMenuContentVariants
>;
