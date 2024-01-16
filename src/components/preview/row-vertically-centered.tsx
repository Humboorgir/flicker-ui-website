import Row from "@/components/ui/row";

const Preview = () => {
  return (
    <Row className="w-full h-full" items="center" justify="start">
      <div className="bg-red-500 h-16 w-16 rounded mr-3"></div>
      <div className="bg-red-500 h-16 w-16 rounded mr-3"></div>
      <div className="bg-red-500 h-16 w-16 rounded"></div>
    </Row>
  );
};

export default Preview;
