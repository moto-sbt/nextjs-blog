import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {
  className?: string;
  children?: React.ReactNode;
}


const CodeBlock = ({ className, children = "" }: Props) => {
  const [copied, setCopied] = useState(false)
  const match = /language-(\w+)(:?.*)/.exec(className || "");
  const language = match && match[1] ? match[1] : "";
  const fileName = match && match[2] ? match[2].slice(1) : "";
  const code = String(children).replace(/\n$/, "");
  const syntaxHighlighterClass = fileName
    ? "code-block-with-title"
    : "code-block";

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <>
      <div className="code-block-wrapper">
        <div className="code-block-header">
          {fileName && <div className="code-block-title">{fileName}</div>}
          <button
            onClick={handleCopy}
            className="copy-button"
            aria-label="Copy code"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          className={syntaxHighlighterClass}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      <style jsx>{`
        .code-block-wrapper {
          font-size: 0.9rem;
          margin-bottom: 2rem;
        }
        .code-block-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .code-block-title {
          display: inline-block;
          border-radius: 0.3rem 0.3rem 0 0;
          background-color: #323e52;
          padding: 0.55rem 1rem;
          color: white;
          font-size: 0.8rem;
          font-family: Inconsolata, Monaco, Consolas, "Courier New", Courier, monospace;
        }
        .copy-button {
          margin-left: auto;
          padding: 0.3rem 0.7rem;
          font-size: 0.75rem;
          border-radius: 0.3rem;
          background-color: #4a5568;
          color: #e2e8f0;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .copy-button:hover {
          background-color: #2d3748;
        }
      `}</style>
      <style jsx global>{`
        .code-block {
          border-radius: 0.3rem !important;
          padding: 1.5rem !important;
        }
        .code-block-with-title {
          border-radius: 0 0.3rem 0.3rem 0.3rem !important;
          padding: 1.5rem !important;
          margin-top: 0 !important;
        }
      `}</style>
    </>
  );
};

export default CodeBlock
