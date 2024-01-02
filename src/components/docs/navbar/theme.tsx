import Select from "@/components/ui/select";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { IoIosColorWand as Theme } from "react-icons/io";

const ThemeComponent = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

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
      className="flex items-center mr-2 ml-auto"
      onChange={(option) => {
        setTheme(option.value);
      }}>
      Theme
      <Theme className="text-xl ml-1" />
    </Select>
  );
};

export default ThemeComponent;
