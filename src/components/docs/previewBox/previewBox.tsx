import Column from "@/components/ui/column";
import Row from "@/components/ui/row";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/button";

type Props = React.HTMLProps<HTMLDivElement>;

const PreviewBox = ({ children, className, ...props }: Props) => {
  console.log();
  const [state, setState] = useState<"code" | "preview">("preview");
  return (
    // @ts-ignore
    <Column items="start" className={cn("flex flex-col max-w-[800px] w-[100%]", className)} {...props}>
      <Row className="w-full">
        <Button className="border-b-2 border-b-foreground rounded-none" variant="ghost">
          Preview
        </Button>
        <Button variant="ghost">Code</Button>
      </Row>
      <div className="w-full h-[1px] min-h-[300px] border border-ring rounded-md place-items-center p-5">
        <div className={cn("hidden place-items-center h-full w-full", state == "preview" && "grid")}>
          {children}
        </div>
        <div className={cn("hidden place-items-center h-full w-full", state == "code" && "grid")}>
          {/* displayed code (will handle this later) */}
        </div>
      </div>
    </Column>
  );
};

export default PreviewBox;
