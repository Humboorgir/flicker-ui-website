// TODO: Optimize this

// How does this work?
// First, we get the component name from `export default ...`
// (Assuming each file exports only one component as the default export)
// Once that's done, now that we have the component name, we look for its declaration
// For instance: const Button = () => ...
// Then we get props and their description from `ButtonProps` and `buttonVariants` (if there is one)
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

function getComponentVariantInfo(code: string) {
  const componentName = getComponentName(code);

  if (!componentName) throw new Error("Couldn't find component export");

  const linesOfCode = code.split("\n");
  const variantsDefName = componentName.toLowerCase() + "Variants";
  // Looping over every line of code
  let definitionStart = null;
  for (let i = 0; i < linesOfCode.length; i++) {
    if (linesOfCode[i].includes(`const ${variantsDefName} =`)) {
      definitionStart = i;
    }
  }

  if (!definitionStart) return console.log("No variants included");

  function findNestedBraces(text: string) {
    let openCount = 0;
    let result = "";
    let startIndex = -1;

    for (let i = 0; i < text.length; i++) {
      if (text[i] === "{") {
        if (openCount === 0) {
          startIndex = i; // Capture the starting index of the first '{'
        }
        openCount++;
      } else if (text[i] === "}") {
        openCount--;
      }

      // If we close off all opened braces
      if (openCount === 0 && startIndex !== -1) {
        result = text.substring(startIndex, i + 1); // Capture the full token
        break; // Exit the loop after finding the complete match
      }
    }

    return result;
  }

  const variantDefinition = findNestedBraces(
    linesOfCode.slice(definitionStart!, linesOfCode.length).join("\n")
  );

  function parseVariantsInfo(str: string) {
    // Extract comments and their corresponding variants
    const commentRegex = /\/\*\*([\s\S]*?)\*\/\s*(\w+):/g;
    const variants = [];
    let match;

    // Parse comments and variant names
    while ((match = commentRegex.exec(str)) !== null) {
      const [_, comment, variant] = match;
      const description = comment
        .split("\n")
        .map((line) => line.replace(/^\s*\*\s?/, "").trim())
        .join(" ")
        .trim();

      variants.push({ variant, description });
    }

    // Parse the JavaScript object
    const parsedObject = new Function(`return ${str}`)();
    const defaultVariants = parsedObject.defaultVariants || {};

    // Extract variant types from parsed object
    return variants.map(({ variant, description }) => {
      const variantOptions = parsedObject.variants?.[variant] || {};
      const required = !(variant in defaultVariants);
      const type = Object.keys(variantOptions).join(" | ");

      return {
        prop: variant,
        type,
        required,
        description,
      };
    });
  }

  return parseVariantsInfo(variantDefinition);
}

function getComponentPropInfo(code: string) {
  const componentName = getComponentName(code);

  if (!componentName) throw new Error("Couldn't find component export");

  const linesOfCode = code.split("\n");
  const propsTypeName = componentName + "Props";
  // Looping over every line of code
  let definitionStart = null;
  for (let i = 0; i < linesOfCode.length; i++) {
    if (linesOfCode[i].includes(`type ${propsTypeName}`)) {
      definitionStart = i;
    }
  }

  function findNestedBraces(text: string) {
    let openCount = 0;
    let result = "";
    let startIndex = -1;

    for (let i = 0; i < text.length; i++) {
      if (text[i] === "{") {
        if (openCount === 0) {
          startIndex = i; // Capture the starting index of the first '{'
        }
        openCount++;
      } else if (text[i] === "}") {
        openCount--;
      }

      // If we close off all opened braces
      if (openCount === 0 && startIndex !== -1) {
        result = text.substring(startIndex, i + 1); // Capture the full token
        break; // Exit the loop after finding the complete match
      }
    }

    return result;
  }

  const typeDefinitionLines = findNestedBraces(
    linesOfCode.slice(definitionStart!, linesOfCode.length).join("\n")
  ).split("\n");

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
  const typeDefLinesWithoutComments = typeDefinitionLines.join("\n").replace(/\/\*\*[\s\S]*?\*\//g, "");

  const typeDefinitions = typeDefLinesWithoutComments
    .replace(/{/, "")
    .replace(/(.*?)(})[^}]*$/, "")
    .split("\n")
    .map((x) => x.trim())
    .filter(Boolean);

  const propsNamesAndTypes = typeDefinitions.map((x) => {
    const argsSplit = x.split(":");
    // prevents splitting by : after the first :
    const firstArgument = argsSplit[0];
    const restOfTheArgument = argsSplit.slice(1, argsSplit.length).join(":");
    const args = [firstArgument, restOfTheArgument];
    let prop = args[0];
    let type = args[1];

    const required = prop.endsWith("?") ? false : true;
    // Remove question mark at the end of the prop name
    if (!required) prop = prop.slice(0, -1);
    const endsWithSemicolon = type.endsWith(";");
    if (endsWithSemicolon) type = type.slice(0, -1);
    return { prop, type, required };
  });
  const props = populatedComments.map((comment, i) => ({
    ...propsNamesAndTypes[i],
    description: comment,
  }));

  // The code above doesn't include variants, let's fix that!
  const variantInfo = getComponentVariantInfo(code);

  return [...props, ...variantInfo!];
}

export default getComponentPropInfo;
