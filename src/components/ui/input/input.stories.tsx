import type { Meta, StoryObj } from "@storybook/react";

import Input from "./input";
import Container from "../container";

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputComponent: Story = {
  render: () => <Input className="w-[240px]" placeholder="Email address" />,
};
