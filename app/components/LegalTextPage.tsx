import Link from "next/link";

type Block =
  | { type: "h2" | "h3" | "p"; text: string }
  | { type: "ul"; items: string[] };

export default function LegalTextPage({ title, blocks }: { title: string; blocks: Block[] }) {
  return (
    <main className="legalPage legalTextPage">
      <Link className="legalBack" href="/">← Zurück zur Startseite</Link>
      <h1>{title}</h1>
      <div className="legalCopy">
        {blocks.map((block, index) => {
          if (block.type === "h2") return <h2 key={index}>{block.text}</h2>;
          if (block.type === "h3") return <h3 key={index}>{block.text}</h3>;
          if (block.type === "ul") return <ul key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
          return <p key={index}>{block.text}</p>;
        })}
      </div>
    </main>
  );
}
