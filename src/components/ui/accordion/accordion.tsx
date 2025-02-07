import { cn } from "@/lib/utils";
import { forwardRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { FaAngleDown as AngleDownIcon } from "react-icons/fa6";

export type AccordionProps = React.HTMLProps<HTMLDivElement> & {
  /**
   * Accordion items
   */
  items: { trigger: string; content: string }[];
};

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, items, ...props }, ref) => {
    const [open, setOpen] = useState<number | null>(null);

    function toggleOpen(i: number) {
      if (open == i) return setOpen(null);
      setOpen(i);
    }

    return (
      <div className={cn("w-full", className)} {...props}>
        <div className="relative w-full divide-y divide-blue-200/15 z-10">
          {items.map((item, i) => {
            return (
              <>
                <button
                  onClick={() => toggleOpen(i)}
                  className={cn(
                    `w-full active:bg-blue-200/15 active:transition-all flex flex-col py-2 -ml-3 px-3 rounded-sm`,
                    open == i && "shadow-sm"
                  )}>
                  <div className="flex justify-between w-full pointer-events-none">
                    <h3 className="text-foreground flex text-left font-medium">{item.trigger}</h3>
                    <AngleDownIcon
                      className={cn(
                        "text-lg mr-1 mt-3 transition-all duration-300 pointer-events-none",
                        open == i && "rotate-180 ease-out"
                      )}
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {open == i && (
                    <motion.div
                      key={open}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                        opacity: {
                          duration: 0.3,
                        },
                      }}
                      className="text-foreground-light text-left m-0 p-0 font-[0] overflow-hidden flex items-stretch pointer-events-none">
                      <div className="grow p-2">{item.content}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            );
          })}
        </div>
      </div>
    );
  }
);

Accordion.displayName = "Accordion";

export default Accordion;
