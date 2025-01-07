import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ResizeContainer, ResizeHandle, ResizePanel } from ".";

type Story = StoryObj<typeof ResizeContainer>;

export default {
  title: "Components/Resize",
  component: ResizeContainer,
} as Meta<typeof ResizeContainer>;

export const Default: Story = {
  decorators: [
    () => {
      const body = document.body;

      body.style.padding = "0";

      return (
        <ResizeContainer className="w-full">
          <ResizePanel className="w-ful h-svh">
            <div
              style={{
                background: "#eaeaea",
                height: "100%",
              }}
            >
              panel one
            </div>
          </ResizePanel>

          <ResizeHandle />

          <div>Right</div>
        </ResizeContainer>
      );
    },
  ],
};
