import LoadingSpinner from "@/components/ui/loading-spinner";
import React, { Suspense } from "react";
import { motion } from "framer-motion";

type ComponentPreviewProps = {
  component: string;
};

function ComponentPreview({ component }: ComponentPreviewProps) {
  const preview = React.useMemo(() => {
    if (!component) return;
    const componentName = component.split("-")[0];
    const componentType = component.split("-").slice(1).join("-");
    const Component = React.lazy(() => import(`@/components/preview/${componentName}/${componentType}.tsx`));

    const Fallback = () => {
      return (
        <div className="w-full h-full flex items-center justify-center font-bold text-2xl animate-pulse">
          <LoadingSpinner />
          Loading...
        </div>
      );
    };
    return (
      <>
        <Suspense fallback={<Fallback />}>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
            className="p-4 grid place-items-center h-full w-full">
            <Component />
          </motion.div>
        </Suspense>
      </>
    );
  }, [component]);

  return preview;
}

export default ComponentPreview;
