import Badge from "@/components/ui/badge";

const Preview = () => {
  return (
    <div className="flex items-center space-x-2">
      <Badge>Badge</Badge>
      <Badge variant="secondary">Badge</Badge>
      <Badge variant="success">Badge</Badge>
      <Badge variant="danger">Badge</Badge>
      <Badge variant="warning">Badge</Badge>
    </div>
  );
};

export default Preview;
