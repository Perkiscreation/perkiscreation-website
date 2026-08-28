import LegalTextPage from "../components/LegalTextPage";

const blocks = [
  {
    "type": "h2",
    "text": "A. Widerrufsbelehrung"
  },
  {
    "type": "h2",
    "text": "Einleitung"
  },
  {
    "type": "p",
    "text": "Verbrauchern steht ein Widerrufsrecht nach folgender Maßgabe zu, wobei Verbraucher jede natürliche Person ist, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können:"
  },
  {
    "type": "h2",
    "text": "Widerrufsrecht"
  },
  {
    "type": "p",
    "text": "Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte Ware in Besitz genommen haben bzw. hat. Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Claudia Perk, Am Winterhafen 1B, 28217 Bremen, Deutschland, Tel.: +49, E-Mail: perkiscreation@gmail.com) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist. Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden."
  },
  {
    "type": "h2",
    "text": "Folgen des Widerrufs"
  },
  {
    "type": "p",
    "text": "Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet. Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist. Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns"
  },
  {
    "type": "p",
    "text": "zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden. Sie tragen die unmittelbaren Kosten der Rücksendung der Waren. Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist."
  },
  {
    "type": "h2",
    "text": "Ausschluss bzw. vorzeitiges Erlöschen des Widerrufsrechts"
  },
  {
    "type": "p",
    "text": "Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von Waren, die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind."
  },
  {
    "type": "h2",
    "text": "B. Widerrufsformular"
  },
  {
    "type": "p",
    "text": "Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden es zurück. An Claudia Perk Am Winterhafen 1B 28217 Bremen Deutschland E-Mail: perkiscreation@gmail.com Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*) / die Erbringung der folgenden Dienstleistung (*) _______________________________________________________ _______________________________________________________ Bestellt am (*) ____________ / erhalten am (*) __________________ ________________________________________________________ Name des/der Verbraucher(s) ________________________________________________________ Anschrift des/der Verbraucher(s) ________________________________________________________ Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier) _________________________ Datum (*) Unzutreffendes streichen"
  }
] as const;

export default function Page() {
  return <LegalTextPage title="Widerrufsbelehrung & Widerrufsformular" blocks={blocks as any} />;
}
