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
  {
    name: "container-default",
    component: React.lazy(() => import("@/components/preview/container-default")),
  },
  { name: "input-default", component: React.lazy(() => import("@/components/preview/input-default")) },
];

export default previews;
