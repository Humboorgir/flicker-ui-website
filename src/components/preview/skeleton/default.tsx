import Skeleton from "@/components/ui/skeleton";

const Preview = () => {
  return (
    <div className="w-[min(480px,60%)]">
      <h2 className="text-5xl font-bold">
        {/* Automatically adapts to the h2 element's size  */}
        <Skeleton />
      </h2>
      <p className="text-lg">
        <Skeleton />
      </p>
      <p className="text-lg">
        <Skeleton />
      </p>

      {/* You can also specify widths and heights manually  */}
      <Skeleton className="h-4 w-20" />
    </div>
  );
};

export default Preview;
