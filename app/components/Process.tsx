type StepIcon = "calendar" | "mail" | "package" | "hands" | "hexagon" | "gift";

function ProcessIcon({ name }: { name: StepIcon }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      {name === "calendar" && (
        <>
          <rect x="7" y="10" width="34" height="31" rx="3" {...common} />
          <path d="M7 18h34M15 6v8M33 6v8" {...common} />
          <path d="M24 34s-8-5-8-10c0-4 5-6 8-1 3-5 8-3 8 1 0 5-8 10-8 10Z" {...common} />
        </>
      )}
      {name === "mail" && (
        <>
          <rect x="5" y="10" width="38" height="28" rx="3" {...common} />
          <path d="m7 13 17 14 17-14" {...common} />
        </>
      )}
      {name === "package" && (
        <>
          <path d="m7 15 17-9 17 9v20l-17 8-17-8V15Z" {...common} />
          <path d="m7 15 17 9 17-9M24 24v19M15 10l18 9" {...common} />
        </>
      )}
      {name === "hands" && (
        <>
          <path d="M12 38c1-9 2-16 5-18 3-2 5 1 4 4l-1 5M36 38c-1-9-2-16-5-18-3-2-5 1-4 4l1 5" {...common} />
          <path d="M20 29c-5-5-9-2-8 3 1 5 6 9 12 11M28 29c5-5 9-2 8 3-1 5-6 9-12 11" {...common} />
          <circle cx="24" cy="14" r="4" {...common} />
          <path d="M24 10c-1-6 6-7 6-2 5-4 8 3 3 6 6 1 5 7 0 7 3 4-2 8-6 4-1 6-8 3-6-2-5 3-10-1-7-5-6-4 1-9 5-6-1-5 6-8 6-3Z" {...common} />
        </>
      )}
      {name === "hexagon" && (
        <>
          <path d="M24 5 40 14v20L24 43 8 34V14L24 5Z" {...common} />
          <path d="M17 30c5-8 9-8 14-15M16 20c4 0 7 2 8 6M29 18c3 2 4 5 3 8" {...common} />
        </>
      )}
      {name === "gift" && (
        <>
          <rect x="7" y="20" width="34" height="22" rx="2" {...common} />
          <path d="M5 14h38v8H5zM24 14v28" {...common} />
          <path d="M24 14c-7-1-12-3-11-7 2-5 9 0 11 7ZM24 14c7-1 12-3 11-7-2-5-9 0-11 7Z" {...common} />
        </>
      )}
    </svg>
  );
}

const steps: { icon: StepIcon; title: string; text: string }[] = [
  {
    icon: "calendar",
    title: "Platz reservieren",
    text: "Über das Kontaktformular anfragen und den Platz nach Bestätigung mit 50 € Reservierungsgebühr sichern.",
  },
  {
    icon: "mail",
    title: "Versandanleitung",
    text: "Ein bis zwei Wochen vor der Hochzeit erhaltet ihr die Anleitung und die Restrechnung.",
  },
  {
    icon: "package",
    title: "Brautstrauß versenden",
    text: "Idealerweise ein bis zwei Tage, spätestens drei Tage nach der Hochzeit per DHL Express.",
  },
  {
    icon: "hands",
    title: "Trocknung & Gestaltung",
    text: "Jede Blüte wird sorgfältig getrocknet und anschließend harmonisch angeordnet.",
  },
  {
    icon: "hexagon",
    title: "Konservierung & Vollendung",
    text: "Das Erinnerungsstück wird in mehreren Harzschichten gegossen, geschliffen und poliert.",
  },
  {
    icon: "gift",
    title: "Sichere Lieferung",
    text: "Das fertige Erinnerungsstück wird sorgfältig verpackt und an euch versendet.",
  },
];

export default function Process() {
  return (
    <section className="section process" id="ablauf">
      <div className="sectionIntro centered compactIntro">
        <p className="eyebrow">So läuft alles ab</p>
        <h2>In sechs liebevollen Schritten.</h2>
      </div>

      <div className="timeline modernTimeline sixStepTimeline">
        {steps.map((step, index) => (
          <article key={step.title}>
            <div className="timelineDot" aria-hidden="true">
              <ProcessIcon name={step.icon} />
            </div>
            <small className="stepNumber">0{index + 1}</small>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
