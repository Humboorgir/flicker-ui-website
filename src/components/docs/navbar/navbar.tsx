import Theme from "./theme";
import Button from "@/components/ui/button";
import Row from "@/components/ui/row";

import Image from "next/image";

import { FaGithub as Github } from "react-icons/fa";

const Navbar = () => {
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
      href: "/",
    },
    {
      title: "Docs",
      href: "/",
    },
  ];
  return (
    <Row
      items="center"
      className="py-2 px-4 md:px-12 sticky top-0 bg-background/60 w-full z-20 border-b border-b-ring backdrop-blur">
      <Image width={20} height={32} src="/logo.svg" alt="logo" />
      <span className="ml-2 font-bold tracking-wide text-foreground/90 mr-4 md:mr-10 text-[22px]">
        Flicker UI
      </span>
      {links.map((link, i) => {
        return (
          <Button
            key={i}
            variant="link"
            href={link.href}
            className="hidden md:flex text-foreground decoration-foreground">
            {link.title}
          </Button>
        );
      })}
      <Theme />
      <Button
        href="https://github.com/Humboorgir/flicker-ui"
        // @ts-ignore
        target="_blank"
        variant="ghost"
        className="flex items-center">
        Github
        <Github className="text-xl ml-2" />
      </Button>
    </Row>
  );
};

export default Navbar;
