import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Modal, ModalClose, ModalContent, ModalTrigger } from ".";
import { Button } from "../button";
import { Card, CardContent, CardFooter, CardHeader } from "../card";

type Story = StoryObj<typeof Modal>;

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta<typeof Modal>;

export const Default: Story = {
  decorators: [
    () => (
      <Modal>
        <ModalTrigger asChild>
          <Button variant="flat">Triger Modal</Button>
        </ModalTrigger>

        <ModalContent>
          <Card className="w-96">
            <CardHeader>Modal</CardHeader>

            <CardContent>this is modal content</CardContent>

            <CardFooter>
              <ModalClose variant="flat">Close</ModalClose>
            </CardFooter>
          </Card>
        </ModalContent>
      </Modal>
    ),
  ],
};
