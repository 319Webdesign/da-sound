'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

const STORAGE_KEY = 'da-sound-easter-popup-dismissed';
const START_DATE = new Date('2026-03-23T00:00:00');
const END_DATE = new Date('2026-04-08T23:59:59');

function isInDateRange(): boolean {
  const now = new Date();
  return now >= START_DATE && now <= END_DATE;
}

function hasPreviewParam(searchParams: URLSearchParams | null): boolean {
  if (!searchParams) return false;
  return searchParams.get('preview') === 'ostern';
}

export default function EasterPopup() {
  const searchParams = useSearchParams();
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;

    const isPreview = hasPreviewParam(searchParams);
    if (isPreview) {
      setIsVisible(true);
      return;
    }

    if (!isInDateRange()) return;

    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      setIsVisible(true);
    }
  }, [mounted, searchParams]);

  const handleClose = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, 'true');
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        aria-modal="true"
        aria-labelledby="easter-popup-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={handleClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Dekorativer oberer Streifen */}
          <div className="h-1.5 bg-gradient-to-r from-primary-light via-primary to-primary-dark" />

          <div className="p-6 md:p-8">
            <div className="flex justify-center mb-5">
              <img
                src="/images/logo.svg"
                alt="da-sound"
                className="h-12 md:h-14 w-auto"
              />
            </div>
            <h2
              id="easter-popup-title"
              className="text-xl md:text-2xl font-bold text-gray-900 mb-4"
            >
              Osterpause bei da-sound
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Vom 01.04. bis zum 08.04. machen wir Betriebsferien.
              <br /><br />
              In dieser Woche bleibt unser Lager geschlossen, daher findet keine Geräteausgabe statt. Ab dem 09.04. sind wir wieder wie gewohnt für euch erreichbar.
              <br /><br />
              Anfragen über das Kontaktformular könnt ihr natürlich trotzdem senden – wir melden uns direkt nach der Pause bei euch!
            </p>

            <button
              onClick={handleClose}
              className="w-full py-3 px-6 rounded-xl font-semibold text-white bg-primary hover:bg-primary-dark focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-white transition-colors shadow-lg"
            >
              Verstanden
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
