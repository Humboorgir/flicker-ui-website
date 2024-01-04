import type { Meta, StoryObj } from "@storybook/react";

import Modal from "./modal";
import { useState } from "react";
import Button from "../button";

const meta = {
  title: "UI/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalComponent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen((prev) => !prev)}>Open modal</Button>
        <Modal handleClose={() => setOpen(false)} open={open}>
          Testtsststt
        </Modal>
      </div>
    );
  },
};
