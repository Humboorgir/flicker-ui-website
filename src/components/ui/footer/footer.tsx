import { cn } from "@/lib/utils";
import { HtmlHTMLAttributes } from "react";

import Typography from "../typography";

type Props = HtmlHTMLAttributes<HTMLDivElement>;

const Footer = ({ className, ...props }: Props) => {
  return (
    <footer
      className={cn(
        `border-t border-ring mt-28 py-5 px-8 flex items-center`,
        className
      )}
      {...props}>
      <Typography variant="p">
        Copyright &copy; FlickerUI 2024 - all rights reserved
      </Typography>
    </footer>
  );
};

export default Footer;
