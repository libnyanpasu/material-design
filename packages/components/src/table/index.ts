import { tcva, type VariantProps } from "@libnyanpasu/material-design-libs";

export const tableContainerVariants = tcva(
  ["relative w-full overflow-auto rounded-3xl"],
  {
    variants: {
      variant: {
        basic: ["bg-surface"],
        raised: ["shadow-container"],
        stroked: ["border-2/3 border-on-primary-container/30"],
        fab: ["bg-primary-container/30"],
      },
    },
    defaultVariants: {
      variant: "stroked",
    },
  },
);

export type TableContainerVariantsProps = VariantProps<
  typeof tableContainerVariants
>;

export const tableVariants = tcva(["w-full text-sm"]);

export type TableVariantsProps = VariantProps<typeof tableVariants>;

export const tableHeaderVariants = tcva(["[&_tr]:border-b font-bold"], {
  variants: {
    variant: {
      basic: [],
      raised: ["text-primary"],
      stroked: [],
      fab: ["text-on-primary-container"],
    },
  },
  defaultVariants: {
    variant: "stroked",
  },
});

export type TableHeaderVariantsProps = VariantProps<typeof tableHeaderVariants>;

export const tableBodyVariants = tcva(["[&_tr:last-child]:border-0"]);

export type TableBodyVariantsProps = VariantProps<typeof tableBodyVariants>;

export const tableFooterVariants = tcva([
  "border-t font-medium [&>tr]:last:border-b-0",
]);

export type TableFooterVariantsProps = VariantProps<typeof tableFooterVariants>;

export const tableRowVariants = tcva(["[&_tr]:border-b"]);

export type TableRowVariantsProps = VariantProps<typeof tableRowVariants>;

export const tableHeadVariants = tcva([
  "h-12 px-4 text-left align-middle font-bold",
]);

export type TableHeadVariantsProps = VariantProps<typeof tableHeadVariants>;

export const tableCellVariants = tcva(["p-4 align-middle"]);

export type TableCellVariantsProps = VariantProps<typeof tableCellVariants>;
