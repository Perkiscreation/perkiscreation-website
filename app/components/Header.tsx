"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <div className="announcement">Sichere dir deinen Platz für 2026 &amp; 2027</div>

      <header className="header">
        <a href="#start" className="brand" onClick={closeMenu}>
          <strong>PERKISCREATION</strong>
          <span>Erinnerung für die Ewigkeit</span>
        </a>

        <nav className="nav" aria-label="Hauptnavigation">
          <a href="#warum">Warum Perkiscreation</a>
          <a href="#ablauf">Ablauf</a>
          <a href="#produkte">Formen &amp; Preise</a>
          <a href="#wissen">Gut zu wissen</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <a className="headerCta" href="#kontakt">Platz reservieren</a>

        <button
          className="menuButton"
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <nav className={`mobileNav ${open ? "mobileNavOpen" : ""}`} aria-label="Mobile Navigation">
        <a href="#warum" onClick={closeMenu}>Warum Perkiscreation</a>
        <a href="#ablauf" onClick={closeMenu}>Ablauf</a>
        <a href="#produkte" onClick={closeMenu}>Formen &amp; Preise</a>
        <a href="#wissen" onClick={closeMenu}>Gut zu wissen</a>
        <a href="#kontakt" onClick={closeMenu}>Kontakt</a>
      </nav>
    </>
  );
}
