import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Input } from "./";

type Story = StoryObj<typeof Input>;

export default {
  title: "Components/Input",
  component: Input,
} as Meta<typeof Input>;

export const Default: Story = {
  render: () => <Input type="email" placeholder="Email" label="Email" />,
};
