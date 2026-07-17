const steps = [
  {
    number: "01",
    icon: "calendar",
    title: "Deinen Platz sichern",
    text:
      "Sende uns deine Anfrage mit deinem Hochzeitsdatum. Nach Eingang der Reservierungsgebühr erhältst du deine Terminbestätigung.",
  },
  {
    number: "02",
    icon: "bouquet",
    title: "Hochzeit genießen & Strauß versenden",
    text:
      "Nach der Hochzeit sollte dein Brautstrauß möglichst innerhalb von ein bis zwei Werktagen per Express versendet oder nach Absprache persönlich vorbeigebracht werden.",
  },
  {
    number: "03",
    icon: "layout",
    title: "Trocknung & Layout",
    text:
      "Nach der schonenden Trocknung erstellen wir ein Layout für dein Erinnerungsstück. Du erhältst es zur Ansicht und wir stimmen die Blumenanordnung gemeinsam ab.",
  },
  {
    number: "04",
    icon: "heart",
    title: "Konservierung",
    text:
      "Erst nach deiner Freigabe beginnen wir mit der Konservierung in hochwertigem Epoxidharz. Danach folgen Aushärtung, Schliff und Politur.",
  },
  {
    number: "05",
    icon: "gift",
    title: "Fertigstellung & Versand",
    text:
      "Dein fertiges Unikat wird sicher verpackt und an dich versendet. Die gesamte Bearbeitungszeit beträgt je nach Saison etwa zwei bis sechs Monate.",
  },
];

function StepIcon({ type }: { type: string }) {
  return (
    <svg className="timelineIcon" viewBox="0 0 64 64" aria-hidden="true">
      {type === "calendar" && (
        <>
          <rect x="12" y="16" width="40" height="34" rx="4" />
          <path d="M20 10v12M44 10v12M12 26h40" />
          <path d="M23 38l5 5 12-13" />
        </>
      )}
      {type === "bouquet" && (
        <>
          <circle cx="26" cy="24" r="8" />
          <circle cx="38" cy="24" r="8" />
          <circle cx="32" cy="16" r="8" />
          <path d="M28 31l-7 21M36 31l7 21M24 44h16" />
        </>
      )}
      {type === "layout" && (
        <>
          <rect x="16" y="10" width="32" height="44" rx="4" />
          <path d="M24 22h16M24 31h12M24 40h16" />
          <path d="M43 45c5-5 7-9 4-12-4 0-8 3-10 8" />
        </>
      )}
      {type === "heart" && (
        <path d="M32 52S12 40 12 24c0-8 6-13 13-13 4 0 7 2 7 6 1-4 4-6 8-6 7 0 12 5 12 13 0 16-20 28-20 28Z" />
      )}
      {type === "gift" && (
        <>
          <rect x="12" y="26" width="40" height="28" rx="3" />
          <path d="M32 26v28M10 20h44v8H10z" />
          <path d="M32 20c-7 0-12-3-12-8 0-3 2-5 5-5 5 0 7 6 7 13ZM32 20c7 0 12-3 12-8 0-3-2-5-5-5-5 0-7 6-7 13Z" />
        </>
      )}
    </svg>
  );
}

export default function Process() {
  return (
    <section className="process" id="ablauf">
      <div className="sectionHeading centeredHeading">
        <p className="eyebrow">Von der Anfrage bis zum Unikat</p>
        <h2>So läuft deine Brautstrauß-Konservierung ab.</h2>
        <p>
          Wenn du uns die Gestaltung vollständig anvertrauen möchtest, kannst
          du das bereits in deiner Anfrage angeben. Alles Weitere besprechen wir
          anschließend gemeinsam.
        </p>
      </div>

      <div className="timeline">
        {steps.map((step) => (
          <article className="timelineStep" key={step.number}>
            <div className="timelineIconWrap">
              <StepIcon type={step.icon} />
            </div>
            <span className="timelineNumber">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>

      <div className="europeShipping">
        <div className="europeIcon">⌁</div>
        <div>
          <h3>Versand in ganz Europa</h3>
          <p>
            Dein Erinnerungsstück wird sicher und mit viel Liebe verpackt an
            deine Wunschadresse in ganz Europa versendet.
          </p>
        </div>
      </div>
    </section>
  );
}
