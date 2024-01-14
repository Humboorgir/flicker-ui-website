import Column from "@/components/ui/column";
import Button from "@/components/ui/button";
import Row from "@/components/ui/row";
// This thing is killing the performance of the app
// but I kinda need it
// I have two work arounds for this:
// 1- use App router (I hate it)
// 2- use prismjs
// switching everything to prism might take some time
// but thats probably what im gonna be going for
import { highlightCode } from "@/components/docs/code";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import React from "react";
import previews from "@/registry/previews";

type Props = React.HTMLProps<HTMLDivElement> & {
  component: string;
};

const PreviewBox = ({ children, component, className, ...props }: Props) => {
  const [state, setState] = useState<"code" | "preview">("preview");
  const [code, setCode] = useState<any>();

  const preview = React.useMemo(() => {
    const registry = previews.find((x) => x.name == component);
    if (!registry) return null;

    const Component = registry.component;

    return <Component />;
  }, [component]);

  useEffect(() => {
    import(`../../preview/${component}.string`)
      .then((data) => data.default)
      .then((code) =>
        highlightCode(
          `\`\`\`tsx
${code}`
        )
      )
      .then((code) => setCode(code));
  }, []);

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
            key="previewComp"
            initial={{ opacity: 0, x: "-20px" }}
            animate={{
              opacity: 1,
              x: "0",
            }}
            transition={{ duration: 0.15 }}
            className={cn("grid place-items-center h-full w-full border border-ring rounded-md")}>
            {preview}
          </motion.div>
        )}

        {state == "code" && (
          <motion.div
            key="code"
            dangerouslySetInnerHTML={{ __html: code }}
            initial={{ opacity: 0, x: "20px" }}
            animate={{
              opacity: 1,
              x: "0",
            }}
            transition={{ duration: 0.15 }}
            className={cn(
              `grid place-items-center w-full [&_pre]:overflow-auto
            [&_pre]:w-full [&_figure]:w-full [&_pre]:p-3 [&_pre]:rounded-md`
            )}
          />
        )}
      </div>
    </Column>
  );
};

export default PreviewBox;
