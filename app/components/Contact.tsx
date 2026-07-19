"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const subject = encodeURIComponent("Terminanfrage Perkiscreation");
    const body = encodeURIComponent(
      [
        `Name: ${form.get("name")}`,
        `E-Mail: ${form.get("email")}`,
        `Hochzeitsdatum: ${form.get("date")}`,
        `Wunschprodukt: ${form.get("product")}`,
        "",
        `Nachricht: ${form.get("message")}`,
      ].join("\n")
    );

    window.location.href =
      `mailto:Perkiscreation@gmail.com?subject=${subject}&body=${body}`;

    setStatus(
      "Euer E-Mail-Programm wird geöffnet. Prüft die Angaben und sendet die Nachricht anschließend ab."
    );
  }

  return (
    <section className="contact" id="kontakt">
      <div className="contactCopy">
        <p className="eyebrow">Termin anfragen</p>
        <h2>Wir sind für euch da.</h2>
        <p>
          Erzählt uns von eurem Hochzeitstag, eurem Brautstrauß und euren
          Wünschen. Gemeinsam finden wir die passende Form.
        </p>

        <a href="mailto:Perkiscreation@gmail.com">Perkiscreation@gmail.com</a>
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
          Name
          <input name="name" required />
        </label>

        <label>
          E-Mail
          <input name="email" type="email" required />
        </label>

        <label>
          Hochzeitsdatum
          <input name="date" type="date" required />
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
            <option>Individuelles Datum – 120 €</option>
          </select>
        </label>

        <label className="full">
          Nachricht
          <textarea name="message" rows={6} />
        </label>

        <button className="primaryButton full" type="submit">
          Termin anfragen
        </button>

        {status && <p className="formStatus full">{status}</p>}
      </form>
    </section>
  );
}
