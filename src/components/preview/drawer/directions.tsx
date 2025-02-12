import { DrawerTrigger, Drawer } from "@/components/ui/drawer";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type Open = null | "Left" | "Right" | "Top" | "Bottom";

const Preview = () => {
  // Note that this approach is only used because of multiple drawers here.
  // Open/Active drawer:
  const [open, setOpen] = useState<Open>(null);

  function toggleOpen(drawer: Open) {
    if (drawer == open) return setOpen(null);
    setOpen(drawer);
  }

  const drawers: Open[] = ["Left", "Right", "Top", "Bottom"];

  return (
    <div className="flex items-center space-x-2">
      {drawers.map((drawerName, i) => {
        const direction = drawerName?.toLowerCase() as
          | "left"
          | "right"
          | "top"
          | "bottom";
        return (
          <React.Fragment key={i}>
            <DrawerTrigger toggleOpen={() => toggleOpen(drawerName as Open)}>
              {drawerName}
            </DrawerTrigger>
            <Drawer
              className={cn(
                "space-y-3 md:py-6",
                (direction == "left" || direction == "right") &&
                  "max-w-[min(420px,80vw)]"
              )}
              direction={direction}
              isOpen={open == drawerName}>
              {/* Drawer content  */}
              <h2 className="text-foreground text-2xl font-bold">
                Hello there!
              </h2>
              <p className="text-foreground-muted">
                This is the drawer component! It looks beautiful doesn't it?
              </p>

              <p className="text-foreground-light">
                Don't like the animation? Don't like the CSS? Go ahead and
                change it! This isn't a component library after all :)
              </p>
              <DrawerTrigger toggleOpen={() => toggleOpen(drawerName)}>
                Close drawer
              </DrawerTrigger>
              {/* Drawer content end  */}
            </Drawer>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Preview;
