'use client';

import React from 'react';
import { RentalCartProvider } from '@/context/RentalCartContext';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return <RentalCartProvider>{children}</RentalCartProvider>;
}
