"use client";

import { CodeComponent } from "react-markdown/lib/ast-to-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBlock: CodeComponent = ({ inline, className, children }) => {
  if (inline) {
    return <code className={className}>{children}</code>;
  }

  const match = /language-(\w+)/.exec(className || "");
  const lang = match && match[1] ? match[1] : "";
  const name = match && match[2] ? match[2].slice(1) : "";

  return (
    <SyntaxHighlighter
      PreTag="div"
      style={tomorrowNight}
      language={lang}
      showLineNumbers
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
