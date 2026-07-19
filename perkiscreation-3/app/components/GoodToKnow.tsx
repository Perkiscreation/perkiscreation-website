const facts = [
  {
    title: "Natur bleibt Natur",
    text: "Blüten können sich beim Trocknen und im Resin leicht in Farbe und Form verändern. Diese natürlichen Veränderungen machen jedes Stück einzigartig.",
  },
  {
    title: "Schneller Expressversand",
    text: "Der Brautstrauß sollte idealerweise ein bis zwei Tage, spätestens jedoch zwei bis drei Tage nach der Hochzeit per DHL Express bei uns eintreffen.",
  },
  {
    title: "Bearbeitungszeit: 2–6 Monate",
    text: "Die Blumen werden zunächst schonend getrocknet, anschließend in Kunstharz gegossen und nach der Aushärtung sorgfältig geschliffen und poliert.",
  },
  {
    title: "Reservierungsgebühr: 50 €",
    text: "Die Gebühr sichert euren Termin verbindlich und wird später vollständig mit dem Preis des gewählten Erinnerungsstücks verrechnet.",
  },
  {
    title: "Kunstharz bleibt Handarbeit",
    text: "Wir arbeiten sehr sorgfältig mit dem Kunstharz. Kleine Mikroblasen oder feine Schlieren lassen sich dennoch nicht immer vollständig vermeiden und sind kein Qualitätsmangel.",
  },
  {
    title: "Harz kann nachdunkeln",
    text: "Kunstharz kann sich im Laufe der Zeit leicht gelblich verfärben. Direkte Sonneneinstrahlung und starke Wärme sollten deshalb möglichst vermieden werden.",
  },
];

export default function GoodToKnow() {
  return (
    <section className="mobileSection goodToKnow" id="wissen">
      <p className="sectionLabel">Gut zu wissen</p>
      <h2>Damit ihr von Anfang an genau wisst, was euch erwartet.</h2>

      <div className="knowledgeList">
        {facts.map((fact, index) => (
          <article className="knowledgeCard" key={fact.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{fact.title}</h3>
              <p>{fact.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
