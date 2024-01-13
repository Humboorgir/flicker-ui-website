import Column from "@/components/ui/column";
import Button from "@/components/ui/button";
import Row from "@/components/ui/row";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = React.HTMLProps<HTMLDivElement> & {
  component: any;
};

// NOTE: although the component looks nice and works properly, this is not
// an ideal way to implement such thing (the way code and component are provided is
// not straightforward and quite complicated) I'll rework this once I have more time tomorrow
const PreviewBox = ({ children, component, className, ...props }: Props) => {
  const [state, setState] = useState<"code" | "preview">("preview");

  function openPreview() {
    setState("preview");
  }

  function openCodeView() {
    setState("code");
  }

  return (
    // @ts-ignore
    <Column items="start" className={cn("flex flex-col max-w-[800px] w-[100%]", className)} {...props}>
      <Row className="w-fit relative">
        <span
          className={cn(
            `absolute bottom-0 left-0 bg-foreground rounded-md h-[2px] w-[50%] flex z-10
            transition-transform duration-200 delay-[50ms]`,
            state == "code" && "translate-x-[100%] "
          )}
        />
        <Button className="w-[80px]" onClick={openPreview} variant="ghost">
          Preview
        </Button>
        <Button className="w-[80px]" onClick={openCodeView} variant="ghost">
          Code
        </Button>
      </Row>
      <div className="pt-4 w-full h-[1px] min-h-[300px] place-items-center overflow-hidden">
        {state == "preview" && (
          <motion.div
            key="preview"
            initial={{ opacity: 0, x: "-20px" }}
            animate={{
              opacity: 1,
              x: "0",
            }}
            transition={{ duration: 0.15 }}
            className={cn("grid place-items-center h-full w-full border border-ring rounded-md")}>
            {component}
          </motion.div>
        )}

        {state == "code" && (
          <motion.div
            key="code"
            initial={{ opacity: 0, x: "20px" }}
            animate={{
              opacity: 1,
              x: "0",
            }}
            transition={{ duration: 0.15 }}
            className={cn(
              `grid place-items-center w-full [&_pre]:overflow-auto
            [&_pre]:w-full [&_figure]:w-full`
            )}>
            {children}
          </motion.div>
        )}
      </div>
    </Column>
  );
};

export default PreviewBox;
