import type { Meta, StoryObj } from "@storybook/react";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "../button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "./";

type Story = StoryObj<typeof Dialog>;

export default {
  title: "Components/Dialog",
  component: Dialog,
} as Meta<typeof Dialog>;

export const Default: Story = {
  decorators: [
    () => (
      <Dialog>
        <DialogTrigger asChild>
          <Button asChild>
            <motion.button>open dialog</motion.button>
          </Button>
        </DialogTrigger>

        <DialogContent
          contentPrefix={<DialogHeader>Nyanpasu</DialogHeader>}
          contentSuffix={
            <DialogFooter>
              <Button variant="flat">Submit</Button>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          }
        >
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
        </DialogContent>
      </Dialog>
    ),
  ],
};

export const FullScreen: Story = {
  decorators: [
    () => (
      <Dialog>
        <DialogTrigger asChild>
          <Button asChild>
            <motion.button>open dialog</motion.button>
          </Button>
        </DialogTrigger>

        <DialogContent
          fullScreen
          contentPrefix={<DialogHeader>Nyanpasu</DialogHeader>}
          contentSuffix={
            <DialogFooter>
              <Button variant="flat">Submit</Button>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          }
        >
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
          <div>my content</div>
        </DialogContent>
      </Dialog>
    ),
  ],
};
