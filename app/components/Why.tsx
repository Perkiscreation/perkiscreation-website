type IconName = "flower" | "diamond" | "heart" | "branch";

function FeatureIcon({ name }: { name: IconName }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      {name === "flower" && <><circle cx="24" cy="20" r="4" {...common}/><path d="M24 16c-1-8 8-10 8-3 6-5 11 3 4 7 8 1 7 10 0 9 5 6-3 12-8 6-2 8-11 5-8-2-7 4-14-1-10-7-8-5 1-12 7-8-1-8 8-12 8-4Z" {...common}/><path d="M24 36v9M17 42c4-1 6 1 7 3M31 42c-4-1-6 1-7 3" {...common}/></>}
      {name === "diamond" && <><path d="M8 17h32l-16 24L8 17Z" {...common}/><path d="m8 17 7-9h18l7 9M15 8l9 33M33 8l-9 33M8 17h32M16 17l8-9 8 9" {...common}/></>}
      {name === "heart" && <path d="M24 40S7 30 7 17c0-7 9-11 17-2 8-9 17-5 17 2 0 13-17 23-17 23Z" {...common}/>} 
      {name === "branch" && <><path d="M14 42c7-11 12-21 20-34" {...common}/><path d="M18 35c-8 0-9-8-3-10 5-1 7 5 3 10ZM24 27c-7-1-7-8-2-10 5 0 6 6 2 10ZM30 19c-5-2-4-8 1-9 4 1 4 6-1 9ZM20 34c7 1 8-6 4-9M26 26c7 1 8-6 4-9M32 18c6 1 7-5 3-8" {...common}/></>}
    </svg>
  );
}

const items: { icon: IconName; title: string; text: string }[] = [
  { icon: "flower", title: "Echte Blumen", text: "Sorgfältig konserviert und in hochwertigem Kunstharz verewigt." },
  { icon: "diamond", title: "Höchste Qualität", text: "Mit viel Liebe zum Detail und sorgfältig ausgewählten Materialien." },
  { icon: "heart", title: "Individuell & persönlich", text: "Jedes Stück ist einzigartig – genau wie eure Geschichte." },
  { icon: "branch", title: "Für die Ewigkeit", text: "Eine Erinnerung, die euch ein Leben lang begleitet." },
];

export default function Why() {
  return (
    <section className="featureStrip" id="warum" aria-label="Warum Perkiscreation">
      {items.map((item) => (
        <article key={item.title}>
          <div className="featureIcon"><FeatureIcon name={item.icon} /></div>
          <div>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
