import type { Meta, StoryObj } from "@storybook/react";

import Button from "./button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default button",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary button",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline button",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost button",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Link button",
    variant: "link",
  },
};
