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
        <h2>Sichere dir deinen Konservierungsplatz.</h2>
        <p>
          Fülle das Formular aus. Danach öffnet sich dein E-Mail-Programm mit
          deinen Angaben an Perkiscreation@gmail.com.
        </p>
        <a href="mailto:Perkiscreation@gmail.com">Perkiscreation@gmail.com</a>
        <span>Instagram-Link folgt</span>
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

        <label>
          Hochzeitsdatum
          <input name="date" type="date" />
        </label>

        <label>
          Wunschprodukt
          <select name="product" defaultValue="">
            <option value="" disabled>Bitte auswählen</option>
            <option>Hexagon</option>
            <option>Bogen</option>
            <option>Herz</option>
            <option>Quadrat</option>
            <option>Individuelles Datum</option>
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
