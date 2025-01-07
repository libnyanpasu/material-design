import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./";

type Story = StoryObj<typeof DropdownMenu>;

export default {
  title: "Components/Dropdown Menu",
  component: DropdownMenu,
} as Meta<typeof DropdownMenu>;

export const Default: Story = {
  decorators: [
    () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="flat">Open</Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>My menu</DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuCheckboxItem checked>
            Checkbox Item 1
          </DropdownMenuCheckboxItem>

          <DropdownMenuCheckboxItem>Checkbox Item 2</DropdownMenuCheckboxItem>

          <DropdownMenuSeparator />

          <DropdownMenuRadioGroup value="1">
            <DropdownMenuRadioItem value="1">
              Radio Item 1
            </DropdownMenuRadioItem>

            <DropdownMenuRadioItem value="2">
              Radio Item 2
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  ],
};
