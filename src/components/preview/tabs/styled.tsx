import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Preview = () => {
  const [selected, setSelected] = useState("");
  return (
    <Tabs onChange={(selected) => setSelected(selected)} openByDefault="one">
      <TabsList className="relative w-fit">
        <span
          className={cn(
            `absolute bottom-0 left-0 bg-foreground rounded-md h-[2px] w-[50%] flex z-10
            transition-transform duration-200`,
            selected == "two" && "translate-x-[100%] "
          )}
        />
        <TabsTrigger className="block" variant="ghost" value="one">
          Tab One
        </TabsTrigger>
        <TabsTrigger variant="ghost" value="two">
          Tab Two
        </TabsTrigger>
      </TabsList>

      <TabsContent className="bg-foreground/10 border-ring p-3 rounded-md h-[120px]" value="one">
        Hey, this is tab one! Click on 'Tab Two' to open the second tab.
      </TabsContent>
      <TabsContent className="bg-foreground/10 border-ring p-3 rounded-md h-[120px]" value="two">
        You can put anything here. That includes text, React components, etc.
      </TabsContent>
    </Tabs>
  );
};

export default Preview;
