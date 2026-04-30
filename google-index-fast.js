/**
 * Google Indexing API – URLs als URL_UPDATED einreichen
 * Verwendet service-account.json für die Authentifizierung.
 *
 * Voraussetzung: Die Domain muss in der Google Search Console verifiziert sein
 * und die E-Mail des Service-Accounts muss als Eigentümer hinzugefügt werden.
 *
 * Ausführung: node google-index-fast.js
 */

const { google } = require('googleapis');
const path = require('path');

// Liste der URLs aus deiner CSV (alle indexierbaren Seiten)
const URLS = [
  'https://www.da-sound.de/',
  'https://www.da-sound.de/kategorien/party-sets-ton-licht',
  'https://www.da-sound.de/ueber-uns',
  'https://www.da-sound.de/booking',
  'https://www.da-sound.de/liefergebiet',
  'https://www.da-sound.de/kategorien/moving-heads',
  'https://www.da-sound.de/datenschutz',
  'https://www.da-sound.de/kategorien/mischpulte-mikrofone',
  'https://www.da-sound.de/kategorien/statische-scheinwerfer-led-spots',
  'https://www.da-sound.de/kategorien/nebelmaschinen-buehneneffekte',
  'https://www.da-sound.de/kontakt',
  'https://www.da-sound.de/kategorien/stromerzeuger',
  'https://www.da-sound.de/produkte/speech-100-konferenzsystem',
  'https://www.da-sound.de/impressum',
  'https://www.da-sound.de/kategorien/buehlenpodeste-traversen',
  'https://www.da-sound.de/kategorien/medien-konferenztechnik',
  'https://www.da-sound.de/agb',
  'https://www.da-sound.de/kategorien/pa-anlagen',
  'https://www.da-sound.de/produkte/party-set-small',
  'https://www.da-sound.de/produkte/party-set-white',
  'https://www.da-sound.de/produkte/party-set-xlarge',
  'https://www.da-sound.de/produkte/party-set-medium',
  'https://www.da-sound.de/produkte/party-set-large',
  'https://www.da-sound.de/produkte/led-wasser-projektionseffekt',
  'https://www.da-sound.de/produkte/led-triple-flower',
  'https://www.da-sound.de/produkte/led-derby-effekt-mit-strobe',
  'https://www.da-sound.de/produkte/2000mw-diodenlaser-showlaser',
  'https://www.da-sound.de/produkte/mirror-ball-saturn-led-effekt',
  'https://www.da-sound.de/produkte/50cm-spiegelkugel-set',
  'https://www.da-sound.de/produkte/led-moving-head-beam-200w',
  'https://www.da-sound.de/produkte/led-moving-head-wash-7x40w',
  'https://www.da-sound.de/produkte/jb-spyder-show-pattern-laser',
  'https://www.da-sound.de/produkte/mikrofon-set-drums',
  'https://www.da-sound.de/produkte/yamaha-tio-1608d',
  'https://www.da-sound.de/produkte/allen-heath-sq5',
  'https://www.da-sound.de/produkte/allen-heath-ar2412',
  'https://www.da-sound.de/produkte/mackie-analog-mixer',
  'https://www.da-sound.de/produkte/pa-saeule-bluetooth',
  'https://www.da-sound.de/produkte/shure-mikrofon-set-sm58-sm57',
  'https://www.da-sound.de/produkte/profi-funkmikrofon-shure-slxd2',
  'https://www.da-sound.de/produkte/upgrade-kit-mixer-mikrofon',
  'https://www.da-sound.de/produkte/yamaha-dm3',
  'https://www.da-sound.de/produkte/akku-lautsprecher-maxi',
  'https://www.da-sound.de/produkte/pa-set-large',
  'https://www.da-sound.de/produkte/aktivlautsprecher-bluetooth',
  'https://www.da-sound.de/produkte/pa-set-outdoor',
  'https://www.da-sound.de/produkte/sub-sat-set-bluetooth',
  'https://www.da-sound.de/produkte/pa-set-xlarge',
  'https://www.da-sound.de/produkte/profi-pa-line-array-event-26a',
  'https://www.da-sound.de/produkte/akku-lautsprecher-compact',
  'https://www.da-sound.de/produkte/pa-set-medium',
  'https://www.da-sound.de/produkte/pa-set-small',
  'https://www.da-sound.de/produkte/pa-set-premium-mini',
  'https://www.da-sound.de/produkte/upgrade-kit-wireless',
  'https://www.da-sound.de/produkte/pa-set-premium',
  'https://www.da-sound.de/produkte/pro-av-mixer',
  'https://www.da-sound.de/produkte/stativ-projektor-laptop',
  'https://www.da-sound.de/produkte/leinwand-projection-screen-2m',
  'https://www.da-sound.de/produkte/wireless-hdmi-funk-set',
  'https://www.da-sound.de/produkte/lcd-dlp-beamer',
  'https://www.da-sound.de/produkte/laser-dlp-beamer-pro',
  'https://www.da-sound.de/produkte/leinwand-projection-screen-4m',
  'https://www.da-sound.de/produkte/laser-dlp-beamer',
  'https://www.da-sound.de/produkte/4k-signature-display-65zoll',
  'https://www.da-sound.de/produkte/leinwand-projection-screen-3m',
  'https://www.da-sound.de/produkte/4k-laser-dlp-beamer',
  'https://www.da-sound.de/produkte/faltpavillion',
  'https://www.da-sound.de/produkte/leuchtenstativ-24630',
  'https://www.da-sound.de/produkte/rednerpodest-drumriser',
  'https://www.da-sound.de/produkte/traversenlift-150kg',
  'https://www.da-sound.de/produkte/mikrofonstativ-21090',
  'https://www.da-sound.de/produkte/lautsprecherstativ-21450',
  'https://www.da-sound.de/produkte/buehne-4x3m',
  'https://www.da-sound.de/produkte/alutruss-trilock-e-gl33',
  'https://www.da-sound.de/produkte/inverter-stromerzeuger-2kw',
  'https://www.da-sound.de/produkte/inverter-stromerzeuger-3-2kw',
  'https://www.da-sound.de/produkte/inverter-stromerzeuger-6kw',
  'https://www.da-sound.de/produkte/kaltfunkenmaschine-cold-spark',
  'https://www.da-sound.de/produkte/vertikal-nebelmaschine-spray-fogger',
  'https://www.da-sound.de/produkte/nebelmaschine-1500w',
  'https://www.da-sound.de/produkte/hazer',
  'https://www.da-sound.de/produkte/bodennebelmaschine',
  'https://www.da-sound.de/produkte/party-nebelmaschine-800w',
  'https://www.da-sound.de/produkte/led-effekt-bar-mit-scannern',
  'https://www.da-sound.de/produkte/led-verfolgerspot-follow-spot',
  'https://www.da-sound.de/produkte/led-pro-lichtbar-rgb',
  'https://www.da-sound.de/produkte/akku-spot-indoor-rgb',
  'https://www.da-sound.de/produkte/party-lichtset-kompakt',
  'https://www.da-sound.de/produkte/led-pll-panel-power-strobe',
  'https://www.da-sound.de/produkte/led-lichterketten-innen-aussen',
  'https://www.da-sound.de/produkte/theatre-spot-led',
  'https://www.da-sound.de/produkte/akku-spot-outdoor-rgbw-ip65',
  'https://www.da-sound.de/produkte/high-power-led-effekt-bar-mit-laser',
  'https://www.da-sound.de/produkte/theatre-spot-rgb',
  'https://www.da-sound.de/produkte/led-outdoor-fluter-ip65',
  'https://www.da-sound.de/produkte/dynacord-cms-1600-3',
  'https://www.da-sound.de/produkte/pioneer-djm-900-nexus',
  'https://www.da-sound.de/produkte/funkmikrofon-sprache-moderation',
];

const KEY_FILE = path.join(__dirname, 'service-account.json');

async function main() {
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const indexing = google.indexing({ version: 'v3', auth });

  console.log(`Starte Indexing für ${URLS.length} URLs (URL_UPDATED)...\n`);

  let success = 0;
  let failed = 0;

  for (let i = 0; i < URLS.length; i++) {
    const url = URLS[i];
    try {
      await indexing.urlNotifications.publish({
        requestBody: {
          url,
          type: 'URL_UPDATED',
        },
      });
      success++;
      console.log(`[${i + 1}/${URLS.length}] OK: ${url}`);
    } catch (err) {
      failed++;
      const msg = err.message || JSON.stringify(err.response?.data || err);
      console.error(`[${i + 1}/${URLS.length}] Fehler: ${url}`);
      console.error(`  → ${msg}\n`);
    }

    // Kurze Pause, um Rate-Limits zu schonen (Indexing API: max. 200/Tag, empfohlen Abstand)
    if (i < URLS.length - 1) {
      await new Promise((r) => setTimeout(r, 500));
    }
  }

  console.log(`\nFertig: ${success} erfolgreich, ${failed} Fehler.`);
}

main().catch((err) => {
  console.error('Skript-Fehler:', err);
  process.exit(1);
});
