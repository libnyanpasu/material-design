import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
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
    onClick: () => console.log("clicked"),
  },
};

export const Icon: Story = {
  args: {
    children: "✕",
    icon: true,
    variant: "flat",
  },
};

export const Loading: Story = {
  render: (args) => {
    const [isPending, startTransition] = React.useTransition();

    const handleClick = () => {
      startTransition(async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      });
    };

    return (
      <Button {...args} loading={isPending} onClick={handleClick}>
        Click Loading
      </Button>
    );
  },
};
