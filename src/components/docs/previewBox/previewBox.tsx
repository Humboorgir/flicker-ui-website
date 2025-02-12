import type { TabsProps } from "@/components/ui/tabs/tabs";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import useComponentCode from "@/hooks/useComponentCode";
import useComponentPreview from "@/hooks/useComponentPreview";
import useHighlightCode from "@/hooks/useHighlightCode";

type Props = Omit<TabsProps, "openByDefault"> & {
  component: string;
  textSmall?: boolean;
};

const PreviewBox = ({ children, component, textSmall = false, className, ...props }: Props) => {
  const [activeTab, setActiveTab] = useState<"code" | "preview">("preview");

  const { code: componentCode } = useComponentCode(component);
  const { preview: componentPreview } = useComponentPreview(component);
  const { highlightedCode } = useHighlightCode(componentCode);

  return (
    <Tabs
      openByDefault="preview"
      onChange={(activeTab) => setActiveTab(activeTab as "code" | "preview")}
      className={cn("w-full h-[400px]", className)}
      {...props}>
      <TabsList className="relative">
        <span
          aria-hidden
          className={cn(
            `absolute bottom-0 left-0 bg-foreground rounded-md h-[2px] w-[80px] z-10
            transition-transform duration-200`,
            activeTab == "code" && "translate-x-[92px] "
          )}
        />
        <TabsTrigger className="w-[80px]" value="preview" variant="ghost">
          Preview
        </TabsTrigger>
        <TabsTrigger className="w-[80px]" value="code" variant="ghost">
          Code
        </TabsTrigger>
      </TabsList>

      <TabsContent
        className="h-[360px] grid place-items-center border border-ring rounded-md"
        value="preview">
        {componentPreview}
      </TabsContent>

      <TabsContent
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
        className={cn(
          `w-[1px] min-w-full h-full overflow-auto [&_pre]:text-sm md:[&_pre]:text-base`,
          textSmall && "md:[&_pre]:text-[15px]"
        )}
        value="code"
      />
    </Tabs>
  );
};

export default PreviewBox;
