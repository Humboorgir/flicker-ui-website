import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip, TooltipTrigger, TooltipContent } from "./tooltip";

const meta = {
  title: "UI/tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <TooltipTrigger>
          <p>Hover this</p>
        </TooltipTrigger>
        <TooltipContent>Hello there</TooltipContent>
      </>
    ),
  },
};
