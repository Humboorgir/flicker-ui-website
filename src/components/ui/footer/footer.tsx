import Button from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { HtmlHTMLAttributes } from "react";

import {
  FaGithub as Github,
  FaDiscord as Discord,
  FaYoutube as Youtube,
  FaInstagram as Instagram,
} from "react-icons/fa";
import Typography from "../typography";

type Props = HtmlHTMLAttributes<HTMLDivElement>;

const Footer = ({ className, ...props }: Props) => {
  const links = [
    { title: "Dashboard", url: "/dashboard" },
    { title: "Commands", url: "/commands" },
    { title: "Invite", url: "/invite" },
    { title: "Terms of service", url: "/tos" },
    { title: "Privacy policy", url: "/privacypolicy" },
    { title: "About us", url: "/about" },
    { title: "Developers", url: "/developers" },
    { title: "Support server", url: "/supportserver" },
    { title: "Change log", url: "/changelog" },
  ];
  return (
    <footer className={cn(`border-t-2 border-ring py-4 px-8 flex items-center`, className)} {...props}>
      <Typography variant="p">Copyright &copy; FlickerUI 2024 - all rights reserved</Typography>
    </footer>
  );
};

export default Footer;
