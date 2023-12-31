import ComponentsLayout from "@/layouts/componentLayout";
import Column from "@/components/ui/column";
import Container from "@/components/ui/container";
import Row from "@/components/ui/row";

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
  ];
  return (
    <Container className="pt-12">
      <Column>
        {/* I'll clean up the code here later  */}
        <h2 className="text-3xl md:text-5xl font-bold text-foreground/40 mb-5">Most recent components</h2>
        <Row justify="center" className="flex-wrap">
          {components.map((component, i) => {
            return (
              <Column
                key={i}
                items="start"
                justify="start"
                className="mr-5 mb-4 border border-ring hover:bg-secondary rounded-md p-3 w-[280px] h-[260px]
                duration-300 hover:-translate-y-1.5 transition-all cursor-pointer">
                <div className="grid place-items-center bg-black/10 mb-2 w-[240px] h-[139px] rounded-md">
                  <div className="flex w-[120px] h-[40px] bg-white rounded-md shadow-md" />
                </div>
                <h4 className="text-xl mb-0.5 px-2">{component.title}</h4>
                <p className="text-sm text-foreground/60 px-2">{component.description}</p>
              </Column>
            );
          })}
        </Row>
      </Column>
    </Container>
  );
};

Components.getLayout = function getLayout(page: React.ReactElement) {
  return <ComponentsLayout>{page}</ComponentsLayout>;
};
export default Components;
