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
  },
};

export const Icon: Story = {
  args: {
    children: "✕",
    icon: true,
    variant: "flat",
  },
};

// issue: https://github.com/storybookjs/storybook/issues/29189
const LoadingTemplate = () => {
  const [isPending, startTransition] = React.useTransition();

  const handleClick = () => {
    startTransition(async () => {
      new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
    });
  };

  return (
    <Button onClick={handleClick} loading={isPending}>
      Click to loading
    </Button>
  );
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
