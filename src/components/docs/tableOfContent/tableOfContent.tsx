import Button from "@/components/ui/button";
import Typography from "@/components/ui/typography";

import { cn } from "@/lib/utils";

const TableOfContent = ({ tableOfContent }: { tableOfContent: any }) => {
  return (
    <nav className="w-[280px] flex flex-col items-start pl-[50px] py-8">
      <Typography variant="h5">On this page</Typography>
      {tableOfContent.map((content: any, i: string) => {
        return (
          <Button
            key={i}
            variant="link"
            href={content.href}
            className={cn("py-2 justify-start text-left text-foreground-light/80 p-1 text-[15px]")}>
            {content.title}
          </Button>
        );
      })}
    </nav>
  );
};

export default TableOfContent;
