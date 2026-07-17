export default function Reservation() {
  return (
    <section className="reservation" id="reservierung">
      <p className="eyebrow">Am Ende der Seite kannst du deinen Platz sichern</p>
      <h2>Die Reservierung: 50,00 €</h2>

      <div className="reservationSteps">
        <article>
          <span>01</span>
          <h3>Unverbindliche Anfrage</h3>
          <p>
            Frage deinen Wunschtermin über das Kontaktformular oder Instagram
            an. Da jedes Erinnerungsstück mehrere Wochen Handarbeit benötigt,
            sind unsere Kapazitäten begrenzt.
          </p>
        </article>

        <article>
          <span>02</span>
          <h3>Reservierung deines Platzes</h3>
          <p>
            Nach deiner Anfrage erhältst du eine Rechnung über die
            Reservierungsgebühr von 50,00 €. Sobald diese eingegangen ist,
            ist dein Termin verbindlich gebucht.
          </p>
        </article>

        <article>
          <span>03</span>
          <h3>Verrechnung & Sicherheit</h3>
          <p>
            Die Reservierungsgebühr wird bei der finalen Abrechnung deines
            ausgewählten Erinnerungsstücks zu 100 % angerechnet.
          </p>
        </article>
      </div>

      <p className="reservationHint">
        Tipp: Du musst dich bei der Anfrage noch nicht endgültig für eine Form entscheiden.
      </p>
    </section>
  );
}
