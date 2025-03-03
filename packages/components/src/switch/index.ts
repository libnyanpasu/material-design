import { tcva, type VariantProps } from "@libnyanpasu/material-design-libs";

export const switchVariants = tcva([
  "peer",
  "inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full",
  "border-2 border-transparent transition-colors",
  "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
  "disabled:cursor-not-allowed disabled:opacity-50",
  "data-[state=checked]:bg-primary data-[state=unchecked]:bg-surface-variant",
  "dark:data-[state=checked]:bg-on-primary-container dark:data-[state=unchecked]:bg-on-surface-variant",
]);

export type SwitchVariants = VariantProps<typeof switchVariants>;

export const switchThumbVariants = tcva([
  "pointer-events-none block",
  "rounded-full shadow-lg ring-0 transition-all duration-200",
  "data-[state=checked]:bg-surface data-[state=unchecked]:bg-on-surface/80",
  "dark:data-[state=checked]:bg-surface dark:data-[state=unchecked]:bg-surface/90",
  "data-[state=checked]:size-5.5 data-[state=unchecked]:size-4",
  "data-[state=checked]:translate-x-6.5 data-[state=unchecked]:translate-x-2",
]);

export type SwitchThumbVariants = VariantProps<typeof switchThumbVariants>;
