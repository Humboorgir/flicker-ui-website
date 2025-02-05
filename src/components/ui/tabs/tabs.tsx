import type { VariantProps } from "class-variance-authority";

import Button, { buttonVariants } from "@/components/ui/button";

import React, { useContext, useState, createContext, memo, useMemo, useEffect, useRef } from "react";
import usePrevious from "@/hooks/usePrevious";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type SetSelected = React.Dispatch<React.SetStateAction<string>>;
type SetTabs = React.Dispatch<React.SetStateAction<string[]>>;

// Three separate contexts because they have different change patterns
const SelectedContext = createContext<{ selected: string }>({
  selected: "",
});
const TabsContext = createContext<{ tabs: string[]; setTabs: SetTabs }>({ tabs: [], setTabs: () => {} });
const SetSelectedContext = createContext<{ setSelected: SetSelected }>({ setSelected: () => {} });

type TabsProps = {
  /**
   * Which tab should be open by default?
   */
  openByDefault: string;
  /**
   * A function that runs everytime the active tab changes.
   */
  onChange?: (selected: string) => void;
  /**
   * Tab triggers and content.
   */
  children: React.ReactNode;
  /**
   * For customization purposes.
   */
  className?: string;
};

export const Tabs = ({ openByDefault, onChange, children, className }: TabsProps) => {
  const [selected, setSelected] = useState(openByDefault);
  const [tabs, setTabs] = useState<string[]>([]);

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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { setSelected } = useContext(SetSelectedContext);
  const { selected } = useContext(SelectedContext);

  const isActive = selected == value;

  if (isActive) {
    buttonRef.current?.focus();
  }
  return (
    <Button
      role="tab"
      tabIndex={isActive ? 0 : -1}
      aria-controls={value}
      aria-selected={isActive}
      className={cn("mr-3 last-of-type:mr-0", className)}
      onClick={() => setSelected(value)}
      variant={variant}
      ref={buttonRef}
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
  const { selected } = useContext(SelectedContext);
  const { setSelected } = useContext(SetSelectedContext);
  const { tabs } = useContext(TabsContext);

  const handleKeyboardNavigation: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    const activeTab = tabs.find((tab) => tab == selected);

    if (e.key === "ArrowRight") {
      // If we've reached the end of the tablist:
      if (tabs.indexOf(selected) == tabs.length - 1) {
        return setSelected(tabs[0]);
      }
      // Otherwise:
      setSelected(tabs[tabs.indexOf(activeTab!) + 1]);
    } else if (e.key === "ArrowLeft") {
      // If we've reached the beginning of the tablist:
      if (tabs.indexOf(selected) == 0) {
        return setSelected(tabs[tabs.length - 1]);
      }
      // Otherwise:
      setSelected(tabs[tabs.indexOf(activeTab!) + -1]);
    }
  };
  return (
    <div
      role="tablist"
      onKeyDown={handleKeyboardNavigation}
      className={cn("flex items-center", className)}
      {...props}>
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
    setTabs((prev) => [...prev, value]);

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

  const prevSelectedTabIndex = tabs.findIndex((tab) => tab == prevSelected);
  const currentTabIndex = tabs.findIndex((tab) => tab == value);
  // Directional aware transition
  const initialX = currentTabIndex > prevSelectedTabIndex ? 20 : -20;

  return (
    selected == value && (
      <motion.div
        role="tabpanel"
        id={value}
        tabIndex={0}
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
