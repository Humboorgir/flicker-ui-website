import Skeleton from "@/components/ui/skeleton";
import React, { Suspense } from "react";

function useComponentPreview(component: string) {
  const preview = React.useMemo(() => {
    if (!component) return;
    const componentName = component.split("-")[0];
    const componentType = component.split("-").slice(1).join("-");
    const Component = React.lazy(() => import(`@/components/preview/${componentName}/${componentType}.tsx`));

    return (
      <Suspense fallback={<Skeleton className="w-full h-full" />}>
        <div className="p-4 grid place-items-center h-full w-full">
          <Component />
        </div>
      </Suspense>
    );
  }, [component]);

  return { preview };
}

export default useComponentPreview;
