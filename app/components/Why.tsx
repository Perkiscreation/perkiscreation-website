const items = [
  {
    title: "Persönliche Begleitung",
    text: "Von der Anfrage bis zum fertigen Erinnerungsstück begleiten wir euch persönlich und transparent."
  },
  {
    title: "Sorgfältige Handarbeit",
    text: "Jedes Erinnerungsstück entsteht individuell, mit hochwertigen Materialien und viel Geduld."
  },
  {
    title: "Ein echtes Unikat",
    text: "Kein Brautstrauß gleicht dem anderen – und genau so einzigartig bleibt auch euer Erinnerungsstück."
  }
];

export default function Why() {
  return (
    <section className="section why" id="warum">
      <div className="sectionIntro centered">
        <p className="eyebrow">Warum Perkiscreation</p>
        <h2>Erinnerungen verdienen etwas Besonderes.</h2>
        <p>
          Euer Brautstrauß begleitet euch nur für einen Tag – die Erinnerung
          daran ein Leben lang.
        </p>
      </div>

      <div className="whyGrid">
        {items.map((item, index) => (
          <article key={item.title}>
            <span>0{index + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
