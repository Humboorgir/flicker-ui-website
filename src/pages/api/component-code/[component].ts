import { readFileSync } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

// Required to work in serverless environments
// Why? https://github.com/vercel/next.js/discussions/32236#discussioncomment-5427295
const PREVIEW_COMPONENTS_PATH = path.resolve("./src/components/preview");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { component } = req.query;

  if (!component || typeof component != "string") return res.status(400).send({ error: "Bad request" });

  const componentName = component.split("-")[0];
  const componentType = component.split("-").slice(1).join("-");

  const componentCode = readFileSync(`${PREVIEW_COMPONENTS_PATH}/${componentName}/${componentType}.tsx`, {
    encoding: "utf-8",
  });
  res.status(200).send({ componentCode });
}
