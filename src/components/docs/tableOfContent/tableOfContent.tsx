import Button from "@/components/ui/button";
import Typography from "@/components/ui/typography";

import { cn } from "@/lib/utils";

const TableOfContent = ({ tableOfContent }: { tableOfContent: any }) => {
  return (
    <nav className="sticky top-[84px] h-fit hidden lg:flex w-[15vw] max-w-[320px] flex-col items-start px-4">
      <div className="flex flex-col items-start w-fit">
        <Typography className="text-base mb-2.5" variant="h5">
          On This Page
        </Typography>
        {tableOfContent.map((content: any, i: string) => {
          return (
            <Button
              key={i}
              variant="link"
              href={content.href}
              className={cn(
                "py-2 justify-start text-left text-foreground-light/80 p-1 text-[15px]"
              )}>
              {content.title}
            </Button>
          );
        })}
      </div>
    </nav>
  );
};

export default TableOfContent;
