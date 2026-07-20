'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

export interface CartItem {
  id: string;
  name: string;
  quantity: number;
}

interface RentalCartContextType {
  items: CartItem[];
  rentalDate: string;
  setRentalDate: (date: string) => void;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  getTotalCount: () => number;
  isAnimating: boolean;
}

const RentalCartContext = createContext<RentalCartContextType | undefined>(undefined);

const STORAGE_KEY = 'da-sound-rental-cart';
const DATE_STORAGE_KEY = 'da-sound-rental-date';

export function RentalCartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [rentalDate, setRentalDateState] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  // Lade Warenkorb und Mietdatum aus localStorage beim Mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          setItems(JSON.parse(stored));
        }
        const storedDate = localStorage.getItem(DATE_STORAGE_KEY);
        if (storedDate) {
          setRentalDateState(storedDate);
        }
      } catch (error) {
        console.error('Fehler beim Laden des Warenkorbs:', error);
      }
    }
  }, []);

  // Speichere Warenkorb in localStorage bei Änderungen
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      } catch (error) {
        console.error('Fehler beim Speichern des Warenkorbs:', error);
      }
    }
  }, [items]);

  // Speichere Mietdatum in localStorage bei Änderungen
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        if (rentalDate) {
          localStorage.setItem(DATE_STORAGE_KEY, rentalDate);
        } else {
          localStorage.removeItem(DATE_STORAGE_KEY);
        }
      } catch (error) {
        console.error('Fehler beim Speichern des Mietdatums:', error);
      }
    }
  }, [rentalDate]);

  const setRentalDate = useCallback((date: string) => {
    setRentalDateState(date);
  }, []);

  const addItem = useCallback((item: Omit<CartItem, 'quantity'>) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      
      if (existingItem) {
        // Artikel bereits vorhanden, erhöhe Menge
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Neuer Artikel
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });

    // Bounce-Animation auslösen
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    setRentalDateState('');
  }, []);

  const getTotalCount = useCallback(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      items,
      rentalDate,
      setRentalDate,
      addItem,
      removeItem,
      clearCart,
      getTotalCount,
      isAnimating,
    }),
    [items, rentalDate, setRentalDate, addItem, removeItem, clearCart, getTotalCount, isAnimating]
  );

  return (
    <RentalCartContext.Provider value={contextValue}>
      {children}
    </RentalCartContext.Provider>
  );
}

export function useRentalCart() {
  const context = useContext(RentalCartContext);
  if (context === undefined) {
    throw new Error('useRentalCart muss innerhalb eines RentalCartProvider verwendet werden');
  }
  return context;
}
