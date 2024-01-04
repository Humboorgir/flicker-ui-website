import type { Meta, StoryObj } from "@storybook/react";

import Select from "./select";

const meta = {
  title: "UI/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

const options = [
  {
    name: "Test 1",
    value: "test1",
  },
  {
    name: "Test 2",
    value: "test2",
  },
  {
    name: "Test 3",
    value: "test3",
  },
];
export const SelectComponent: Story = {
  args: {
    options: options,
    variant: "default",
    children: "Hello there",
  },
};
