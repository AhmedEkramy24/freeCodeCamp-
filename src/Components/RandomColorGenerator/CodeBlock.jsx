import { useState } from "react";

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);
  const codeText = code;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md relative">
      <pre className="overflow-x-auto text-sm">
        <code>{codeText}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded text-xs"
      >
        {copied ? (
          <span>
            copied <i className="fa-solid fa-check"></i>
          </span>
        ) : (
          <span>
            Copy <i className="fa-solid fa-copy"></i>
          </span>
        )}
      </button>
    </div>
  );
};

export default CodeBlock;
