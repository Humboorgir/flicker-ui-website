// Served as the overview page for 'docs/components'

import DocsLayout from "@/layouts/docsLayout";
import Typography from "@/components/ui/typography";
import Row from "@/components/ui/row";

import Link from "next/link";

import { LuTextCursor as TypingCursor } from "react-icons/lu";
import { FcCursor as Cursor } from "react-icons/fc";

const Page = () => {
  const components = [
    {
      title: "Button",
      description: "Your average button component. has Material-Design's ripple effect implemented",
      shape: <div className="flex w-[120px] h-[40px] bg-white rounded-md shadow-md" />,
    },

    {
      title: "Input",
      description: "A part of ui where users can enter text. Animated",
      shape: (
        <div className="relative">
          <div
            className="top-0 left-0 translate-y-[-50%] translate-x-[-50%] text-lg text-black/30 shadow-md
              absolute bg-white rounded-lg border-2 border-black/30 py-2 px-5 whitespace-nowrap">
            User Input
          </div>
          <TypingCursor className="top-0 left-0 translate-x-[250%] translate-y-[-50%] absolute text-black/80" />
        </div>
      ),
    },
    {
      title: "Container",
      description: "Used to position common page elements properly and center them.",
      shape: <div className="flex w-[80px] h-[100px] bg-white rounded-md shadow-md" />,
    },
    {
      title: "Typography",
      description: "Includes a set of styled h1, h2, h3, ..., h5 and p tags made for reusability",
      shape: (
        <div
          className="relative flex items-center w-[170px] pl-2 h-[45px] bg-white
             shadow-md border border-neutral-300 rounded-md">
          <span className="text-gray-900 text-3xl font-black tracking-tigher">How to </span>
          <div
            className="absolute right-0 h-[38px] w-[56px] border-l-[1.5px]
               border-l-black"
          />
        </div>
      ),
    },
    {
      title: "Tabs",
      description: "A box with a bunch of buttons that change the displayed content when clicked.",
      shape: (
        <div className="relative flex flex-col">
          <div className="flex mb-2">
            <Cursor className="top-0 w-6 h-6 left-0 translate-x-[100%] translate-y-[100%] absolute text-black/80 z-10" />{" "}
            <div className="bg-white text-black translate-y-[-1px] grid place-items-center rounded-md shadow-md w-[55px] h-[45px] mr-1">
              Tab 1
            </div>
            <div className="bg-white text-black/60 grid place-items-center rounded-md shadow-md w-[55px] h-[45px]">
              Tab 2
            </div>
          </div>
          <div className="bg-white text-black p-[4px] overflow-hidden rounded-md shadow-md w-[114px] h-[60px] mr-1 text-xs flex flex-col justify-around">
            <div className="bg-gray-400/80 h-[8px] w-[60%] rounded-md" />
            <div className="bg-gray-400/80 h-[8px] w-full rounded-md" />
            <div className="bg-gray-400/80 h-[8px] w-full rounded-md" />
          </div>
        </div>
      ),
    },
    {
      title: "Row",
      description: "Flexbox container with flex-direction set to row. used for more improved readability",
      shape: (
        <div className="flex">
          <div className="bg-white rounded-md shadow-md flex w-[55px] h-[45px] mr-1" />
          <div className="bg-white rounded-md shadow-md flex w-[55px] h-[45px] mr-1" />
          <div className="bg-white rounded-md shadow-md flex w-[55px] h-[45px]" />
        </div>
      ),
    },
    {
      title: "Column",
      description: "Flexbox container with flex-direction set to column. used for more improved readability",
      shape: (
        <div className="flex flex-col">
          <div className="bg-white rounded-md shadow-md flex w-[60px] h-[30px] mb-1" />
          <div className="bg-white rounded-md shadow-md flex w-[60px] h-[30px] mb-1" />
          <div className="bg-white rounded-md shadow-md flex w-[60px] h-[30px]" />
        </div>
      ),
    },
  ];

  return (
    <Row className="flex-wrap">
      {/* TODO: make the cards adjust their width according to available space with CSS Grid.
        Once you're done with the code, turn it into a snippet. */}
      {components.map((component, i) => {
        return (
          <Link
            key={i}
            href={`/docs/components/${component.title.toLowerCase()}`}
            className="w-full relative group overflow-hidden flex flex-col mr-5 mb-4 rounded-md p-3 md:max-w-[280px] h-[260px]
            duration-[400ms] hover:-translate-y-2 transition-all ease-out cursor-pointer bg-gray-300/20 dark:bg-gray-400/10
            border border-neutral-300/80 dark:border-neutral-800">
            {/* shining effect (rotated white div that moves across the screen on hover) */}
            <div className="absolute z-10 -left-[160px] top-0 h-full w-[80px] rotate-[30deg] scale-y-150 bg-white/70 dark:bg-white/10 transition-all duration-[600ms] group-hover:left-[calc(100%+78px)]" />
            <div className="grid place-items-center bg-[#d1d1d3] dark:bg-opacity-80 mb-2 w-full h-[139px] rounded-md">
              {component.shape}
            </div>
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
    title: "Components",
    description:
      "Components that would generally make up a web application. More case-specific pieces of code can be found in snippets.",
  };
  return <DocsLayout meta={metadata}>{Page}</DocsLayout>;
};

export default Page;
