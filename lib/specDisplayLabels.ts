/**
 * Mapping von internen Spec-Labels (teilweise Icon-Namen) zu fachlich korrekten
 * deutschen Begriffen für die Anzeige in Technischen Details und Quick-Facts.
 * Die Icons (Lucide) bleiben unverändert; nur der angezeigte Text wird ersetzt.
 */
const DISPLAY_LABEL_MAP: Record<string, string> = {
  // Helligkeit / Lichtleistung (Beamer, Displays)
  Sun: 'Helligkeit',
  Brightness: 'Helligkeit',
  // Abstrahlwinkel (Lichteffekte, Spots)
  Maximize: 'Abstrahlwinkel',
  Expand: 'Abstrahlwinkel',
  // Leistungsaufnahme / Anschlusswert (Strom, Watt)
  Zap: 'Leistungsaufnahme',
  Bolt: 'Leistungsaufnahme',
  // Modi / Steuerung (DMX, Auto)
  Layers: 'Modi',
  // Kühlung
  Wind: 'Kühlung',
  // Weitere typische englische/Icon-Labels aus der Datenstruktur
  Contrast: 'Kontrast',
  Weight: 'Gewicht',
  'Hdmi-port': 'HDMI / Anschlüsse',
  Projector: 'Projektor / Typ',
  HD: 'Auflösung',
  Hd: 'Auflösung',
  // Lichteffekte: Steuerung (Soundsteuerung/Music/DMX zusammengefasst)
  Music: 'Steuerung',
  Soundsteuerung: 'Steuerung',
  DMX: 'Steuerung',
  // Indoor/Outdoor: Verwendung (Wert bleibt z. B. „Indoor“, „Ja“)
  Indoor: 'Verwendung',
  Outdoor: 'Verwendung',
  Inputs: 'Eingänge',
  Outputs: 'Ausgänge',
};

/**
 * Gibt den fachlich korrekten Anzeige-Text für ein Spec-Label zurück.
 * Wenn kein Mapping existiert, wird das Original-Label zurückgegeben.
 * Icons werden von den Komponenten weiterhin anhand des originalen spec.label gewählt.
 */
export function getSpecDisplayLabel(label: string): string {
  if (!label || typeof label !== 'string') return label;
  const trimmed = label.trim();
  return DISPLAY_LABEL_MAP[trimmed] ?? trimmed;
}
