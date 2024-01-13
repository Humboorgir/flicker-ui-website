import { cn } from "@/lib/utils";

type Props = {
  state: "preview" | "code";
  children: React.ReactNode;
};

const PreviewComponent = ({ state, children }: Props) => {
  return (
    <div className={cn("hidden place-items-center h-full w-full", state == "preview" && "grid")}>
      {children}
    </div>
  );
};

export default PreviewComponent;
