import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  state: "preview" | "code";
  children: React.ReactNode;
};

const PreviewCode = ({ state, children }: Props) => {
  return (
    <div className={cn("hidden place-items-center h-full w-full", state == "code" && "grid")}>{children}</div>
  );
};

export default PreviewCode;
