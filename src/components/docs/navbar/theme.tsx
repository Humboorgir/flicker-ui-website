import Select from "@/components/ui/select";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { IoIosColorWand as ThemeIcon } from "react-icons/io";

type ThemeProps = {
  className?: string;
};

const ThemeComponent = ({ className }: ThemeProps) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const options = [
    {
      name: `Light theme`,
      value: "light",
    },
    {
      name: "Dark theme",
      value: "dark",
    },
    {
      name: "Use system",
      value: "system",
    },
  ];
  return (
    <Select
      variant="ghost"
      options={options}
      className={className}
      onChange={(option) => {
        setTheme(option.value);
      }}>
      Theme
      <ThemeIcon className="text-xl ml-1" />
    </Select>
  );
};

export default ThemeComponent;
