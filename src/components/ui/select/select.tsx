import Button, { buttonVariants } from "@/components/ui/button";

import { type VariantProps } from "class-variance-authority";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { useEffect, useId, useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import SelectOption from "./selectOption";
import SelectMenu from "./selectMenu";
import SelectTrigger from "./select-trigger";

export type SelectProps = Omit<React.ComponentProps<"div">, "onChange"> & {
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
    // Used purely for accessibility-related purposes
    const [focused, setFocused] = useState<Option>(options[0]);

    function toggleOpen() {
      setIsOpen(!isOpen);
    }

    function selectOption(option: Option) {
      onChange(option);
      setSelected(option);
      setIsOpen(false);
      setFocused(options[0]);
    }

    const numberOfOptions = options.length;

    const moveFocusUp = () => {
      if (options.indexOf(focused) > 0) {
        return setFocused(() => options[options.indexOf(focused) - 1]);
      }
      setFocused(options[numberOfOptions - 1]);
    };
    const selectFocusedOption = () => {
      selectOption(options[options.indexOf(focused)]);
    };

    const moveFocusDown = () => {
      if (options.indexOf(focused) < numberOfOptions - 1) {
        return setFocused(() => options[options.indexOf(focused) + 1]);
      }
      setFocused(options[0]);
    };

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

    // unique component ID, used for accessibility purposes.
    const id = useId();
    const triggerId = `${id}-trigger`;
    const menuId = `${id}-menu`;

    return (
      <div
        // Handling keyboard interactions
        onKeyDown={(e) => {
          if (!isOpen) return;
          if (e.key == "Escape") return toggleOpen();
          // To prevent scrolling:
          e.preventDefault();
          if (e.key == "ArrowUp") return moveFocusUp();
          if (e.key == "ArrowDown") return moveFocusDown();
          if (e.key == "Enter" || e.key == "Space") return selectFocusedOption();
        }}
        ref={setRefs}
        className={cn("relative inline-block", className)}>
        <SelectTrigger
          triggerId={triggerId}
          menuId={menuId}
          isOpen={isOpen}
          toggleOpen={toggleOpen}
          variant={variant}>
          {selected.value ? selected.name : children}
        </SelectTrigger>

        <SelectMenu
          isOpen={isOpen}
          menuId={menuId}
          options={options}
          focusedOption={focused}
          scrollable={scrollable}
          selectOption={selectOption}
        />
      </div>
    );
  }
);

export default Select;
