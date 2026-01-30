# da-sound Veranstaltungstechnik

Moderne Website und Management-Dashboard für da-sound Veranstaltungstechnik.

## Features

### Landingpage (`/`)
- ✨ Modernes Light Mode Design
- 📱 Optimiert für Mobile (rasend schnelles Laden)
- 🎨 Professionelles Navy-Blau & Petrol Farbschema
- 🎯 Hero-Bereich mit dynamischem Highlight-Text
- 📦 Miet-Kategorien: Tontechnik, Lichttechnik, Event-Zubehör
- 💰 Preis-Vorschau mit Top-Mietartikeln
- 📞 Kontakt & Öffnungszeiten mit WhatsApp-Button

### Dashboard (`/dashboard`)
- 📊 Management Center für Inhalte
- 🎨 Passendes Light Mode Design
- 📝 Verwaltung von Startseiten-Highlights
- 💰 Mietpreise & Portfolio-Verwaltung
- ⏰ Kontakt & Öffnungszeiten-Verwaltung
- 🚀 Live-Schalten Funktion mit visueller Rückmeldung

## Datenstruktur

Die Daten werden zentral in `lib/data.ts` verwaltet. Diese Datei simuliert die Datenverbindung zwischen Dashboard und Landingpage.

**So funktioniert's:**
1. Ändern Sie Werte in `lib/data.ts`
2. Die Landingpage zeigt diese sofort an
3. Später kann dies durch eine API/Datenbank ersetzt werden

**Wichtige Einstellungen:**
- `whatsappNumber`: WhatsApp-Nummer im Format `+491234567890` anpassen

### Kontakt- und Buchungsformulare (IONOS E-Mail)

Die Formulare auf **/kontakt** und **/booking** senden E-Mails über Ihren IONOS-Account. In der `.env` müssen gesetzt sein:

- `SMTP_HOST` – z. B. `smtp.ionos.com` (Standard)
- `SMTP_PORT` – `587` (STARTTLS) oder `465` (SSL)
- `SMTP_USER` – Ihre vollständige IONOS E-Mail-Adresse (z. B. `info@da-sound.de`)
- `SMTP_PASS` – Passwort des IONOS E-Mail-Postfachs
- `CONTACT_EMAIL` – (optional) Empfängeradresse für Anfragen; falls nicht gesetzt, wird `SMTP_USER` verwendet

Vorlage: `.env.example` in `.env` kopieren und die Platzhalter mit echten Werten ersetzen.

## Installation

```bash
npm install
```

## Entwicklung

```bash
npm run dev
```

- Landingpage: [http://localhost:3000](http://localhost:3000)
- Dashboard: [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

## Build

```bash
npm run build
npm start
```

## Mobile Performance

- ⚡ Optimiertes Font Loading
- 🎯 Tailwind CSS für minimale Bundle-Größe
- 📱 Touch-optimierte Buttons und Interaktionen
- 🚀 ISR (Incremental Static Regeneration) für schnelle Ladezeiten
# da-sound
