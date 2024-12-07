import type { Meta, StoryObj } from "@storybook/react";
import { CircularProgress } from ".";

type Story = StoryObj<typeof CircularProgress>;

export default {
  title: "Components/Progress",
  component: CircularProgress,
  argTypes: {
    indeterminate: {
      control: { type: "boolean" },
    },
    className: {
      control: { type: "select" },
      options: ["size-12", "size-8", "size-6"],
    },
    value: {
      control: { type: "range", min: 0, max: 100 },
    },
  },
} as Meta<typeof CircularProgress>;

export const CircularIndeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

export const CircularDeterminate: Story = {
  args: {
    indeterminate: false,
    value: 50,
  },
};

export const CircularWithChildren: Story = {
  args: {
    indeterminate: false,
    value: 50,
    children: "50%",
  },
};
