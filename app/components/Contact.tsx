"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const subject = encodeURIComponent(
      "Terminanfrage Brautstrauß-Konservierung"
    );

    const body = encodeURIComponent(
      [
        "Neue Terminanfrage über perkiscreation-wedding.de",
        "",
        `Name: ${form.get("name")}`,
        `E-Mail: ${form.get("email")}`,
        `Telefonnummer: ${form.get("phone")}`,
        "",
        "Anschrift:",
        `${form.get("street")}`,
        `${form.get("postalCode")} ${form.get("city")}`,
        "",
        `Hochzeitsdatum: ${form.get("date")}`,
        `Wunschprodukt: ${form.get("product")}`,
        `Personalisierung gewünscht: ${form.get("personalization")}`,
        "",
        "Nachricht:",
        `${form.get("message") || "Keine zusätzliche Nachricht"}`,
        "",
        "Reservierungsgebühr von 50 € zur Kenntnis genommen: Ja",
        "Datenschutzerklärung zur Kenntnis genommen: Ja",
      ].join("\n")
    );

    window.location.href =
      `mailto:perkiscreation@gmail.com?subject=${subject}&body=${body}`;

    setStatus(
      "Euer E-Mail-Programm wird geöffnet. Prüft bitte die Angaben und sendet die vorbereitete Nachricht anschließend ab."
    );
  }

  return (
    <section className="contact" id="kontakt">
      <div className="contactCopy">
        <p className="eyebrow">Termin anfragen</p>
        <h2>Wir sind für euch da.</h2>
        <p>
          Teilt uns euren Hochzeitstermin und eure Wünsche mit. Wir prüfen die
          Verfügbarkeit und melden uns persönlich bei euch.
        </p>
        <a href="mailto:perkiscreation@gmail.com">
          perkiscreation@gmail.com
        </a>
        <a
          href="https://www.instagram.com/perkiscreationnn/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram: @perkiscreationnn
        </a>
      </div>

      <form className="contactForm" onSubmit={submit}>
        <label>
          Vor- und Nachname
          <input name="name" type="text" autoComplete="name" required />
        </label>

        <label>
          E-Mail-Adresse
          <input name="email" type="email" autoComplete="email" required />
        </label>

        <label>
          Telefonnummer
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>

        <label>
          Straße und Hausnummer
          <input
            name="street"
            type="text"
            autoComplete="street-address"
            required
          />
        </label>

        <label>
          PLZ
          <input
            name="postalCode"
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            required
          />
        </label>

        <label>
          Ort
          <input
            name="city"
            type="text"
            autoComplete="address-level2"
            required
          />
        </label>

        <label>
          Hochzeitsdatum
          <input name="date" type="date" required />
        </label>

        <label>
          Wunschprodukt
          <select name="product" defaultValue="" required>
            <option value="" disabled>Bitte auswählen</option>
            <option>Ich bin mir noch nicht sicher</option>
            <option>Hexagon S · 15 cm · 210 €</option>
            <option>Hexagon M · 20 cm · 270 €</option>
            <option>Hexagon L · 24 cm · 320 €</option>
            <option>Bogen S · 13 × 7 cm · 190 €</option>
            <option>Bogen M · 16 × 12 cm · 210 €</option>
            <option>Bogen L · 21 × 16 cm · 270 €</option>
            <option>Herz · 20 cm · 270 €</option>
            <option>Quadrat S · 15 × 15 cm · 210 €</option>
            <option>Quadrat M · 20 × 20 cm · 270 €</option>
            <option>Individuelles Datum · ab 120 €</option>
          </select>
        </label>

        <label className="full">
          Möchtet ihr eine Personalisierung für insgesamt 30 €?
          <select name="personalization" defaultValue="" required>
            <option value="" disabled>Bitte auswählen</option>
            <option>Nein</option>
            <option>Ja</option>
          </select>
          <span className="fieldHint">
            Namen, Datum und Farbe der Schrift stimmen wir später gemeinsam
            mit euch ab, sobald euer Brautstrauß bei uns angekommen ist.
          </span>
        </label>

        <label className="full">
          Nachricht oder besondere Wünsche
          <textarea
            name="message"
            rows={6}
            placeholder="Erzählt uns gerne mehr über euren Brautstrauß oder eure Wünsche."
          />
        </label>

        <label className="consentRow full">
          <input
            name="reservationFee"
            type="checkbox"
            value="Ja"
            required
          />
          <span>
            Mir ist bekannt, dass nach der Auftragsbestätigung eine
            Reservierungsgebühr von 50 € fällig wird. Sie wird vollständig auf
            den Endpreis angerechnet.
          </span>
        </label>

        <label className="consentRow full">
          <input name="privacy" type="checkbox" value="Ja" required />
          <span>
            Ich habe die{" "}
            <a href="/datenschutz" target="_blank" rel="noreferrer">
              Datenschutzerklärung
            </a>{" "}
            zur Kenntnis genommen.
          </span>
        </label>

        <button className="primaryButton full" type="submit">
          Termin anfragen
        </button>

        {status && <p className="formStatus full">{status}</p>}
      </form>
    </section>
  );
}
