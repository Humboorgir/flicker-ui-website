import type { Meta, StoryObj } from "@storybook/react";

import Row from "./row";
import Button from "../button";

const meta = {
  title: "UI/Row",
  component: Row,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Row>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RowComponent: Story = {
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
