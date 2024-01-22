import Column from "@/components/ui/column";
import Button from "@/components/ui/button";
import Row from "@/components/ui/row";

import { highlightCode } from "@/components/docs/code";
import { Suspense, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import React from "react";
import Typography from "@/components/ui/typography";

type Props = React.HTMLProps<HTMLDivElement> & {
  component: string;
  textSmall?: boolean;
};

const PreviewBox = ({ children, component, textSmall = false, className, ...props }: Props) => {
  const [state, setState] = useState<"code" | "preview">("preview");
  const [code, setCode] = useState<any>();

  const preview = React.useMemo(() => {
    if (!component) return;
    const componentName = component.split("-")[0];
    const componentType = component.split("-").slice(1).join("-");
    const Component = React.lazy(
      () => import(`@/components/preview/${componentName}/${componentType}.tsx`)
    );

    return (
      // TODO: implement a good looking loading state for this (like a loading skeleton)
      // I'll probably add a Skeleton component to the project
      // because I use it in a lot of projects and its generally useful
      <Suspense
        fallback={
          <Typography className="animate-pulse" variant="h3">
            Loading...
          </Typography>
        }>
        <Component />
      </Suspense>
    );
  }, [component]);

  useEffect(() => {
    if (!component) return;
    const componentName = component.split("-")[0];
    const componentType = component.split("-").slice(1).join("-");
    import(`@/components/preview/${componentName}/${componentType}.string.tsx`)
      .then((data) => data.default)
      .then((code) =>
        highlightCode(`\`\`\`tsx
${code}
\`\`\``)
      )
      .then((code) => setCode(code));
  }, [component]);

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
            `absolute flex w-full h-full overflow-auto
            [&_pre]:w-full [&_figure]:grow [&_pre]:p-3 [&_pre]:rounded-md
            [&_pre]:text-base left-[20px] opacity-0 invisible transition-none`,
            state == "code" && "opacity-100 left-0 duration-[180ms] visible transition-all",
            textSmall && "[&_pre]:text-[15px]"
          )}
        />
      </div>
    </Column>
  );
};

export default PreviewBox;
