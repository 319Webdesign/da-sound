'use client';

import { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const LEGEND = [
  {
    title: 'Einfach',
    description: 'Auch für Laien stellt Aufbau und Verkabelung keine Herausforderung dar.',
  },
  {
    title: 'Machbar',
    description: 'Mit etwas technischem Sachverstand problemlos aufzubauen.',
  },
  {
    title: 'Komplex',
    description: 'Vorkenntnisse mit PA-Technik erforderlich bzw. dringend empfohlen.',
  },
  {
    title: 'Pro',
    description: 'Nur durch Fachpersonal in Betrieb zu nehmen.',
  },
];

export default function AufbauLegendTooltip() {
  const [isOpen, setIsOpen] = useState(false);

  const openTooltip = () => setIsOpen(true);
  const closeTooltip = () => setIsOpen(false);
  const toggleTooltip = () => setIsOpen((prev) => !prev);

  return (
    <div
      className="relative inline-flex"
      onMouseLeave={closeTooltip}
    >
      <button
        type="button"
        onMouseEnter={openTooltip}
        onClick={(event) => {
          event.preventDefault();
          toggleTooltip();
        }}
        className="flex items-center justify-center w-5 h-5 text-gray-400 hover:text-gray-500 transition-colors"
        aria-expanded={isOpen}
        aria-label="Legende Aufbau-Schwierigkeit anzeigen"
      >
        <HelpCircle className="w-4 h-4" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 right-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-2xl shadow-lg shadow-black/10 text-sm text-gray-700"
            onMouseEnter={openTooltip}
          >
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-xs uppercase tracking-wider font-semibold text-gray-500">
                Legende Aufbau-Schwierigkeit
              </p>
            </div>
            <div className="px-4 py-3 space-y-2">
              {LEGEND.map((item) => (
                <div key={item.title} className="space-y-1">
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="text-xs text-gray-600 leading-snug">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
