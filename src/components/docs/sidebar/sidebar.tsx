import Button from "@/components/ui/button";

import { cn } from "@/lib/utils";

const Sidebar = () => {
  const links = [
    { title: "Getting started" },
    { title: "Installation", href: "/docs/installation" },
    { title: "Components" },
    { title: "Typography", href: "/docs/components/typography" },
    { title: "Container", href: "/docs/components/container" },
    { title: "Button", href: "/docs/components/button" },
    { title: "Row", href: "/docs/components/row" },
    { title: "Column", href: "/docs/components/column" },
    { title: "Input", href: "/docs/components/input" },
    { title: "Modal", href: "/docs/components/modal" },
  ];
  return (
    <nav className="hidden md:flex w-[20vw] min-w-[180px] max-w-[240px] flex-col items-center pl-[50px] py-8">
      {links.map((link, i) => {
        return (
          <Button
            key={i}
            variant="link"
            href={link.href}
            className={cn(
              "py-2 justify-start text-left text-foreground-light/80 p-1 w-full",
              !link.href &&
                "text-foreground font-bold mb-1 hover:no-underline hover:cursor-default"
            )}>
            {link.title}
          </Button>
        );
      })}
    </nav>
  );
};

export default Sidebar;
