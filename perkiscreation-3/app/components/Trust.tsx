const cards = [
  {
    icon: "♡",
    title: "Handgefertigt",
    text: "Jedes Stück wird mit viel Geduld, Feingefühl und Liebe zum Detail gefertigt.",
  },
  {
    icon: "❀",
    title: "Echte Blüten",
    text: "Wir arbeiten ausschließlich mit den echten Blumen eures Brautstraußes.",
  },
  {
    icon: "✦",
    title: "Ein Unikat",
    text: "Keine zwei Erinnerungsstücke sind gleich – genau wie eure Geschichte.",
  },
];

export default function Trust() {
  return (
    <section className="section" id="warum">
      <div className="sectionHeading">
        <p className="eyebrow">Warum Perkiscreation</p>
        <h2>Drei Gründe, die für immer bleiben.</h2>
      </div>

      <div className="cardGrid">
        {cards.map((card) => (
          <article className="trustCard" key={card.title}>
            <span className="iconCircle">{card.icon}</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
