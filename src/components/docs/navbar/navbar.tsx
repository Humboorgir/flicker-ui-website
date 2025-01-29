import Dropdown from "@/components/ui/dropdown";
import Theme from "./theme";
import Button from "@/components/ui/button";
import Row from "@/components/ui/row";

import { FaGithub as GithubIcon } from "react-icons/fa";
import { FaBars as BarsIcon } from "react-icons/fa6";

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
      {/* The current logo looks bad, I'll un-comment this once I get my hands on a good looking logo */}
      {/* <Image width={20} height={32} src="/logo.svg" alt="logo" /> */}
      <span className="ml-2 font-bold tracking-wide text-foreground/90 mr-4 md:mr-10 text-[22px]">
        Flicker UI
      </span>

      <Dropdown
        className="ml-auto"
        triggerClassName="!p-1"
        triggerVariant="ghost"
        items={links.map((item) => ({ name: item.title, value: item.href }))}>
        <BarsIcon className="h-8 w-8" />
      </Dropdown>
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
      <Theme />
      <Button
        href="https://github.com/Humboorgir/flicker-ui"
        // @ts-ignore
        target="_blank"
        variant="ghost"
        className="sm:flex items-center hidden">
        Github
        <GithubIcon className="text-xl ml-2" />
      </Button>
    </Row>
  );
};

export default Navbar;
