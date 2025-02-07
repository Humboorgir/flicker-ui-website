import Accordion from "@/components/ui/accordion";

const Preview = () => {
  const accordionItems = [
    {
      trigger: "Accordion tab 1",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto optio in quis adipisci delectus.",
    },
    {
      trigger: "Accordion tab 2",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto optio in quis adipisci delectus.",
    },
    {
      trigger: "Accordion tab 3",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto optio in quis adipisci delectus.",
    },
    {
      trigger: "Accordion tab 4",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto optio in quis adipisci delectus.",
    },
  ];

  return <Accordion className="max-w-[600px]" items={accordionItems} />;
};

export default Preview;
