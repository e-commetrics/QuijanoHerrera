import { Fragment } from "react";

/**
 * Renders the small amount of inline emphasis used in the copy: **bold** spans.
 * Content is authored in src/content (trusted), so this is a tiny splitter, not
 * a markdown parser, and never injects HTML.
 */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>,
      )}
    </>
  );
}
