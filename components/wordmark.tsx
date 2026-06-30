import { SITE } from "@/lib/site";

// Wordmark with the trailing "yee" in the clay accent. One source for nav + footer.
const ACCENT_LENGTH = 3;

export function Wordmark(): React.ReactElement {
  const { wordmark } = SITE;
  const head = wordmark.slice(0, -ACCENT_LENGTH);
  const tail = wordmark.slice(-ACCENT_LENGTH);
  return (
    <>
      {head}
      <span className="text-clay">{tail}</span>
    </>
  );
}
