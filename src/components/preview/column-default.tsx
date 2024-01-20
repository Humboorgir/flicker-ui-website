import Column from "@/components/ui/column";

const Preview = () => {
  return (
    <Column className="w-full h-full" items="center" justify="center">
      <div className="bg-red-500 h-16 w-16 rounded mb-3"></div>
      <div className="bg-red-500 h-16 w-16 rounded mb-3"></div>
      <div className="bg-red-500 h-16 w-16 rounded"></div>
    </Column>
  );
};

export default Preview;
