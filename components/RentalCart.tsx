'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, MessageCircle, Mail, Trash2 } from 'lucide-react';
import { useRentalCart } from '@/context/RentalCartContext';
import { data } from '@/lib/data';

export default function RentalCart() {
  const { items, removeItem, getTotalCount, isAnimating } = useRentalCart();
  const [isOpen, setIsOpen] = useState(false);

  const totalCount = getTotalCount();

  // WhatsApp-Link generieren - mit useMemo optimiert
  const whatsappLink = useMemo(() => {
    if (items.length === 0) return '';
    
    const itemList = items
      .map((item) => `${item.quantity}x ${item.name}`)
      .join(', ');
    
    const message = `Hallo da-sound, ich hätte gerne ein Angebot für: ${itemList}`;
    return `https://wa.me/${data.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
  }, [items]);

  // E-Mail-Link generieren - mit useMemo optimiert
  const emailLink = useMemo(() => {
    if (items.length === 0) return '';
    
    const itemList = items
      .map((item) => `${item.quantity}x ${item.name}`)
      .join('\n');
    
    const body = `Hallo da-sound,\n\nich hätte gerne ein Angebot für folgende Technik:\n\n${itemList}\n\nVielen Dank!`;
    return `mailto:info@da-sound.de?subject=Mietanfrage&body=${encodeURIComponent(body)}`;
  }, [items]);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-primary hover:bg-primary-dark text-white shadow-xl hover:shadow-2xl transition-all flex items-center justify-center group"
        animate={isAnimating ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        aria-label="Warenkorb öffnen"
      >
        <ShoppingBag className="w-7 h-7" />
        
        {/* Badge mit Anzahl */}
        {totalCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
          >
            {totalCount > 99 ? '99+' : totalCount}
          </motion.div>
        )}
      </motion.button>

      {/* Slide-Over Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-[350px] bg-white shadow-2xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">Deine Mietanfrage</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Panel schließen"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
                    <p className="text-gray-500 text-lg">Noch keine Technik ausgewählt</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-600">Menge: {item.quantity}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 hover:bg-red-100 rounded-full transition-colors text-red-600"
                          aria-label={`${item.name} entfernen`}
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Actions */}
              {items.length > 0 && (
                <div className="p-6 border-t border-gray-200 space-y-3">
                  {/* WhatsApp Button */}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Anfrage via WhatsApp
                  </a>

                  {/* E-Mail Button */}
                  <a
                    href={emailLink}
                    className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
                  >
                    <Mail className="w-5 h-5" />
                    Anfrage via E-Mail
                  </a>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
