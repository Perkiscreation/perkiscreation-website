const products = [
  {
    name: "Hexagon",
    shape: "hexagon",
    sizes: [
      ["S", "15 cm", "210 €"],
      ["M", "20 cm", "270 €"],
      ["L", "24 cm", "320 €"],
    ],
  },
  {
    name: "Bogen",
    shape: "arch",
    sizes: [
      ["S", "13 × 7 cm", "190 €"],
      ["M", "16 × 12 cm", "210 €"],
      ["L", "21 × 16 cm", "270 €"],
    ],
  },
  {
    name: "Herz",
    shape: "heart",
    sizes: [["Eine Größe", "20 cm", "270 €"]],
  },
  {
    name: "Quadrat",
    shape: "square",
    sizes: [["Eine Größe", "20 × 20 cm", "320 €"]],
  },
  {
    name: "Individuelles Datum",
    shape: "date",
    sizes: [["Individuell", "nach Wunsch", "120 €"]],
  },
];

function Shape({ type }: { type: string }) {
  return (
    <svg className="shape" viewBox="0 0 240 240" aria-hidden="true">
      {type === "hexagon" && (
        <polygon points="120,24 198,70 198,170 120,216 42,170 42,70" />
      )}
      {type === "arch" && (
        <path d="M48 210V112C48 56 78 28 120 28C162 28 192 56 192 112V210Z" />
      )}
      {type === "heart" && (
        <path d="M120 210C95 185 39 143 39 89C39 54 62 32 91 32C106 32 118 40 120 53C122 40 135 32 150 32C179 32 201 54 201 89C201 143 145 185 120 210Z" />
      )}
      {type === "square" && <rect x="42" y="42" width="156" height="156" />}
      {type === "date" && (
        <>
          <text x="120" y="126" textAnchor="middle" className="dateText">25</text>
          <path d="M72 164C96 150 144 150 168 164" />
        </>
      )}
    </svg>
  );
}

export default function Products() {
  return (
    <section className="products" id="produkte">
      <div className="sectionHeading">
        <p className="eyebrow">Formen, Auswahl und Preise</p>
        <h2>Wähle deine Lieblingsform.</h2>
        <p>
          Bis eigene Produktfotos vorhanden sind, zeigen wir die Formen
          bewusst als schlichte, filigrane Konturen.
        </p>
      </div>

      <div className="productGrid">
        {products.map((product) => (
          <article className="productCard" key={product.name}>
            <div className="shapeBox"><Shape type={product.shape} /></div>
            <div className="productInfo">
              <h3>{product.name}</h3>
              <div className="priceList">
                {product.sizes.map(([label, size, price]) => (
                  <div className="priceRow" key={`${product.name}-${label}`}>
                    <div>
                      <strong>{label}</strong>
                      <span>{size}</span>
                    </div>
                    <b>{price}</b>
                  </div>
                ))}
              </div>
              <a className="productLink" href="#kontakt">Termin anfragen</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
