import Button from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { docsPages } from "@/config/docs";

import { cn } from "@/lib/utils";
import { useRouter } from "next/router";

import { IoIosArrowDown as ArrowDown } from "react-icons/io";

const Sidebar = () => {
  const router = useRouter();

  return (
    // TODO: replace divs with semantic html (aside, ul and li)
    <nav className="sticky top-[84px] h-fit hidden md:flex w-[16rem]  flex-col px-4">
      {docsPages.map((category, i) => {
        return (
          <div key={i} className="relative mb-4">
            <Typography
              className="text-[15px] flex items-center tracking-wide pl-6 pr-3 mb-2"
              variant="h4">
              {category.label}

              <ArrowDown className="absolute top-2 left-0 h-4 w-4 ml-auto" />
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
                      "text-sm py-2 justify-start text-left text-foreground-light/80 pl-6 pr-3.5 w-full",
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
