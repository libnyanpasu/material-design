import type { Meta, StoryObj } from "@storybook/react";
import { Button, buttonVariants } from "./";

type Story = StoryObj<typeof Button>;

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
  },
  argTypes: {
    variant: {
      options: Object.entries(
        buttonVariants.config?.variants?.variant ?? {},
      ).map(([key]) => key),
      control: { type: "select" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    icon: {
      control: { type: "boolean" },
    },
  },
} as Meta<typeof Button>;

export const Default: Story = {
  args: {
    variant: "raised",
  },
};

export const Icon: Story = {
  args: {
    children: "✕",
    icon: true,
    variant: "flat",
  },
};
