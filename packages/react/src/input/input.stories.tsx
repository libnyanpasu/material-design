import { inputContainerVariants } from "@libnyanpasu/material-design-components";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Input } from "./";

type Story = StoryObj<typeof Input>;

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    variant: {
      options: Object.entries(
        inputContainerVariants.config?.variants?.variant ?? {},
      ).map(([key]) => key),
      control: { type: "select" },
    },
  },
} as Meta<typeof Input>;

export const Default: Story = {
  render: (args) => (
    <Input type="email" placeholder="Email" label="Email" {...args} />
  ),
};

export const WithoutLabel: Story = {
  render: (args) => <Input type="text" {...args} />,
};

export const WithValue: Story = {
  render: (args) => <Input type="text" label="Email" value="test" {...args} />,
};

export const WithDefaultValue: Story = {
  render: (args) => (
    <Input type="text" label="Email" defaultValue="test" {...args} />
  ),
};
