import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import ClientOnlyPortal from "@/components/ui/client-only-portal";
import { cn } from "@/lib/utils";

type DrawerProps = {
  children: React.ReactNode;
  isOpen: boolean;
  className?: string;
};

const Drawer = ({ children, isOpen, className }: DrawerProps) => {
  return (
    // TODO: implement direction variants using right-0, top-0, bottom-0 and top-0.
    <ClientOnlyPortal selector="body">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "50%" }}
            animate={{ opacity: 1, x: 20 }}
            exit={{ opacity: 0, x: "50%" }}
            transition={{
              duration: 0.35,
              delay: 0.1,
              ease: [0.76, 0, 0.24, 1],
            }}
            className={cn(
              `fixed z-50 right-0 left-5 top-0 bottom-0 bg-background
              border-ring/60 flex flex-col px-8 py-3 border`,
              className
            )}>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </ClientOnlyPortal>
  );
};

export default Drawer;
