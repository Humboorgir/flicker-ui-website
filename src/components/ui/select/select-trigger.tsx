import type { SelectProps } from "./select";

import React from "react";
import Button from "@/components/ui/button";

type SelectTriggerProps = React.ComponentProps<"button"> & {
  triggerId: string;
  menuId: string;
  isOpen: boolean;
  toggleOpen: () => void;
  variant: SelectProps["variant"];
};

export const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ triggerId, menuId, isOpen, toggleOpen, variant, children }, ref) => {
    return (
      <Button
        ref={ref}
        role="combobox"
        id={triggerId}
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-haspopup="listbox"
        variant={variant}
        onClick={toggleOpen}>
        {children}
      </Button>
    );
  }
);

export default SelectTrigger;
