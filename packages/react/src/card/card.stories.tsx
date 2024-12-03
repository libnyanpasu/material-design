import { cardVariants } from "@nyanpasu/material-design-components";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardProps } from ".";
import { Button } from "../button";

const CardTemplate = ({ children, ...args }: CardProps) => (
  <Card {...args}>
    <CardHeader>My card header</CardHeader>

    <CardContent>{children}</CardContent>

    <CardFooter>
      <Button variant="flat">Action</Button>
    </CardFooter>
  </Card>
);

type Story = StoryObj<typeof Card>;

export default {
  title: "Components/Card",
  component: CardTemplate,
  argTypes: {
    variant: {
      options: Object.entries(cardVariants.config?.variants?.variant ?? {}).map(
        ([key]) => key,
      ),
      control: { type: "select" },
    },
    divider: {
      control: { type: "boolean" },
    }
  },
} as Meta<typeof Card>;

export const Default: Story = {
  args: {
    children: "Hello, World!",
  },
};
