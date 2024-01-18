import Column from "@/components/ui/column";
import Button from "@/components/ui/button";
import Row from "@/components/ui/row";

import { highlightCode } from "@/components/docs/code";
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
      <div className="relative pt-4 w-full min-w-[1] h-[1px] min-h-[340px] place-items-center">
        <div
          className={cn(
            `absolute grid place-items-center h-full w-full border border-ring rounded-md p-3
             opacity-0 -left-[20px] invisible transition-none`,
            state == "preview" && "opacity-100 left-0 transition-all visible duration-[180ms]"
          )}>
          {preview}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: code }}
          className={cn(
            `absolute flex justify-center w-full h-full overflow-auto
            [&_pre]:w-full [&_figure]:w-full [&_pre]:p-3 [&_pre]:rounded-md
            [&_pre]:text-base left-[20px] opacity-0 invisible transition-none`,
            state == "code" && "opacity-100 left-0 duration-[180ms] visible transition-all"
          )}
        />
      </div>
    </Column>
  );
};

export default PreviewBox;
