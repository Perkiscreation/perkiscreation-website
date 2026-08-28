const points = [
  ["Harz & UV-Licht", "Auch UV-stabilisiertes Epoxidharz kann sich über viele Jahre leicht verändern oder vergilben. Direkte Sonne und starke Wärme sollten vermieden werden."],
  ["Natürliche Handarbeit", "Kleine Mikroblasen, feine Schlieren, Staubpartikel oder minimale Unebenheiten können trotz sorgfältiger Verarbeitung auftreten und sind kein Hinweis auf industrielle Serienfertigung."],
  ["Farbe & Form", "Echte Blumen verändern sich beim Trocknen. Sie können heller, dunkler, kleiner, transparenter oder bräunlicher werden."],
  ["Bearbeitungszeit", "Je nach Saison, Trocknung und Auftragslage dauert die Fertigstellung in der Regel ungefähr 2 bis 6 Monate."],
  ["Schneller Versand", "Bitte sendet den Strauß idealerweise ein bis zwei Tage, spätestens drei Tage nach der Hochzeit per DHL Express oder bringt ihn nach Absprache vorbei."],
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
