import type { MDXComponents } from "mdx/types";

import Typography from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <Typography variant="h1" {...(props as any)}>
        {children}
      </Typography>
    ),
    h2: ({ children, className, ...props }) => (
      <Typography variant="h2" className="my-3.5 text-2xl sm:text-3xl" {...(props as any)}>
        {children}
      </Typography>
    ),
    h3: ({ children, ...props }) => (
      <Typography variant="h3" {...(props as any)}>
        {children}
      </Typography>
    ),
    h4: ({ children, ...props }) => (
      <Typography variant="h4" {...(props as any)}>
        {children}
      </Typography>
    ),
    h5: ({ children, ...props }) => (
      <Typography variant="h5" {...(props as any)}>
        {children}
      </Typography>
    ),
    p: ({ children, className, ...props }) => (
      <Typography variant="p" className={cn("my-2.5", className)} {...(props as any)}>
        {children}
      </Typography>
    ),
    figure: ({ children, ...props }) => (
      <figure className="w-[1px] min-w-full" {...(props as any)}>
        {children}
      </figure>
    ),
    // styles for pre and figure are put in globalThis.css because the component's used outside of markdown too
    ul: ({ children, ...props }) => (
      <ul className="pl-5 text-foreground-light" {...(props as any)}>
        {children}
      </ul>
    ),
    li: ({ children, ...props }) => (
      <li className="list-disc" {...(props as any)}>
        {children}
      </li>
    ),

    ...components,
  };
}
