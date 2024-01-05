import Button from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import React from "react";

const Sidebar = () => {
  const links = [
    { title: "Getting started" },
    { title: "Installation", href: "/docs/installation" },
    { title: "Components" },
    { title: "Typography", href: "/docs/typography" },
    { title: "Container", href: "/docs/container" },
    { title: "Button", href: "/docs/button" },
    { title: "Row", href: "/docs/row" },
    { title: "Column", href: "/docs/column" },
    { title: "Input", href: "/docs/input" },
    { title: "Modal", href: "/docs/modal" },
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
              !link.href && "text-foreground font-bold mb-1"
            )}>
            {link.title}
          </Button>
        );
      })}
    </nav>
  );
};

export default Sidebar;
