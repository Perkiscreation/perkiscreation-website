const steps = [
  ["01", "Anfrage", "Du sendest uns dein Hochzeitsdatum und deine Wünsche."],
  ["02", "Reservierung", "Mit 50 € sicherst du deinen Konservierungsplatz."],
  ["03", "Übergabe", "Nach der Hochzeit bringst oder sendest du den Strauß."],
  ["04", "Konservierung", "Wir trocknen, arrangieren und gießen deine Blumen ein."],
  ["05", "Erinnerung", "Du erhältst dein fertiges, handgefertigtes Unikat."],
];

export default function Process() {
  return (
    <section className="process" id="ablauf">
      <div className="sectionHeading">
        <p className="eyebrow">So funktioniert es</p>
        <h2>In fünf Schritten zu deiner Erinnerung.</h2>
      </div>

      <div className="processGrid">
        {steps.map(([number, title, text]) => (
          <article key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
