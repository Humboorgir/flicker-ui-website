import PreviewBox from "@/components/docs/previewBox";
import Button from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import Typography from "@/components/ui/typography";

import { useState } from "react";

const ModalPreview = () => {
  const [open, setOpen] = useState(false);
  return (
    // @ts-ignore
    <PreviewBox>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal className="items-start" open={open} handleClose={() => setOpen(false)}>
        <Typography className="mb-2" variant="h3">
          Example Modal
        </Typography>
        <Typography className="mb-8" variant="p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Typography>
        <Button className="ml-auto" variant="outline" onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal>
    </PreviewBox>
  );
};

export default ModalPreview;
