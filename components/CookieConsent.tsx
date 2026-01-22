'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Settings, Cookie } from 'lucide-react';
import Link from 'next/link';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = 'da-sound-cookie-consent';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Prüfe ob bereits eine Entscheidung getroffen wurde
    const savedConsent = localStorage.getItem(STORAGE_KEY);
    if (!savedConsent) {
      let timer: ReturnType<typeof setTimeout> | null = null;
      let observer: PerformanceObserver | null = null;
      let shown = false;

      const scheduleShow = () => {
        if (shown) return;
        shown = true;
        timer = setTimeout(() => {
          setIsVisible(true);
        }, 2000);
      };

      // Zeige 2 Sekunden nach dem First Contentful Paint (FCP)
      if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        try {
          observer = new PerformanceObserver((list) => {
            const entries = list.getEntriesByName('first-contentful-paint');
            if (entries.length > 0) {
              observer?.disconnect();
              scheduleShow();
            }
          });
          observer.observe({ type: 'paint', buffered: true });
        } catch {
          scheduleShow();
        }
      } else {
        scheduleShow();
      }

      return () => {
        if (timer) clearTimeout(timer);
        observer?.disconnect();
      };
    } else {
      // Lade gespeicherte Präferenzen
      try {
        const saved = JSON.parse(savedConsent);
        setPreferences(saved);
        // Aktiviere Google Analytics wenn erlaubt
        if (saved.analytics) {
          loadGoogleAnalytics();
        }
      } catch (e) {
        console.error('Fehler beim Laden der Cookie-Präferenzen:', e);
      }
    }
  }, []);

  const loadGoogleAnalytics = () => {
    // Hier würde Google Analytics geladen werden
    // Für jetzt nur ein Platzhalter
    if (typeof window !== 'undefined') {
      const gtag = (window as any).gtag;
      if (!gtag) {
        console.log('Google Analytics würde hier geladen werden');
      }
    }
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allAccepted);
    loadGoogleAnalytics();
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyEssential: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    savePreferences(onlyEssential);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
    if (preferences.analytics) {
      loadGoogleAnalytics();
    }
    setIsVisible(false);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'essential') return; // Essenzielle Cookies können nicht deaktiviert werden
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="fixed bottom-6 left-6 z-50 max-w-md w-full sm:w-[420px]"
        >
          <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden min-h-[260px] sm:min-h-[280px] max-h-[80vh]">
            {/* Glassmorphism Effekt */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/40" />
            
            <div className="relative p-6">
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Cookie-Einstellungen
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Damit der Sound stimmt – auch digital. 🎧 Wir nutzen Cookies, um dir die besten Miet-Angebote in Südhessen zu zeigen.
                  </p>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="flex-shrink-0 w-8 h-8 rounded-lg hover:bg-gray-100/50 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Schließen"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Cookie-Kategorien */}
              {showDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-4 space-y-3"
                >
                  {/* Essenziell */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50/50">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm text-gray-900">
                          Essenziell
                        </span>
                        <span className="text-xs text-gray-500">(Immer aktiv)</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Notwendig für die Grundfunktionen der Website
                      </p>
                    </div>
                    <div className="flex-shrink-0 ml-3">
                      <div className="w-10 h-6 rounded-full bg-blue-600 flex items-center justify-end px-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Analyse */}
                  <div
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50/50 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => togglePreference('analytics')}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm text-gray-900">
                          Analyse
                        </span>
                        <span className="text-xs text-blue-600">(Google Analytics)</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Hilft uns, die Website zu verbessern
                      </p>
                    </div>
                    <div className="flex-shrink-0 ml-3">
                      <button
                        type="button"
                        className={`relative w-10 h-6 rounded-full transition-colors ${
                          preferences.analytics ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                        aria-label="Analytics Cookies"
                      >
                        <span
                          className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                            preferences.analytics ? 'translate-x-4' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Marketing */}
                  <div
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50/50 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => togglePreference('marketing')}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm text-gray-900">
                          Marketing
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Für personalisierte Werbung und Inhalte
                      </p>
                    </div>
                    <div className="flex-shrink-0 ml-3">
                      <button
                        type="button"
                        className={`relative w-10 h-6 rounded-full transition-colors ${
                          preferences.marketing ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                        aria-label="Marketing Cookies"
                      >
                        <span
                          className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                            preferences.marketing ? 'translate-x-4' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Rechtshinweise */}
              <div className="mb-4 text-xs text-gray-500 leading-relaxed">
                Weitere Informationen findest du in unserer{' '}
                <Link
                  href="/datenschutz"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Datenschutzerklärung
                </Link>{' '}
                und im{' '}
                <Link
                  href="/impressum"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Impressum
                </Link>
                .
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-2">
                {!showDetails ? (
                  <>
                    <div className="flex gap-2">
                      <button
                        onClick={handleRejectAll}
                        className="flex-1 px-4 py-2.5 rounded-xl font-semibold text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        Ablehnen
                      </button>
                      <button
                        onClick={handleAcceptAll}
                        className="flex-1 px-4 py-2.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
                      >
                        Alle akzeptieren
                      </button>
                    </div>
                    <button
                      onClick={() => setShowDetails(true)}
                      className="w-full px-4 py-2.5 rounded-xl font-medium text-sm text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                    >
                      <Settings className="w-4 h-4" />
                      Einstellungen
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleSavePreferences}
                    className="w-full px-4 py-2.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
                  >
                    Einstellungen speichern
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
