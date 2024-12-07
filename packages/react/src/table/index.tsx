import {
  tableBodyVariants,
  tableCellVariants,
  tableContainerVariants,
  tableFooterVariants,
  tableHeaderVariants,
  tableHeadVariants,
  tableRowVariants,
  tableVariants,
  type TableBodyVariantsProps,
  type TableCellVariantsProps,
  type TableContainerVariantsProps,
  type TableFooterVariantsProps,
  type TableHeaderVariantsProps,
  type TableHeadVariantsProps,
  type TableRowVariantsProps,
  type TableVariantsProps,
} from "@nyanpasu/material-design-components";
import { cn } from "@nyanpasu/material-design-libs";
import React from "react";

const TableContext = React.createContext<TableContainerVariantsProps>({});

export const Table = ({
  variant,
  className,
  ...props
}: React.ComponentProps<"table"> &
  TableContainerVariantsProps &
  TableVariantsProps) => {
  return (
    <TableContext.Provider value={{ variant }}>
      <div className={cn(tableContainerVariants({ variant }))}>
        <table className={cn(tableVariants(), className)} {...props} />
      </div>
    </TableContext.Provider>
  );
};

export const TableHeader = ({
  variant,
  className,
  ...props
}: React.ComponentProps<"thead"> & TableHeaderVariantsProps) => {
  const context = React.useContext(TableContext);

  return (
    <thead
      className={cn(
        tableHeaderVariants({
          variant: variant ?? context.variant,
        }),
        className,
      )}
      {...props}
    />
  );
};

export const TableBody = ({
  className,
  ...props
}: React.ComponentProps<"tbody"> & TableBodyVariantsProps) => {
  return <tbody className={cn(tableBodyVariants(), className)} {...props} />;
};

export const TableFooter = ({
  className,
  ...props
}: React.ComponentProps<"tfoot"> & TableFooterVariantsProps) => {
  return <tfoot className={cn(tableFooterVariants(), className)} {...props} />;
};

export const TableRow = ({
  className,
  ...props
}: React.ComponentProps<"tr"> & TableRowVariantsProps) => {
  return <tr className={cn(tableRowVariants(), className)} {...props} />;
};

export const TableHead = ({
  className,
  ...props
}: React.ComponentProps<"th"> & TableHeadVariantsProps) => {
  return <th className={cn(tableHeadVariants(), className)} {...props} />;
};

export const TableCell = ({
  className,
  ...props
}: React.ComponentProps<"td"> & TableCellVariantsProps) => {
  return <td className={cn(tableCellVariants(), className)} {...props} />;
};
