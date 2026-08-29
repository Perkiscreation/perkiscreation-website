"use client";

import { useState, type CSSProperties } from "react";

type Comparison = {
  eyebrow: string;
  title: string;
  description: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  captionTitle: string;
  captionText: string;
};

const comparisons: Comparison[] = [
  {
    eyebrow: "",
    title: "Pfingstrosen",
    description:
      "Vom frischen Brautstrauß zum persönlichen Erinnerungsstück – entdeckt den Unterschied selbst.",
    before: "/vorher-pfingstrosen.jpg",
    after: "/nachher-pfingstrosen.jpg",
    beforeAlt: "Frische weiße Pfingstrosen",
    afterAlt:
      "Weiße getrocknete Pfingstrosen in einem klaren Hexagon aus Kunstharz",
    captionTitle:
      "Aus frischen Pfingstrosen wird ein Erinnerungsstück.",
    captionText:
      "Die Blüten werden sorgfältig getrocknet, arrangiert und in hochwertigem Kunstharz konserviert.",
  },
];

function ComparisonSlider({ item }: { item: Comparison }) {
  const [position, setPosition] = useState(50);

  return (
    <article className="beforeAfterItem">
      <div className="beforeAfterItemHeading">
        <div>
          <p className="beforeAfterEyebrow">{item.eyebrow}</p>
          <h3>{item.title}</h3>
        </div>

        <span className="beforeAfterHint">
          Regler ziehen
        </span>
      </div>

      <p className="beforeAfterDescription">
        {item.description}
      </p>

      <div
        className="beforeAfterCompare"
        style={
          {
            "--position": `${position}%`,
          } as CSSProperties
        }
      >
        {/* NACHHER */}
        <img
          className="beforeAfterImage beforeAfterAfter"
          src={item.after}
          alt={item.afterAlt}
          draggable={false}
        />

        {/* VORHER */}
        <img
          className="beforeAfterImage beforeAfterBefore"
          src={item.before}
          alt={item.beforeAlt}
          draggable={false}
        />

        <span className="beforeAfterLabel beforeAfterLabelBefore">
          Vorher
        </span>

        <span className="beforeAfterLabel beforeAfterLabelAfter">
          Nachher
        </span>

        <div
          className="beforeAfterDivider"
          aria-hidden="true"
        >
          <span>‹</span>
          <span>›</span>
        </div>

        <input
          className="beforeAfterRange"
          type="range"
          min="0"
          max="100"
          value={position}
          aria-label={`${item.title}: Vorher-Nachher-Vergleich verschieben`}
          onChange={(event) =>
            setPosition(Number(event.target.value))
          }
        />
      </div>

      <div className="beforeAfterCaption">
        <strong>{item.captionTitle}</strong>

        <span>{item.captionText}</span>
      </div>
    </article>
  );
}

export default function BeforeAfter() {
  return (
    <section
      className="section beforeAfter"
      id="vorher-nachher"
    >
      <div className="sectionIntro centered compactIntro">
        <p className="eyebrow">
          Vom Brautstrauß zum Erinnerungsstück
        </p>

        <h2>Vorher &amp; Nachher.</h2>

        <p>
          Ein echtes Beispiel aus unserer Arbeit – zieht den
          Regler und entdeckt, wie sich eure Blumen in ein
          persönliches Erinnerungsstück verwandeln.
        </p>
      </div>

      <div className="beforeAfterList">
        {comparisons.map((item) => (
          <ComparisonSlider
            key={item.title}
            item={item}
          />
        ))}
      </div>

      {/* VIDEO */}
      <div className="beforeAfterVideo">

        <div className="beforeAfterVideoIntro">
          <p className="eyebrow">
            Ein Blick auf unsere Arbeit
          </p>

          <h3>
            So sieht euer Erinnerungsstück in den Händen aus.
          </h3>

          <p>
            Ein kleiner Einblick in eines unserer fertigen
            Erinnerungsstücke.
          </p>
        </div>

        <div className="beforeAfterVideoFrame">
          <video
            src="/nachher-luftgetrocknet.mp4"
            autoPlay
            muted
            playsInline
            preload="metadata"
          />
        </div>

        {/* HINWEIS ZUM LUFTGETROCKNETEN STRAUSS */}
        <div className="beforeAfterVideoNote">
          <p className="eyebrow">
            Schon getrocknet?
          </p>

          <h3>
            Auch luftgetrocknete Sträuße können
            konserviert werden.
          </h3>

          <p>
            Der im Video gezeigte Strauß war bereits
            luftgetrocknet. Auch solche Blumen können – je nach
            Zustand – noch zu einem ganz besonderen
            Erinnerungsstück werden.
          </p>
        </div>

      </div>

      <div className="beforeAfterExtra">
        <span
          className="beforeAfterExtraIcon"
          aria-hidden="true"
        >
          ♡
        </span>

        <div>
          <p>Wusstest du schon?</p>

          <strong>
            Jede Blüte erzählt ihre eigene Geschichte.
          </strong>

          <span>
            Deshalb ist kein Erinnerungsstück exakt wie das
            andere. Farbe, Form und Anordnung entstehen immer
            passend zu euren Blumen.
          </span>
        </div>
      </div>
    </section>
  );
}