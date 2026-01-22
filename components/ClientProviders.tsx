'use client';

import React from 'react';
import { RentalCartProvider } from '@/context/RentalCartContext';
import CookieConsent from '@/components/CookieConsent';
import AnalyticsScripts from '@/components/AnalyticsScripts';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <RentalCartProvider>
      {children}
      <CookieConsent />
      <AnalyticsScripts />
    </RentalCartProvider>
  );
}
