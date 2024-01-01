import { cn } from "@/lib/utils";

type Props = React.HTMLProps<HTMLDivElement>;

const Code = ({ children, className, lang }: Props) => {
  return (
    <code
      className={cn("inline-block bg-neutral-900 text-neutral-100 p-4 rounded-md w-full text-sm", className)}>
      {children}
    </code>
  );
};

export default Code;
