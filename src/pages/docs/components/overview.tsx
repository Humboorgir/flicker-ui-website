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
    {
      title: "Modal",
      description: "A window that pops when triggered and attempts to draw the user's attention",
      shape: (
        <div className="grid place-items-center">
          <div className="flex flex-col p-5 pb-4 bg-white rounded-md shadow-md w-[180px] h-[100px]">
            <div className="bg-gray-400/50 h-[8px] mb-1.5 shrink-0 w-[60%] rounded-md" />
            <div className="bg-gray-400/50 h-[8px] mb-1.5 shrink-0 w-full rounded-md" />
            <div className="bg-gray-400/50 h-[8px] mb-1.5 shrink-0 w-[80%] rounded-md" />
            <div className="mt-auto flex self-end items-center">
              <div className="bg-gray-400/50 h-[12px] w-[40px] rounded-sm mr-2" />
              <div className="bg-gray-400/50 h-[12px] w-[40px] rounded-sm" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Dropdown",
      description: "Displays a list of links on a temporary surface that can be opened / closed",
      shape: (
        <div className="relative flex flex-col items-center justify-center h-full w-full">
          <Cursor className="top-[80px] w-6 h-6 left-[84px] absolute text-black/80 z-10" />
          <div className="w-[74px] h-[26px] bg-white rounded-md shadow-md mb-2" />
          <div className="flex flex-col w-[100px] h-[74px] bg-white shadow-md translate-x-[-14px] rounded-md">
            <div className=" shrink-0 w-full h-1/3 rounded-tl-md rounded-tr-md" />
            <div className="bg-black/20 shrink-0 w-full h-1/3" />
            <div className=" shrink-0 w-full h-1/3 " />
          </div>
        </div>
      ),
    },
    {
      title: "Select",
      description: "Displays a list of choices that can be selected on a temporary surface",
      shape: (
        <div className="relative flex flex-col items-center justify-center h-full w-full">
          <Cursor className="top-[80px] w-6 h-6 left-[84px] absolute text-black/80 z-10" />
          <div className="w-[74px] h-[26px] bg-white rounded-md shadow-md mb-2" />
          <div className="flex flex-col w-[100px] h-[74px] bg-white shadow-md translate-x-[-14px] rounded-md">
            <div className=" shrink-0 w-full h-1/3 rounded-tl-md rounded-tr-md" />
            <div className="bg-black/20 shrink-0 w-full h-1/3" />
            <div className=" shrink-0 w-full h-1/3 " />
          </div>
        </div>
      ),
    },
    {
      title: "Drawer",
      description: "Similar to modals with the exception that they open from sides",
      shape: (
        <div className="relative grid place-items-center h-full w-full">
          <Cursor className="top-[111px] w-6 h-6 left-[54px] absolute text-black/80 z-20" />
          <div
            className="absolute left-0 top-0 bottom-0 w-[94px] border-r border-black/40 bg-white z-10
          flex flex-col items-end pt-2 pb-3.5 px-3">
            <div className="bg-gray-400/50 h-[8px] mb-1.5 shrink-0 w-[60%] rounded-md" />
            <div className="bg-gray-400/50 h-[8px] mb-1.5 shrink-0 w-full rounded-md" />
            <div className="bg-gray-400/50 h-[8px] mb-1.5 shrink-0 w-[80%] rounded-md" />
            <div className="bg-gray-400/50 h-[8px] mb-1.5 shrink-0 w-full rounded-md" />
            <div className="bg-gray-400/50 h-[8px] mb-1.5 shrink-0 w-full rounded-md" />
            <div className="bg-gray-400/50 h-[8px] mb-1.5 shrink-0 w-[80%] rounded-md" />

            <div className="mt-auto flex self-end items-center">
              <div className="bg-gray-400/50 h-[12px] w-[30px] rounded-sm mr-2" />
              <div className="bg-gray-500 h-[12px] w-[30px] rounded-sm translate-y-[-2px]" />
            </div>
          </div>
          <div className="absolute left-0 top-0 bottom-0 right-0 bg-black/20" />
          <div className="flex w-[90px] h-[30px] bg-white rounded-md shadow-md" />
        </div>
      ),
    },
    {
      title: "Badge",
      description: "Displays something that sort of looks like a badge",
      shape: (
        <div className="relative h-full w-full">
          <div className="absolute left-[50%] -translate-x-1/2 top-[60%] -translate-y-1/2 h-[80px] w-[100px] blur-md bg-white/60" />
          <div
            className="absolute left-[50%] -translate-x-1/2 top-[50%] -translate-y-1/2
           rounded-full px-7 shadow-lg py-1.5 text-lg font-bold bg-white text-black/60 z-10">
            Badge
          </div>
        </div>
      ),
    },
    {
      title: "Tooltip",
      description: "A popup that displays information related to an element",
      shape: (
        <div className="relative h-full w-full grid place-items-center">
          <Cursor className="top-[86px] w-6 h-6 left-[140px] absolute text-black/80 z-20" />
          <div className="relative text-black/60 font-bold translate-y-[12px] text-center px-2 py-1 bg-white rounded-md shadow-md">
            Hover
            <div className="bg-white z-10 absolute bottom-full w-full p-2 mb-3 right-0 rounded-md">
              <div
                className="top-full left-1/2 -translate-x-1/2 border-[6px] absolute"
                style={{ borderColor: "white transparent transparent transparent" }}></div>
              <div className="bg-gray-400/40 h-[6px] mb-1.5 shrink-0 w-full rounded-md" />
              <div className="bg-gray-400/40 h-[6px] shrink-0 w-[80%] rounded-md" />
            </div>
          </div>
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
