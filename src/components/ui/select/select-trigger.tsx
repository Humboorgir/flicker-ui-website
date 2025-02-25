import type { SelectProps } from "./select";

import Button from "@/components/ui/button";

type SelectTriggerOptions = React.ComponentProps<"button"> & {
  triggerId: string;
  menuId: string;
  isOpen: boolean;
  toggleOpen: () => void;
  variant: SelectProps["variant"];
};

export default function SelectTrigger({
  triggerId,
  menuId,
  isOpen,
  toggleOpen,
  variant,
  children,
}: SelectTriggerOptions) {
  return (
    <Button
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
