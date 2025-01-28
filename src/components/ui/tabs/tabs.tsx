"use client";

import type { VariantProps } from "class-variance-authority";

import Button, { buttonVariants } from "@/components/ui/button";

import React, { useContext, useState, createContext, memo, useMemo, useEffect } from "react";
import usePrevious from "@/hooks/usePrevious";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type SetSelected = React.Dispatch<React.SetStateAction<string>>;
type SetTabs = React.Dispatch<React.SetStateAction<{ value: string }[]>>;
type Tab = { value: string };

// Three separate contexts because they have different change patterns
const SelectedContext = createContext<{ selected: string }>({
  selected: "",
});
const TabsContext = createContext<{ tabs: Tab[]; setTabs: SetTabs }>({ tabs: [], setTabs: () => {} });
const SetSelectedContext = createContext<{ setSelected: SetSelected }>({ setSelected: () => {} });

type TabsProps = {
  openByDefault: string;
  onChange?: (selected: string) => void;
  children: React.ReactNode;
  className?: string;
};

export const Tabs = ({ openByDefault, onChange, children, className }: TabsProps) => {
  const [selected, setSelected] = useState(openByDefault);
  const [tabs, setTabs] = useState<{ value: string }[]>([]);

  useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected]);

  const selectedContext = useMemo(() => ({ selected }), [selected]);
  const tabsContext = useMemo(() => ({ tabs, setTabs }), [tabs, setTabs]);
  const setSelectedContext = useMemo(() => ({ setSelected }), [setSelected]);
  return (
    <SelectedContext.Provider value={selectedContext}>
      <TabsContext.Provider value={tabsContext}>
        <SetSelectedContext.Provider value={setSelectedContext}>
          <div className={cn("relative w-min h-fit flex flex-col", className)}>{children}</div>
        </SetSelectedContext.Provider>
      </TabsContext.Provider>
    </SelectedContext.Provider>
  );
};

type TabsTriggerProps = {
  children: React.ReactNode;
  className?: string;
  value: string;
} & VariantProps<typeof buttonVariants>;

export const TabsTrigger = memo(function TabsTrigger({
  children,
  className,
  variant = "outline",
  value,
  ...props
}: TabsTriggerProps) {
  const { setSelected } = useContext(SetSelectedContext);
  return (
    <Button
      className={cn("mr-3 last-of-type:mr-0", className)}
      onClick={() => setSelected(value)}
      variant={variant}
      {...props}>
      {children}
    </Button>
  );
});

type TabsListProps = {
  children: React.ReactNode;
  className?: string;
};

export const TabsList = ({ children, className, ...props }: TabsListProps) => {
  return (
    <div className={cn("flex items-center", className)} {...props}>
      {children}
    </div>
  );
};

type TabsContentProps = {
  children: React.ReactNode;
  className?: string;
  value: string;
};

export const TabsContent = ({ children, className, value, ...props }: TabsContentProps) => {
  const { selected } = useContext(SelectedContext);
  const { tabs, setTabs } = useContext(TabsContext);
  const prevSelected = usePrevious(selected);

  useEffect(() => {
    setTabs((prev) => [...prev, { value }]);

    return () => {
      setTabs((prev) => {
        if (prev.length) {
          prev.pop();
          return prev;
        }
        return prev;
      });
    };
  }, []);

  if (selected != value) return null;

  const prevSelectedTabIndex = tabs.findIndex((tab) => tab.value == prevSelected);
  const currentTabIndex = tabs.findIndex((tab) => tab.value == value);
  // Directional aware transition
  const initialX = currentTabIndex > prevSelectedTabIndex ? 20 : -20;

  return (
    selected == value && (
      <motion.div
        initial={{ opacity: 0, x: initialX }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
        className={cn("w-full left-0 top-full mt-2", className)}
        {...props}>
        {children}
      </motion.div>
    )
  );
};
