import { readFileSync } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { component } = req.query;

  if (!component || typeof component != "string") return res.status(400).send({ error: "Bad request" });

  const componentName = component.split("-")[0];
  const componentType = component.split("-").slice(1).join("-");

  const componentCode = readFileSync(`./src/components/preview/${componentName}/${componentType}.tsx`, {
    encoding: "utf-8",
  });
  res.status(200).send({ componentCode });
}
