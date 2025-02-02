// NOTE: I'm commiting this to keep the code safe for now.
// I spent hours on it and really don't want to have it wiped out
// TODO: Optimize everything in here. Try to replace for loops with regular expressions
// TODO: Move this into something like a lib folder

const componentCode = `import React from "react";

import { cn } from "@/lib/utils";

export type ContainerProps = React.HTMLProps<HTMLDivElement> & {
 /**
   * List of links to display
   */
hello: string;
/**
   * How much to delay each child
   */
hello2: string;
};

/** Used to center items on a page. responsive by default. */ 
const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div className={cn("w-fit mx-auto max-w-screen-xl px-6 sm:px-8", className)} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;`;

// How does this work?
// First, we get the component name from `export default ...`
// (Assuming each file exports only one component as the default export)
// Once that's done, now that we have the component name, we look for its declaration
// For instance: const Button = () => ...
// Note that this only works with files that have a very specific format.

function getComponentName(code: string) {
  const linesOfCode = code.split("\n");
  let componentName;
  // Looping over every line of lcode
  for (let i = 0; i < linesOfCode.length; i++) {
    if (!linesOfCode[i].includes("export default")) continue;
    const piecesOfCode = linesOfCode[i].split(" ");
    // Remove the first words (with them being 'export' and 'default')
    // so we can get the component name that comes after them
    piecesOfCode.shift();
    piecesOfCode.shift();

    // After removing 'export default', the first word that comes after is the component name.
    const componentDeclaration = piecesOfCode[0];
    // If it ends with a semicolon, remove it (for instance: export default Button; => Button; => Button)
    if (componentDeclaration.endsWith(";")) {
      componentName = componentDeclaration.split(";")[0];
    } else {
      componentName = componentDeclaration;
    }
  }

  return componentName;
}

function getComponentProps(code: string, componentName: string) {
  const linesOfCode = code.split("\n");
  const propsTypeName = componentName + "Props";
  // Looping over every line of code
  let foundDefinition = false;
  let braceStart = null;
  let braceEnd = null;
  for (let i = 0; i < linesOfCode.length; i++) {
    if (linesOfCode[i].includes(`type ${propsTypeName}`)) {
      foundDefinition = true;
    }
    if (!foundDefinition) continue;

    if (linesOfCode[i].includes("{")) braceStart = i;
    if (linesOfCode[i].includes("}") && braceStart) {
      braceEnd = i;
      break;
    }
  }

  const typeDefinitionLines = linesOfCode.slice(braceStart!, braceEnd! + 1);

  let seenCommentStart = false;
  let currentStart = null;
  let comments = [];
  for (let i = 0; i < typeDefinitionLines.length; i++) {
    if (typeDefinitionLines[i].includes("/**")) {
      seenCommentStart = true;
      currentStart = i;
    }
    if (typeDefinitionLines[i].includes("*/")) {
      comments.push({ start: currentStart, end: i });
    }
  }

  const populatedComments = comments.map((comment) => {
    const populated = typeDefinitionLines
      .slice(comment.start! + 1, comment.end)
      .join("")
      .trim()
      .split("");
    populated.shift();
    return populated.join("").trim();
  });

  // strip out code comments
  const typeDefLinesWithoutComments = typeDefinitionLines
    .join(" ")
    .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "$1");

  const propsNamesAndTypes = /{(.*?)}/
    .exec(typeDefLinesWithoutComments)![0]
    .replace("{", "")
    .replace("}", "")
    .split(";")
    .map((x) => x.trim())
    .filter(Boolean)
    .map((x) => {
      const args = x.split(":").map((y) => y.trim());
      return { prop: args[0], type: args[1] };
    });

  const props = populatedComments.map((comment, i) => ({
    prop: propsNamesAndTypes[i].prop,
    type: propsNamesAndTypes[i].type,
    description: comment,
  }));

  return props;
}

const componentName = getComponentName(componentCode);

if (!componentName) throw new Error("Couldn't find component export");

console.log(getComponentProps(componentCode, componentName));
