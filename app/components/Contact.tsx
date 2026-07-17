"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const subject = encodeURIComponent("Terminanfrage Perkiscreation");
    const body = encodeURIComponent(
      [
        `Name: ${form.get("name")}`,
        `E-Mail: ${form.get("email")}`,
        `Adresse: ${form.get("address")}`,
        `Hochzeitsdatum: ${form.get("date")}`,
        `Wunschprodukt: ${form.get("product")}`,
        "",
        `Nachricht: ${form.get("notes")}`,
      ].join("\n")
    );

    window.location.href =
      `mailto:Perkiscreation@gmail.com?subject=${subject}&body=${body}`;

    setMessage(
      "Dein E-Mail-Programm wird geöffnet. Prüfe die Angaben und sende die E-Mail anschließend ab."
    );
  }

  return (
    <section className="contact" id="kontakt">
      <div className="contactText">
        <p className="eyebrow">Termin anfragen</p>
        <h2>Wir sind für euch da.</h2>
        <p>
          Erzähle uns von eurem Hochzeitstag, deinem Brautstrauß und deinen Wünschen. Gemeinsam finden wir die passende Form für dein persönliches Erinnerungsstück.
        </p>
        <a href="mailto:Perkiscreation@gmail.com">Perkiscreation@gmail.com</a>
        <a href="https://www.instagram.com/perkiscreationnn/" target="_blank" rel="noreferrer">Instagram: @perkiscreationnn</a>
      </div>

      <form className="contactForm" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" required />
        </label>

        <label>
          E-Mail
          <input name="email" type="email" required />
        </label>

        <label className="full">
          Adresse
          <input
            name="address"
            type="text"
            placeholder="Straße, Hausnummer, PLZ und Ort"
          />
        </label>

        <label>
          Hochzeitsdatum
          <input name="date" type="date" />
        </label>

        <label>
          Wunschprodukt
          <select name="product" defaultValue="">
            <option value="" disabled>Bitte auswählen</option>
            <option>Ich bin mir noch nicht sicher</option>
            <option>Hexagon S – 15 cm – 210 €</option>
            <option>Hexagon M – 20 cm – 270 €</option>
            <option>Hexagon L – 24 cm – 320 €</option>
            <option>Bogen S – 13 × 7 cm – 190 €</option>
            <option>Bogen M – 16 × 12 cm – 210 €</option>
            <option>Bogen L – 21 × 16 cm – 270 €</option>
            <option>Herz – 20 cm – 270 €</option>
            <option>Quadrat – 20 × 20 cm – 320 €</option>
            <option>Individuelles Datum – nach Wunsch – 120 €</option>
          </select>
        </label>

        <label className="full">
          Nachricht
          <textarea name="notes" rows={6} />
        </label>

        <button className="button full" type="submit">
          Anfrage vorbereiten
        </button>

        {message && <p className="formMessage full">{message}</p>}
      </form>
    </section>
  );
}
