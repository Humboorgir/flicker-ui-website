import type { Meta, StoryObj } from "@storybook/react";

import Accordion from "./accordion";

const meta = {
  title: "UI/accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "w-[80vw]",
    items: [
      {
        trigger: "Accordion tab 1",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto optio in quis adipisci delectus.",
      },
      {
        trigger: "Accordion tab 2",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto optio in quis adipisci delectus.",
      },
      {
        trigger: "Accordion tab 3",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto optio in quis adipisci delectus.",
      },
      {
        trigger: "Accordion tab 4",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto optio in quis adipisci delectus.",
      },
    ],
  },
};
