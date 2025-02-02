import { readFileSync } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

// Required for the code to work in serverless environments
// Why? https://github.com/vercel/next.js/discussions/32236#discussioncomment-5427295
const PREVIEW_COMPONENTS_PATH = path.resolve("./src/components/preview");
const UI_COMPONENTS_PATH = path.resolve("./src/components/ui");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { component, previewComponentOrUI } = req.query;

  if (!component || typeof component != "string") return res.status(400).send({ error: "Bad request" });

  if (previewComponentOrUI == "preview") {
    const componentName = component.split("-")[0];
    const componentType = component.split("-").slice(1).join("-");

    const componentCode = readFileSync(`${PREVIEW_COMPONENTS_PATH}/${componentName}/${componentType}.tsx`, {
      encoding: "utf-8",
    });
    res.status(200).send({ componentCode });
  } else if (previewComponentOrUI == "ui") {
    const componentName = component;

    const componentCode = readFileSync(`${UI_COMPONENTS_PATH}/${componentName}/${componentName}.tsx`, {
      encoding: "utf-8",
    });
    res.status(200).send({ componentCode });
  }
}
