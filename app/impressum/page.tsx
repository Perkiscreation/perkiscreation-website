import LegalPage from "../components/LegalPage";

export default function Page() {
  return (
    <LegalPage title="Impressum">
      <p>Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)</p>
      <h2>Anbieterin</h2>
      <p>Perkiscreation<br />Inhaberin: Claudia Perk<br />Am Winterhafen 1B<br />28217 Bremen<br />Deutschland</p>
      <h2>Kontakt</h2>
      <p>E-Mail: <a href="mailto:perkiscreation@gmail.com">perkiscreation@gmail.com</a></p>
      <h2>Umsatzsteuer</h2>
      <p>Aufgrund der Kleinunternehmerregelung gemäß § 19 UStG wird keine Umsatzsteuer ausgewiesen.</p>
      <h2>Verbraucherstreitbeilegung</h2>
      <p>Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
    </LegalPage>
  );
}
