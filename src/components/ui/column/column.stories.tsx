import type { Meta, StoryObj } from "@storybook/react";

import Column from "./column";
import Button from "../button";

const meta = {
  title: "UI/Column",
  component: Column,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Column>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ColumnComponent: Story = {
  args: {
    justify: "start",
    items: "start",
    className: "w-[300px] h-[300px] bg-yellow-400",
    children: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </>
    ),
  },
};
