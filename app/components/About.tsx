const values = [
  {
    title: "Persönliche Begleitung",
    text:
      "Von deiner Anfrage bis zum fertigen Erinnerungsstück begleiten wir dich persönlich. Auch das spätere Layout stimmen wir gemeinsam ab.",
  },
  {
    title: "Mit Liebe handgefertigt",
    text:
      "Jeder Brautstrauß ist einzigartig. Deshalb entsteht auch jedes Erinnerungsstück individuell, sorgfältig und mit viel Geduld.",
  },
  {
    title: "Ein echtes Unikat",
    text:
      "Deine Blumen erzählen eure Geschichte. Daraus entsteht ein zeitloses Erinnerungsstück mit ganz persönlicher Bedeutung.",
  },
];

export default function About() {
  return (
    <section className="whySection" id="ueber-uns">
      <div className="sectionHeading centeredHeading">
        <p className="eyebrow">Warum Perkiscreation?</p>
        <h2>Erinnerungen verdienen etwas Besonderes.</h2>
        <p>
          Dein Brautstrauß begleitet dich nur für einen Tag – die Erinnerung
          daran ein Leben lang.
        </p>
      </div>

      <div className="valueGrid">
        {values.map((value, index) => (
          <article className="valueCard" key={value.title}>
            <span>0{index + 1}</span>
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
