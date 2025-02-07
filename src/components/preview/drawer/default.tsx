import { DrawerTrigger, Drawer } from "@/components/ui/drawer";
import { useState } from "react";

const Preview = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((prev) => !prev);
  }
  return (
    <>
      <DrawerTrigger toggleOpen={toggleOpen}>Click to open</DrawerTrigger>
      <Drawer
        className="max-w-[min(420px,80vw)] space-y-3 md:py-6"
        direction="left"
        isOpen={isOpen}>
        {/* Drawer content  */}
        <h2 className="text-foreground text-2xl font-bold">Hello there!</h2>
        <p className="text-foreground-muted">
          This is the drawer component! It looks beautiful doesn't it?
        </p>

        <p className="text-foreground-light">
          Don't like the animation? Don't like the CSS? Go ahead and change it!
          This isn't a component library after all :)
        </p>
        <DrawerTrigger toggleOpen={toggleOpen}>Close drawer</DrawerTrigger>
      </Drawer>
    </>
  );
};

export default Preview;
