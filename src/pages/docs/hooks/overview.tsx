// Served as the overview page for 'docs/hooks'

import DocsLayout from "@/layouts/docsLayout";
import Typography from "@/components/ui/typography";
import Row from "@/components/ui/row";

import Link from "next/link";
const Page = () => {
  const hooks = [
    { title: "usePrevious", description: "Tracks the previous value of a React state." },
    {
      title: "useClickOutside",
      description: "Executes a function once the user clicks outside of the given element.",
    },
  ];

  return (
    <Row className="flex-wrap">
      {hooks.map((component, i) => {
        return (
          <Link
            key={i}
            href={`/docs/hooks/${component.title.toLowerCase()}`}
            className="w-full relative group overflow-hidden flex flex-col mr-5 mb-4 rounded-md p-3 md:max-w-[280px]
            duration-[400ms] hover:-translate-y-2 transition-all ease-out cursor-pointer bg-gray-300/20 dark:bg-gray-400/10
            border border-neutral-300/80 dark:border-neutral-800">
            {/* shining effect (rotated white div that moves across the screen on hover) */}
            <div className="absolute z-10 -left-[160px] top-0 h-full w-[80px] rotate-[30deg] scale-y-150 bg-white/70 dark:bg-white/10 transition-all duration-[600ms] group-hover:left-[calc(100%+78px)]" />
            <Typography variant="h4" className="mb-0.5 px-1">
              {component.title}
            </Typography>
            <Typography variant="lead" className="text-sm px-1">
              {component.description}
            </Typography>
          </Link>
        );
      })}
    </Row>
  );
};

Page.getLayout = function Layout(Page: React.ReactElement) {
  const metadata = {
    title: "Hooks",
    description:
      "Custom hooks that are widely used in web applications. A custom React hook is like a utility function that uses React hooks.",
  };
  return <DocsLayout meta={metadata}>{Page}</DocsLayout>;
};

export default Page;
