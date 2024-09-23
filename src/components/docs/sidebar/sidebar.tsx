import Button from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { docsPages } from "@/config/docs";

import { cn } from "@/lib/utils";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  return (
    // TODO: use replace divs with semantic html (aside, ul and li)
    <nav className="hidden md:flex w-[20vw] min-w-[180px] max-w-[240px] flex-col pl-[50px] py-8">
      {docsPages.map((category, i) => {
        return (
          <div key={i} className="pb-4">
            <Typography
              className="text-sm font-bold tracking-wide px-3"
              variant="h4">
              {category.label}
            </Typography>
            {category.items &&
              category.items.map((item, i) => {
                const isCurrentPage = router.pathname == item.href;

                return (
                  <Button
                    key={i}
                    variant="link"
                    href={item.href}
                    className={cn(
                      "text-sm py-1.5 justify-start text-left text-foreground-light/80 px-3.5 w-full",
                      isCurrentPage && "bg-foreground-light/10 text-foreground"
                    )}>
                    {item.label}
                  </Button>
                );
              })}
          </div>
        );
      })}
    </nav>
  );
};

export default Sidebar;
