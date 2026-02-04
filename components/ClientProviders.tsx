'use client';

import React, { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { RentalCartProvider } from '@/context/RentalCartContext';
import CookieConsent from '@/components/CookieConsent';
import AnalyticsScripts from '@/components/AnalyticsScripts';

/**
 * Auf Mobilgeräten (≤768px) und bei prefers-reduced-motion werden alle
 * Framer-Motion-Animationen deaktiviert, um Ruckler und Hänger zu vermeiden.
 */
function MotionConfigMobile({ children }: { children: React.ReactNode }) {
  const [reduceMotion, setReduceMotion] = useState(true);

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 768px)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const update = () => {
      setReduceMotion(mobileQuery.matches || reducedMotionQuery.matches);
    };

    update();
    mobileQuery.addEventListener('change', update);
    reducedMotionQuery.addEventListener('change', update);
    return () => {
      mobileQuery.removeEventListener('change', update);
      reducedMotionQuery.removeEventListener('change', update);
    };
  }, []);

  return (
    <MotionConfig
      reducedMotion={reduceMotion ? 'always' : 'user'}
      transition={reduceMotion ? { duration: 0 } : undefined}
    >
      {children}
    </MotionConfig>
  );
}

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <RentalCartProvider>
      <MotionConfigMobile>
        {children}
        <CookieConsent />
        <AnalyticsScripts />
      </MotionConfigMobile>
    </RentalCartProvider>
  );
}
