import LoadingSpinner from "@/components/ui/loading-spinner";
import React, { Suspense } from "react";

function useComponentPreview(component: string) {
  const preview = React.useMemo(() => {
    if (!component) return;
    const componentName = component.split("-")[0];
    const componentType = component.split("-").slice(1).join("-");
    const Component = React.lazy(() => import(`@/components/preview/${componentName}/${componentType}.tsx`));

    const Fallback = () => {
      return (
        <div className="w-full h-full flex items-center justify-center font-bold tracking-[0.3em] text-2xl animate-pulse">
          <LoadingSpinner />
          Loading...
        </div>
      );
    };
    return (
      <Suspense fallback={<Fallback />}>
        <div className="p-4 grid place-items-center h-full w-full">
          <Component />
        </div>
      </Suspense>
    );
  }, [component]);

  return { preview };
}

export default useComponentPreview;
