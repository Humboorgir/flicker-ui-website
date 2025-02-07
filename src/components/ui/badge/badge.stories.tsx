import type { Meta, StoryObj } from "@storybook/react";

import Badge from "./badge";

const meta = {
  title: "UI/badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "primary",
    children: <>Hello there</>,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: <>Hello there</>,
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: <>Hello there</>,
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: <>Hello there</>,
  },
};
