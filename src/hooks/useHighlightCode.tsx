import { highlightCode } from "@/components/docs/code";
import { useEffect, useState } from "react";

function useHighlightCode(componentCode?: string) {
  const [code, setCode] = useState<any>();
  useEffect(() => {
    if (!componentCode) return;
    highlightCode(`\`\`\`tsx
${componentCode}
\`\`\``).then((formatted) => setCode(formatted));
  }, [componentCode]);

  return { highlightedCode: code };
}

export default useHighlightCode;
