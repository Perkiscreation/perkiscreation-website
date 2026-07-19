export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>PERKISCREATION</strong>
        <p>Erinnerungen für die Ewigkeit.</p>
      </div>
      <div className="footerLinks">
        <a href="#">Instagram</a>
        <a href="#">Impressum</a>
        <a href="#">Datenschutz</a>
      </div>
      <small>© {new Date().getFullYear()} Perkiscreation</small>
    </footer>
  );
}
