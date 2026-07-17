const points = [
  {
    number: "01",
    title: "Harz & UV-Licht",
    text:
      "Auch hochwertiges, UV-stabilisiertes Epoxidharz kann sich über viele Jahre leicht verändern. Bitte stelle dein Erinnerungsstück nicht in direkte Sonne.",
  },
  {
    number: "02",
    title: "Natürliche Besonderheiten",
    text:
      "Winzige Bläschen oder kleine Spuren können trotz sorgfältiger Verarbeitung entstehen und gehören zu echter Handarbeit.",
  },
  {
    number: "03",
    title: "Farbe & Form",
    text:
      "Beim Trocknen können Blumen heller, dunkler, kleiner oder transparenter werden. Dein Unikat bleibt eine natürliche Erinnerung, keine exakte Kopie.",
  },
  {
    number: "04",
    title: "Bearbeitungszeit",
    text:
      "Je nach Saison dauert es ungefähr zwei bis sechs Monate, bis dein fertiges Erinnerungsstück bei dir ankommt.",
  },
  {
    number: "05",
    title: "Versand",
    text:
      "Bitte sende den Strauß möglichst ein bis zwei Werktage nach der Hochzeit per Express. Eine persönliche Übergabe ist nach Absprache möglich.",
  },
];

export default function GoodToKnow() {
  return (
    <section className="goodToKnow" id="wissenswertes">
      <div className="sectionHeading centeredHeading">
        <p className="eyebrow">Ehrlich und transparent</p>
        <h2>Gut zu wissen.</h2>
        <p>
          Damit du von Anfang an weißt, was bei einer handgefertigten
          Konservierung dazugehört.
        </p>
      </div>

      <div className="infoGrid">
        {points.map((point) => (
          <article className="infoCard" key={point.number}>
            <span>{point.number}</span>
            <h3>{point.title}</h3>
            <p>{point.text}</p>
          </article>
        ))}
      </div>

      <div className="shippingBox">
        <div>
          <p className="eyebrow">Preise</p>
          <h3>Transparent und ohne versteckte Kosten</h3>
          <p>
            Die Reservierungsgebühr von 50 € wird später vollständig mit dem
            Preis deiner gewählten Form verrechnet.
          </p>
        </div>

        <div>
          <p className="eyebrow">Versand</p>
          <h3>Dein fertiges Erinnerungsstück</h3>
          <p>
            Die Kosten für den Expressversand deines Brautstraußes zu uns
            trägst du selbst. Der spätere Versand des fertigen Kunstwerks zu dir
            ist bereits im Preis enthalten.
          </p>
        </div>
      </div>
    </section>
  );
}
