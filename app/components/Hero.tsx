function EucalyptusAccent({ side }: { side: "left" | "right" }) {
  return (
    <svg
      className={`eucalyptusAccent eucalyptusAccent--${side}`}
      viewBox="0 0 220 420"
      aria-hidden="true"
    >
      <path d="M108 408C112 334 112 258 104 184C99 139 92 91 78 24" />
      <ellipse cx="92" cy="314" rx="24" ry="50" transform="rotate(-38 92 314)" />
      <ellipse cx="126" cy="274" rx="24" ry="50" transform="rotate(42 126 274)" />
      <ellipse cx="84" cy="226" rx="22" ry="46" transform="rotate(-42 84 226)" />
      <ellipse cx="121" cy="186" rx="22" ry="46" transform="rotate(42 121 186)" />
      <ellipse cx="72" cy="136" rx="20" ry="42" transform="rotate(-40 72 136)" />
      <ellipse cx="104" cy="96" rx="20" ry="42" transform="rotate(38 104 96)" />
      <ellipse cx="62" cy="62" rx="18" ry="36" transform="rotate(-36 62 62)" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="start">
      <EucalyptusAccent side="left" />

      <div className="heroText">
        <p className="eyebrow">Brautstrauß-Konservierung</p>

        <h1 className="heroHeadline">
          Wir bewahren,
          <span>was euer Tag einzigartig macht.</span>
        </h1>

        <div className="heroDivider" aria-hidden="true">
          <span />
          <b>♥</b>
          <span />
        </div>

        <p className="lead">
          Eure Blumen erzählen eine Geschichte. Wir konservieren euren
          Brautstrauß und verwandeln ihn in ein zeitloses Erinnerungsstück.
        </p>

        <div className="heroButtons">
          <a className="button heroPrimary" href="#kontakt">
            Sichere dir deinen Platz
          </a>
          <a className="textLink" href="#produkte">
            Formen entdecken
          </a>
        </div>

        <p className="heroSeason">Für 2026 &amp; 2027</p>
      </div>

      <div className="heroVisual">
        <img
          className="heroPhoto"
          src="/hero-brautstrauss-hell.jpg"
          alt="Heller Brautstrauß mit cremefarbenen und altrosa Blumen sowie Eukalyptus"
        />
      </div>

      <EucalyptusAccent side="right" />
    </section>
  );
}
