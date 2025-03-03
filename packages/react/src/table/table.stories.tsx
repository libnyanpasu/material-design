import { tableContainerVariants } from "@libnyanpasu/material-design-components";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from ".";

type Story = StoryObj<typeof Table>;

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    variant: {
      options: Object.entries(
        tableContainerVariants.config?.variants?.variant ?? {},
      ).map(([key]) => key),
      control: { type: "select" },
    },
  },
} as Meta<typeof Table>;

export const Example: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead className="w-24">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
