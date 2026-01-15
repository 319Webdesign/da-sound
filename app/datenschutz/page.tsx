'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RentalCart from '@/components/RentalCart';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, Mail, Phone } from 'lucide-react';

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full max-w-full">
      {/* Header / Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 via-blue-50/50 to-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Datenschutzerklärung
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Informationen zum Schutz Ihrer persönlichen Daten
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-8"
          >
            {/* Einleitung */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-primary" />
                    Allgemeine Hinweise
                  </h3>
                  <p className="leading-relaxed">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Server className="w-5 h-5 text-primary" />
                    Datenerfassung auf dieser Website
                  </h3>
                  <p className="leading-relaxed mb-2">
                    <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
                  </p>
                  <p className="leading-relaxed mb-4">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                  </p>
                  <p className="leading-relaxed mb-2">
                    <strong>Wie erfassen wir Ihre Daten?</strong>
                  </p>
                  <p className="leading-relaxed mb-4">
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                  </p>
                  <p className="leading-relaxed mb-2">
                    <strong>Wofür nutzen wir Ihre Daten?</strong>
                  </p>
                  <p className="leading-relaxed">
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                  </p>
                </div>
              </div>
            </div>

            {/* Verantwortliche Stelle */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                2. Verantwortliche Stelle
              </h2>
              <div className="space-y-3 text-gray-700">
                <p className="leading-relaxed">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <p className="font-semibold text-gray-900">da-sound Veranstaltungstechnik</p>
                  <p>Maik Schmidt</p>
                  <p>Wormser Str. 23</p>
                  <p>64319 Pfungstadt</p>
                  <div className="pt-2 space-y-1">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <a href="tel:015735451130" className="hover:text-primary transition-colors">
                        0157-35451130
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <a href="mailto:info@da-sound.de" className="hover:text-primary transition-colors">
                        info@da-sound.de
                      </a>
                    </div>
                  </div>
                </div>
                <p className="leading-relaxed">
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                </p>
              </div>
            </div>

            {/* Speicherdauer */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                3. Speicherdauer
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
              </p>
            </div>

            {/* Kontaktformular */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                4. Kontaktformular
              </h2>
              <div className="space-y-3 text-gray-700">
                <p className="leading-relaxed">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="leading-relaxed">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
                </p>
                <p className="leading-relaxed">
                  Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                </p>
              </div>
            </div>

            {/* Ihre Rechte */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-primary" />
                5. Ihre Rechte
              </h2>
              <div className="space-y-3 text-gray-700">
                <p className="leading-relaxed">
                  Sie haben jederzeit das Recht, Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten. Außerdem haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung, soweit Ihnen dies gesetzlich zusteht.
                </p>
                <p className="leading-relaxed">
                  Weiterhin steht Ihnen ein Widerspruchsrecht gegen die Verarbeitung im Rahmen der gesetzlichen Bestimmungen zu. Ein Recht auf Datenübertragbarkeit besteht ebenfalls im Rahmen der datenschutzrechtlichen Bestimmungen.
                </p>
                <p className="leading-relaxed">
                  Sie haben zudem das Recht, bei einer zuständigen Datenschutzaufsichtsbehörde Beschwerde gegen die Verarbeitung Ihrer personenbezogenen Daten durch uns einzulegen.
                </p>
              </div>
            </div>

            {/* SSL- bzw. TLS-Verschlüsselung */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                6. SSL- bzw. TLS-Verschlüsselung
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </div>

            {/* Stand der Datenschutzerklärung */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <RentalCart />
    </div>
  );
}
