import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung – MADMA',
  description:
    'Datenschutzerklärung nach DSGVO für die Website von MADMA – Mario Dohr, Saarbrücken.',
};

export default function DatenschutzPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/madma-logo.png"
              alt="MADMA Logo"
              width={140}
              height={40}
              className="h-9 w-auto"
              priority
            />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
          Datenschutzerklärung
        </h1>
        <div className="w-20 h-1 bg-blue-600 mb-10" />

        <section className="space-y-10 text-slate-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              1. Verantwortlicher
            </h2>
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer
              nationaler Datenschutzgesetze der Mitgliedsstaaten sowie sonstiger
              datenschutzrechtlicher Bestimmungen ist:
            </p>
            <p className="mt-3">
              Mario Dohr<br />
              MADMA<br />
              Rastbachweg 20<br />
              66113 Saarbrücken<br />
              Deutschland
            </p>
            <p className="mt-3">
              Telefon: <a href="tel:0681754545" className="text-blue-600 hover:text-blue-700">0681-754545</a><br />
              E-Mail: <a href="mailto:m.dohr@madma.de" className="text-blue-600 hover:text-blue-700">m.dohr@madma.de</a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              2. Allgemeine Hinweise
            </h2>
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="mt-3">
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden
              können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und
              wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              3. Zugriffsdaten und Hosting
            </h2>
            <p>
              Beim Aufruf unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden
              Browser automatisch Informationen an den Server unserer Website gesendet. Diese
              Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende
              Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung
              gespeichert:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
            </ul>
            <p className="mt-3">
              Die genannten Daten werden zur Gewährleistung eines störungsfreien Verbindungsaufbaus,
              zur Gewährleistung einer komfortablen Nutzung unserer Website, zur Auswertung der
              Systemsicherheit und -stabilität sowie zu weiteren administrativen Zwecken verarbeitet.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus
              den oben aufgeführten Zwecken der Datenerhebung.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              4. Kontaktaufnahme
            </h2>
            <p>
              Wenn Sie uns per Kontaktformular, E-Mail oder Telefon kontaktieren, werden Ihre
              Angaben zur Bearbeitung der Anfrage sowie für den Fall, dass Anschlussfragen
              entstehen, bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
              weiter.
            </p>
            <p className="mt-3">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
              Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
              beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven
              Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) bzw. auf
              Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
            </p>
            <p className="mt-3">
              Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie
              uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der
              Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen –
              insbesondere Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              5. SSL- bzw. TLS-Verschlüsselung
            </h2>
            <p>
              Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung
              vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
              Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf
              „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              6. Cookies
            </h2>
            <p>
              Unsere Website verwendet ausschließlich technisch notwendige Cookies, sofern
              vorhanden. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden
              und die Ihr Browser speichert. Sie richten keinen Schaden an und dienen dazu, unser
              Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
            </p>
            <p className="mt-3">
              Die Rechtsgrundlage für die Verwendung technisch notwendiger Cookies ist Art. 6 Abs. 1
              lit. f DSGVO. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
              Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von
              Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen
              der Cookies beim Schließen des Browsers aktivieren.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              7. Ihre Rechte als betroffene Person
            </h2>
            <p>
              Werden Ihre personenbezogenen Daten verarbeitet, sind Sie Betroffener im Sinne der
              DSGVO und es stehen Ihnen die folgenden Rechte gegenüber uns als Verantwortlichem zu:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an die oben genannten
              Kontaktdaten.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              8. Beschwerderecht bei der Aufsichtsbehörde
            </h2>
            <p>
              Sie haben gemäß Art. 77 DSGVO das Recht, sich bei einer Aufsichtsbehörde zu
              beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen
              Daten gegen die DSGVO verstößt. Zuständige Aufsichtsbehörde für uns ist:
            </p>
            <p className="mt-3">
              Unabhängiges Datenschutzzentrum Saarland<br />
              Die Landesbeauftragte für Datenschutz und Informationsfreiheit<br />
              Fritz-Dobisch-Straße 12<br />
              66111 Saarbrücken
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              9. Aktualität und Änderung dieser Datenschutzerklärung
            </h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung unserer
              Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es
              notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle
              Datenschutzerklärung kann jederzeit auf dieser Seite abgerufen werden.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} MADMA – Mario Dohr</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-blue-600 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-blue-600 transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
