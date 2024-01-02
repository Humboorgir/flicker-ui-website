import type { MDXComponents } from "mdx/types";

import Typography from "@/components/ui/typography";
type TTypography = Extract<keyof JSX.IntrinsicElements, "p" | "h1" | "h2" | "h3" | "h4" | "h5">;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <Typography variant="h1" {...(props as any)}>
        {children}
      </Typography>
    ),
    h2: ({ children, ...props }) => (
      <Typography variant="h2" {...(props as any)}>
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
    p: ({ children, ...props }) => (
      <Typography variant="p" {...(props as any)}>
        {children}
      </Typography>
    ),
    pre: ({ children, ...props }) => (
      <pre className="p-3 rounded-md" {...(props as any)}>
        {children}
      </pre>
    ),
    ...components,
  };
}
