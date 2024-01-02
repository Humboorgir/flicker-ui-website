import Theme from "./theme";
import Button from "@/components/ui/button";
import Row from "@/components/ui/row";

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
      className="py-2 px-4 md:px-12 fixed bg-background/60 w-full z-20 border-b border-b-ring backdrop-blur">
      <span
        className="font-bold mr-4 md:mr-10 text-xl bg-gradient-to-br from-primary 
         to-foreground/50 text-transparent bg-clip-text">
        Flicker UI
      </span>
      {links.map((link) => {
        return (
          <Button variant="link" href={link.href} className="text-foreground decoration-foreground">
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
