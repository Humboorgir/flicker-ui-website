import Badge from "@/components/ui/badge";

const Preview = () => {
  return (
    <div className="flex flex-wrap items-center justify-center [&>div]:mr-2 last:mr-0 [&>div]:mt-2 last:mt-0">
      <Badge size="xl">Badge</Badge>
      <Badge size="lg">Badge</Badge>
      <Badge size="md">Badge</Badge>
      <Badge size="sm">Badge</Badge>
    </div>
  );
};

export default Preview;
