const points = [
  ["Harz & UV-Licht", "Auch UV-stabilisiertes Epoxidharz kann sich über viele Jahre leicht verändern. Direkte Sonne sollte vermieden werden."],
  ["Natürliche Besonderheiten", "Winzige Bläschen oder kleine Spuren können trotz sorgfältiger Verarbeitung entstehen und gehören zur Handarbeit."],
  ["Farbe & Form", "Beim Trocknen können Blumen heller, dunkler, kleiner oder transparenter werden."],
  ["Bearbeitungszeit", "Je nach Saison dauert es ungefähr 2 bis 6 Monate, bis euer Erinnerungsstück bei euch ankommt."],
  ["Versand", "Bitte sendet den Strauß ein bis zwei Werktage nach der Hochzeit per Express oder bringt ihn nach Absprache vorbei."],
];

export default function GoodToKnow() {
  return (
    <section className="section knowledge" id="wissen">
      <div className="sectionIntro centered">
        <p className="eyebrow">Ehrlich &amp; transparent</p>
        <h2>Gut zu wissen.</h2>
      </div>

      <div className="knowledgeGrid">
        {points.map(([title, text], index) => (
          <article key={title}>
            <span>0{index + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
