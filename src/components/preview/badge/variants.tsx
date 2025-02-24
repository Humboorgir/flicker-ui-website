import Badge from "@/components/ui/badge";

const Preview = () => {
  return (
    <div className="flex flex-wrap items-center justify-center [&>div]:mr-2 last:mr-0 [&>div]:mt-2 last:mt-0">
      <Badge>Badge</Badge>
      <Badge variant="secondary">Badge</Badge>
      <Badge variant="success">Badge</Badge>
      <Badge variant="danger">Badge</Badge>
      <Badge variant="warning">Badge</Badge>
    </div>
  );
};

export default Preview;
