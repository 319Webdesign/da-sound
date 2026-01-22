'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

const STORAGE_KEY = 'da-sound-cookie-consent';

export default function AnalyticsScripts() {
  const [canLoad, setCanLoad] = useState(false);
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    if (!gaId) return;

    try {
      const savedConsent = localStorage.getItem(STORAGE_KEY);
      if (!savedConsent) return;
      const prefs = JSON.parse(savedConsent);
      if (prefs?.analytics) {
        setCanLoad(true);
      }
    } catch {
      // Ignoriere Fehler bei ungültigem Storage
    }
  }, [gaId]);

  if (!gaId || !canLoad) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="lazyOnload"
      />
      <Script id="ga-init" strategy="lazyOnload">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}', { anonymize_ip: true });
      `}</Script>
    </>
  );
}
