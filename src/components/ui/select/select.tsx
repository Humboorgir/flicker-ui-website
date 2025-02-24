// NOTE: this component hasnt been tested and is only being added for my own usage.
// TODO: rewrite the animations with framer-motion and organize the code

import Button, { buttonVariants } from "@/components/ui/button";

import { type VariantProps } from "class-variance-authority";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";

type SelectProps = Omit<React.ComponentProps<"div">, "onChange"> & {
  /**
   * List of select options.
   */
  options: { name: string; value: string }[];
  /**
   * Variant of the trigger button.
   */
  variant?: VariantProps<typeof buttonVariants>["variant"];
  /**
   * If true, scroll-y will be set to `auto`.
   */
  scrollable?: boolean;
  /**
   * A function that runs everytime the selected option changes.
   */
  onChange?: (option: { name: string; value: string }) => void;
};

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ variant = "default", scrollable = false, children, options, className, onChange = () => {} }, ref) => {
    type Option = { name: string; value: string };

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<Option>({ name: "", value: "" });

    function toggleOpen() {
      setIsOpen(!isOpen);
    }

    function selectOption(option: Option) {
      onChange(option);
      setSelected(option);
      setIsOpen(false);
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
      <div ref={setRefs} className={cn("relative inline-block", className)}>
        <Button variant={variant} onClick={toggleOpen}>
          {selected.value ? selected.name : children}
        </Button>

        {/* select options  */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
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
                `absolute top-full right-0 origin-top-right mt-1 max-h-[200px] rounded-md flex flex-col items-stretch`,
                scrollable && "overflow-y-scroll"
              )}>
              {options &&
                options.map((option, i) => (
                  <Button
                    key={i}
                    className="border-t-0 first-of-type:border-t rounded-none first-of-type:rounded-t-md last-of-type:rounded-b-md"
                    variant="outline"
                    onClick={() => selectOption(option)}>
                    {option.name}
                  </Button>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

export default Select;
