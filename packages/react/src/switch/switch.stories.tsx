import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Switch } from "./";

type Story = StoryObj<typeof Switch>;

export default {
  title: "Components/Switch",
  component: Switch,
} as Meta<typeof Switch>;

export const Default: Story = {
  render: () => <Switch />,
};
