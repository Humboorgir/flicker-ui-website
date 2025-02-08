import Modal from "@/components/ui/modal";
import Button from "@/components/ui/button";
import Typography from "@/components/ui/typography";

import { useState } from "react";

const Preview = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal className="items-start" open={open} handleClose={() => setOpen(false)}>
        <Typography className="mb-2" variant="h3">
          Example Modal
        </Typography>
        <Typography className="mb-8" variant="p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Typography>
        <Button className="ml-auto" onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal>
    </>
  );
};

export default Preview;
