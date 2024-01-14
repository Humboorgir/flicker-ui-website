import React from "react";

type Preview = {
  name: string;
  component: React.LazyExoticComponent<() => React.ReactElement>;
};

const previews: Preview[] = [
  {
    name: "button-default",
    component: React.lazy(() => import("@/components/preview/button-default")),
  },
  {
    name: "button-secondary",
    component: React.lazy(() => import("@/components/preview/button-secondary")),
  },
  {
    name: "button-outline",
    component: React.lazy(() => import("@/components/preview/button-outline")),
  },
  {
    name: "button-ghost",
    component: React.lazy(() => import("@/components/preview/button-ghost")),
  },
  {
    name: "button-link",
    component: React.lazy(() => import("@/components/preview/button-link")),
  },
];

export default previews;
