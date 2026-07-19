const products = [
  {
    name: "Hexagon",
    shape: "hexagon",
    description: "Modern, facettenreich und besonders beliebt.",
    prices: ["S · 15 cm — 210 €", "M · 20 cm — 270 €", "L · 24 cm — 320 €"],
  },
  {
    name: "Bogen",
    shape: "arch",
    description: "Eine elegante, weiche Form für eine ruhige Präsentation.",
    prices: ["S · 13 × 7 cm — 190 €", "M · 16 × 12 cm — 210 €", "L · 21 × 16 cm — 270 €"],
  },
  {
    name: "Herz",
    shape: "heart",
    description: "Ein besonders emotionales Erinnerungsstück.",
    prices: ["20 cm — 270 €"],
  },
  {
    name: "Quadrat",
    shape: "square",
    description: "Klar, zeitlos und ideal für größere Blüten.",
    prices: ["20 × 20 cm — 320 €"],
  },
  {
    name: "Individuelles Datum",
    shape: "date",
    description: "Euer Hochzeitsdatum als persönliches Einzelstück.",
    prices: ["ab 120 €"],
  },
];

export default function Products() {
  return (
    <section className="mobileSection productsSection" id="formen">
      <p className="sectionLabel">Formen &amp; Preise</p>
      <h2>Unsere Formen im Überblick.</h2>
      <p className="productsIntro">
        Wie auf der ursprünglichen Website findet ihr hier wieder alle Formen,
        Größen und Preise übersichtlich untereinander.
      </p>

      <div className="originalProductGrid">
        {products.map((product) => (
          <article className="originalProductCard" key={product.name}>
            <div className={`shapeVisual shape-${product.shape}`} aria-hidden="true">
              {product.shape === "date" ? <span>14.06.</span> : null}
            </div>

            <div className="productInfo">
              <h3>{product.name}</h3>
              <p>{product.description}</p>

              <ul>
                {product.prices.map((price) => (
                  <li key={price}>{price}</li>
                ))}
              </ul>

              <a href="#kontakt">Diese Form anfragen →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
