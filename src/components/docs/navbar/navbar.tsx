import Button from "@/components/ui/button";
import Row from "@/components/ui/row";
import { DrawerTrigger } from "@/components/ui/drawer";

import Theme from "./theme";
import MobileNav from "./mobile-nav";

import { FaGithub as GithubIcon } from "react-icons/fa";
import { FaBars as BarsIcon } from "react-icons/fa6";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((prev) => !prev);
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
      {/* The current logo looks bad, I'll un-comment this once I get my hands on a good looking logo */}
      {/* <Image width={20} height={32} src="/logo.svg" alt="logo" /> */}
      <span className="ml-2 font-bold tracking-wide text-foreground/90 mr-4 md:mr-10 text-[22px]">
        Flicker UI
      </span>

      {/* only visible on small screens  */}
      <DrawerTrigger toggleOpen={toggleOpen} className="md:hidden ml-auto !p-1" variant="ghost">
        <BarsIcon className="h-8 w-8" />
      </DrawerTrigger>

      <MobileNav links={links} isOpen={isOpen} toggleOpen={toggleOpen} />

      {links.map((link, i) => {
        return (
          <Button
            key={i}
            variant="link"
            href={link.href}
            className="hidden md:flex text-foreground-light text-[15px] decoration-foreground">
            {link.title}
          </Button>
        );
      })}
      <Theme className="md:flex items-center mr-2 ml-auto hidden" />
      <Button
        href="https://github.com/Humboorgir/flicker-ui"
        // @ts-ignore
        target="_blank"
        variant="ghost"
        className="md:flex items-center hidden">
        Github
        <GithubIcon className="text-xl ml-2" />
      </Button>
    </Row>
  );
};

export default Navbar;
