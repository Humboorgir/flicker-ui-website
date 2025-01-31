import { docsPages } from "@/config/docs";

import Typography from "@/components/ui/typography";
import Category from "@/components/docs/sidebar/category";
import Button from "@/components/ui/button";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";

import Theme from "./theme";

import { LuX as XIcon } from "react-icons/lu";
import { FaGithub as GithubIcon } from "react-icons/fa";

type MobileNavProps = {
  toggleOpen: React.MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
  links: { title: string; href: string }[];
};

const MobileNav = ({ toggleOpen, isOpen, links }: MobileNavProps) => {
  return (
    <Drawer direction="right" className="left-10" isOpen={isOpen} scrollable>
      <DrawerTrigger toggleOpen={toggleOpen} className="ml-auto !p-1 shrink-0" variant="ghost">
        <XIcon className="h-8 w-8" />
      </DrawerTrigger>

      <Button
        href="https://github.com/Humboorgir/flicker-ui"
        // @ts-ignore
        target="_blank"
        variant="ghost"
        className="w-fit shrink-0">
        Github
        <GithubIcon className="text-xl ml-2" />
      </Button>
      <Theme className="shrink-0 mb-4" />

      <div className="h-[1px] w-full shrink-0 bg-ring mb-4"></div>

      {links.map((link, i) => {
        return (
          <Button
            className="shrink-0 w-fit text-foreground-light decoration-foreground"
            key={i}
            variant="link"
            href={link.href}>
            {link.title}
          </Button>
        );
      })}

      <Typography className="mt-6 mb-4" variant="lead">
        DOCUMENTATION
      </Typography>
      {docsPages.map((category, i) => {
        return <Category key={i} category={category} />;
      })}
    </Drawer>
  );
};

export default MobileNav;
