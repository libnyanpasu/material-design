import { selectTriggerVariants } from "@libnyanpasu/material-design-components";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectProps,
  SelectTrigger,
  SelectValue,
} from "./";

type Story = StoryObj<typeof Select>;

const SelectTemplate = ({ children, ...args }: SelectProps) => (
  <Select {...args}>
    <SelectTrigger>
      <SelectValue placeholder="Select Theme" />
    </SelectTrigger>

    <SelectContent>
      <SelectGroup>
        <SelectLabel>Theme Label</SelectLabel>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
);

export default {
  title: "Components/Select",
  component: SelectTemplate,
  argTypes: {
    variant: {
      options: Object.entries(
        selectTriggerVariants.config?.variants?.variant ?? {},
      ).map(([key]) => key),
      control: { type: "select" },
    },
  },
} as Meta<typeof Select>;

export const Default: Story = {
  args: {
    children: "Hello, World!",
  },
};
