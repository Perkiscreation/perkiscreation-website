const galleryItems = [
  {
    src: "/hero-brautstrauss-scharf.jpg",
    alt: "Brautstrauß in zarten Rosa- und Cremetönen",
  },
  {
    src: "/personalisierung-beispiel.jpg",
    alt: "Beispiel für eine personalisierte Brautstrauß-Konservierung",
  },
  {
    src: "/hero-brautstrauss-hell.jpg",
    alt: "Heller Brautstrauß mit eleganten Blüten",
  },
  {
    src: "/hero-brautstrauss.png",
    alt: "Florales Beispielbild eines Brautstraußes",
  },
];

export default function Gallery() {
  return (
    <section className="section gallery" id="galerie">
      <div className="sectionIntro centered">
        <p className="eyebrow">Galerie</p>
        <h2>Einblicke in unsere florale Welt.</h2>
        <p>
          Hier findet ihr erste Eindrücke und Gestaltungsbeispiele. Weitere
          echte Arbeiten ergänzen wir nach und nach.
        </p>
      </div>

      <div className="galleryGrid">
        {galleryItems.map((item, index) => (
          <figure className={`galleryItem galleryItem${index + 1}`} key={item.src}>
            <img src={item.src} alt={item.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
