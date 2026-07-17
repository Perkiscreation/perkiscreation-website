const points = [
  {
    number: "01",
    title: "Epoxidharz verändert sich mit der Zeit",
    text:
      "Ich arbeite ausschließlich mit hochwertigen, UV-stabilisierten Harzen. Trotzdem kann jedes Epoxidharz im Laufe der Jahre leicht nachdunkeln oder vergilben. Ein Standort ohne direkte Sonneneinstrahlung hilft dabei, dein Erinnerungsstück möglichst lange schön zu erhalten.",
  },
  {
    number: "02",
    title: "Kleine Bläschen und natürliche Spuren",
    text:
      "Mit Vakuumtechnik, sorgfältigen Gießmethoden und viel Erfahrung reduziere ich Lufteinschlüsse so weit wie möglich. Manche dichten oder haarigen Blüten halten dennoch winzige Bläschen fest. Solche kleinen Besonderheiten sind kein Mangel, sondern können Teil der Handarbeit sein.",
  },
  {
    number: "03",
    title: "Blumen verändern Farbe und Form",
    text:
      "Vor dem Gießen müssen die Blumen vollständig trocknen. Dabei können Farben heller oder dunkler werden, Blüten etwas schrumpfen oder transparenter wirken. Das fertige Kunstwerk ist deshalb keine exakte Kopie des frischen Straußes, sondern eine konservierte Erinnerung mit eigenem Charakter.",
  },
  {
    number: "04",
    title: "Persönliche Handarbeit braucht Zeit",
    text:
      "Jedes Erinnerungsstück entsteht Schritt für Schritt in sorgfältiger Handarbeit. In der Hochzeitssaison kann eine Antwort oder Fertigstellung etwas länger dauern. Du erhältst dafür ehrliche Kommunikation, persönliche Betreuung und ein Unikat, das mit viel Hingabe gefertigt wird.",
  },
  {
    number: "05",
    title: "Zeit, Material und Wert",
    text:
      "Die Trocknung dauert mehrere Wochen. Danach folgen Planung, Anordnung, viele Gießschichten, Aushärtung und Feinarbeit. Hochwertige Materialien, Spezialwerkzeuge und zahlreiche Arbeitsstunden spiegeln sich im Preis wider.",
  },
];

export default function GoodToKnow() {
  return (
    <section className="goodToKnow" id="wissenswertes">
      <div className="sectionHeading centeredHeading">
        <p className="eyebrow">Ehrlich und transparent</p>
        <h2>Gut zu wissen, bevor dein Brautstrauß konserviert wird.</h2>
        <p>
          Mir ist wichtig, dass du genau weißt, was bei einer handgefertigten
          Konservierung möglich ist und welche natürlichen Veränderungen dazugehören.
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
          <p className="eyebrow">Preise & Versand</p>
          <h3>Transparent und ohne versteckte Kosten</h3>
          <p>
            Du zahlst zunächst die Reservierungsgebühr von 50 €. Diese wird später
            vollständig mit dem Preis deiner gewählten Form verrechnet.
          </p>
        </div>

        <div>
          <h3>Versand deines Brautstraußes</h3>
          <p>
            Der Strauß sollte am Montag nach der Hochzeit per DHL Express mit
            Zustellung vor 12 Uhr versendet werden. Die Versandkosten zu uns trägst
            du selbst. Eine persönliche Übergabe ist nach Absprache ebenfalls möglich.
            Der spätere Versand deines fertigen Erinnerungsstücks ist im Preis enthalten.
          </p>
        </div>
      </div>
    </section>
  );
}
