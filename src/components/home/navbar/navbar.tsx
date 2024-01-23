import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Row from "@/components/ui/row";
import { cn } from "@/lib/utils";

import { useState } from "react";
import { HiOutlineBars3BottomLeft as Bars } from "react-icons/hi2";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen((prev) => !prev);
  }

  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Discord",
      href: "/",
    },
    {
      title: "Components",
      href: "/components",
    },
    {
      title: "Docs",
      href: "/docs/installation",
    },
  ];

  return (
    // TODO: add fluid prop to Container
    <Container className="w-full">
      <Row items="center" justify="start" className="py-2 sm:justify-center">
        {/* mobile navbar */}
        <div className="relative w-fit h-fit">
          <Button
            onClick={toggleOpen}
            className={cn("sm:hidden text-foreground text-5xl", open && "bg-accent")}
            size="sm"
            variant="ghost">
            <Bars />
          </Button>
          <div
            className={cn(
              `absolute left-0 top-full flex invisible flex-col items-center justify-center
              duration-[130ms] ease-out opacity-0 origin-top scale-[0.85] delay-150`,
              open && "visible opacity-100 scale-100"
            )}>
            {links.map((link, i) => {
              return (
                <Button
                  onClick={toggleOpen}
                  href={link.href}
                  className="w-[120px] rounded-none text-[15px]"
                  variant="outline"
                  key={i}>
                  {link.title}
                </Button>
              );
            })}
          </div>
        </div>

        {/* desktop navbar items */}
        <div className="hidden sm:flex">
          {links.map((link, i) => {
            return (
              <Button
                key={i}
                variant="link"
                size="lg"
                href={link.href}
                className="text-lg text-foreground decoration-foreground">
                {link.title}
              </Button>
            );
          })}
        </div>
      </Row>
    </Container>
  );
};

export default Navbar;
