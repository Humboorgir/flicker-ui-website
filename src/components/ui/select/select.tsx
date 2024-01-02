// NOTE: this component hasnt been tested and is only being added for my own usage.
// TODO: rewrite the animations with framer-motion and organize the code

import Button from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { useState } from "react";

type Option = {
  name: string;
  value: string;
};

type Props = Omit<React.HTMLProps<HTMLDivElement>, "onChange"> & {
  children: React.ReactNode;
  options: Option[];
  variant?: "default" | "secondary" | "outline" | "ghost" | "link";
  onChange?: (option: Option) => void;
};

const Select = ({ children, options, variant = "default", className, onChange = () => {} }: Props) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option>({ name: "", value: "" });

  function toggleOpen() {
    setOpen(!open);
  }

  function selectOption(option: Option) {
    onChange(option);
    setSelected(option);
    setOpen(false);
  }

  // select component
  return (
    <div className={cn("relative w-fit h-fit", className)}>
      <Button
        className={cn("border-secondary text-secondary transition-all", open && "rounded-b-none")}
        rippleColor="#7C72FF"
        variant={variant}
        onClick={toggleOpen}>
        {selected.value ? selected.name : children}
      </Button>
      {/* select options  */}

      <div
        className={cn(
          `absolute invisible top-full left-[50%] translate-x-[-50%] min-w-full bg-neutral-900 z-20 scale-[.8]
           opacity-0 transition-all duration-100 origin-top max-h-[200px] overflow-y-scroll delay-100 rounded-b-md
           border-b border-b-secondary`,
          open && "scale-100 opacity-100 visible"
        )}>
        {options &&
          options.map((option, i) => (
            <Button
              key={i}
              className={cn(
                `w-full justify-start text-secondary border-secondary border-t-0 first-of-type:border-t rounded-none
            last-of-type:rounded-b-md`
              )}
              rippleColor="#7C72FF"
              variant="outline"
              onClick={() => selectOption(option)}>
              {option.name}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Select;
