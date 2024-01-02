import ComponentsLayout from "@/layouts/componentLayout";
import Container from "@/components/ui/container";
import Typography from "@/components/ui/typography";
import Column from "@/components/ui/column";
import Row from "@/components/ui/row";

import Link from "next/link";

const Components = () => {
  const components = [
    {
      title: "Button",
      description: "Your average button component. has Material-Design's ripple effect implemented",
    },
    {
      title: "Container",
      description: "Used to position common page elements properly and center them.",
    },
    {
      title: "Row",
      description: "Flexbox container with flex-direction set to row. used for more improved readability",
    },
    {
      title: "Column",
      description: "Flexbox container with flex-direction set to column. used for more improved readability",
    },
    {
      title: "Typography",
      description: "Includes a set of styled h1, h2, h3, ..., h5 and p tags made for reusability",
    },
  ];
  return (
    <Container className="pt-28">
      <Column>
        {/* I'll clean up the code here later  */}
        <h2 className="text-3xl md:text-5xl font-bold text-foreground/80 mb-5">Most recent components</h2>
        <Row justify="center" className="flex-wrap">
          {components.map((component, i) => {
            return (
              <Link
                key={i}
                href={`/docs/${component.title.toLowerCase()}`}
                className="flex flex-col mr-5 mb-4 border border-ring hover:bg-secondary rounded-md p-3 w-[280px] h-[260px]
                duration-300 hover:-translate-y-1.5 transition-all cursor-pointer">
                <div className="grid place-items-center bg-foreground/10 mb-2 w-[240px] h-[139px] rounded-md">
                  <div className="flex w-[120px] h-[40px] bg-white rounded-md shadow-md" />
                </div>
                <Typography variant="h4" className="mb-0.5 px-2">
                  {component.title}
                </Typography>
                <Typography variant="p" className="text-sm px-2">
                  {component.description}
                </Typography>
              </Link>
            );
          })}
          {[0, 0, 0].map((x) => (
            <div className="mr-5 mb-4 w-[280px] h-[260px] hidden sm:block" />
          ))}
        </Row>
      </Column>
    </Container>
  );
};

Components.getLayout = function getLayout(page: React.ReactElement) {
  return <ComponentsLayout>{page}</ComponentsLayout>;
};
export default Components;
