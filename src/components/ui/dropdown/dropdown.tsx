import type { VariantProps } from "class-variance-authority";

import React, { useRef, useState } from "react";
import Button, { buttonVariants } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useClickOutside } from "@/hooks/useClickOutside";

type DropdownProps = React.ComponentProps<"div"> & {
  /**
   * classNames to apply to the dropdown trigger
   */
  triggerClassName?: string;
  /**
   * classNames to apply to the dropdown menu
   */
  listClassName?: string;
  /**
   * Variant to use for the trigger's button
   */
  triggerVariant?: VariantProps<typeof buttonVariants>["variant"];
  /**
   * List of links to display
   */
  links: { name: string; href: string }[];
};

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (
    { children, className, triggerClassName, listClassName, triggerVariant = "outline", links, ...props },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    function toggleOpen() {
      setIsOpen((prev) => !prev);
    }
    const clickOutsideRef = useClickOutside(() => setIsOpen(false));

    // Merge forwarded ref and clickOutsideRef
    const setRefs = (node: HTMLDivElement | null) => {
      // Handle forwarded ref
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
      // Handle clickOutsideRef
      if (clickOutsideRef) {
        (clickOutsideRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    };

    return (
      <div ref={setRefs} className={cn("relative inline-block", className)} {...props}>
        <Button className={triggerClassName} variant={triggerVariant} onClick={toggleOpen}>
          {children}
        </Button>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{
                opacity: 0,
                scale: 0.87,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.25,
                delay: 0.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className={cn(
                `bg-background origin-top-right overflow-hidden rounded-md border border-ring
            divide-y divide-foreground/10 absolute right-0 top-full mt-2 w-52`,
                listClassName
              )}>
              {links.map((item, i) => {
                return (
                  <Button
                    key={i}
                    onClick={toggleOpen}
                    variant="ghost"
                    className="justify-start w-full px-4 py-2 rounded-none"
                    href={item.href}>
                    {item.name}
                  </Button>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

export default Dropdown;
