'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, ArrowRight, Zap, Users, Music, Home, CloudRain, Volume2, Bluetooth, Weight, Truck, Speech, BatteryMedium, Sliders, Sparkles, MonitorCheck, Network, Wifi, WifiOff, Usb, Palette, Move, ShieldAlert, BarChart3, SignalHigh, Cable, Monitor, Maximize, Sun, Contrast, HdmiPort } from 'lucide-react';
import { useRentalCart } from '@/context/RentalCartContext';
import type { Product } from '@/lib/products';

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  const { addItem } = useRentalCart();

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
    });
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Keine Produkte in dieser Kategorie verfügbar.</p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {/* Bilder */}
            <div className="md:col-span-1">
              {(product.id === 'pa-set-small' || product.id === 'pa-set-premium' || product.id === 'profi-pa-line-array-event-26a') && product.images && product.images.length >= 2 ? (
                <div className="grid grid-cols-2 gap-1">
                  <div className={`relative rounded-lg overflow-hidden bg-white p-1 ${product.images[1]?.includes('audiozenit') ? 'aspect-square' : 'aspect-square'}`}>
                    <Image
                      src={product.images[0]}
                      alt={`${product.name} - Bild 1`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 50vw, 16vw"
                      quality={80}
                      loading="lazy"
                    />
                  </div>
                  <div className={`relative rounded-lg overflow-hidden bg-white p-1 ${product.images[1]?.includes('audiozenit') ? 'aspect-[3/4]' : 'aspect-square'}`}>
                    <Image
                      src={product.images[1]}
                      alt={`${product.name} - Bild 2`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 50vw, 16vw"
                      quality={80}
                      loading="lazy"
                    />
                  </div>
                </div>
              ) : (
                <div className="relative aspect-square rounded-lg overflow-hidden bg-white">
                  {product.images && product.images.length > 0 ? (
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={85}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <ShoppingBag className="w-16 h-16" />
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Beschreibung und Details */}
            <div className="md:col-span-2 flex flex-col">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>

                {/* Offer Info */}
                {product.offerInfo && (
                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg mb-4">
                    <div className="text-sm font-semibold text-primary mb-1">Pro-Tipp für mehr Bass</div>
                    <p className="text-gray-700 leading-relaxed">
                      {product.offerInfo}
                    </p>
                  </div>
                )}

                {/* Features */}
                {product.features && product.features.length > 0 && (
                  <ul className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Specs - Icon Grid */}
                {product.specs && product.specs.length > 0 && (
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {product.specs
                      .filter((spec) => {
                        // Filter basierend auf Kategorie - flexibel für verschiedene Label-Varianten
                        const category = product.categorySlug;
                        const isPartySet = product.id === 'party-set-small' || product.id === 'party-set-medium' || product.id === 'party-set-white' || product.id === 'party-set-large' || product.id === 'party-set-xlarge';
                        const labelLower = spec.label.toLowerCase();
                        
                        if (isPartySet) {
                          return ['Personen', 'Indoor', 'Leistung', 'Schalldruck', 'Bluetooth', 'Transport'].includes(spec.label);
                        }
                        
                        if (category === 'pa-anlagen') {
                          return ['Personen', 'Anwendung', 'Typ', 'Indoor', 'Outdoor', 'Akkulaufzeit', 'Laufzeit', 'Leistung', 'Schalldruck', 'Bluetooth', 'Gewicht', 'Transport'].includes(spec.label);
                        }
                        
                        if (category === 'mischpulte-mikrofone') {
                          return labelLower.includes('channel') || labelLower.includes('effects') || labelLower.includes('dsp') || labelLower.includes('touch') || labelLower.includes('display') || labelLower.includes('protokoll') || labelLower.includes('wifi') || labelLower.includes('usb') || spec.label === 'Gewicht';
                        }
                        
                        if (category === 'statische-scheinwerfer-led-spots') {
                          return labelLower.includes('leistung') || labelLower.includes('akku') || labelLower.includes('laufzeit') || spec.label === 'Indoor' || spec.label === 'Outdoor' || labelLower.includes('farb') || labelLower.includes('rgb') || labelLower.includes('sound') || labelLower.includes('fernbedienung') || labelLower.includes('wireless') || labelLower.includes('dmx') || spec.label === 'Gewicht';
                        }
                        
                        if (category === 'moving-heads') {
                          return labelLower.includes('leistung') || labelLower.includes('pan') || labelLower.includes('tilt') || labelLower.includes('schutz') || spec.label === 'Indoor' || spec.label === 'Outdoor' || labelLower.includes('farb') || labelLower.includes('rgb') || labelLower.includes('sound') || labelLower.includes('fernbedienung') || labelLower.includes('wireless') || labelLower.includes('dmx') || spec.label === 'Gewicht';
                        }
                        
                        if (category === 'nebelmaschinen-buehneneffekte') {
                          return labelLower.includes('leistung') || labelLower.includes('heiz') || labelLower.includes('nebelart') || labelLower.includes('nebelausstoß') || labelLower.includes('menge') || labelLower.includes('funk') || labelLower.includes('kabel') || labelLower.includes('fernbedienung') || spec.label === 'Gewicht';
                        }
                        
                        if (category === 'medien-konferenztechnik') {
                          return labelLower.includes('typ') || labelLower.includes('technologie') || labelLower.includes('auflösung') || labelLower.includes('helligkeit') || labelLower.includes('lumen') || labelLower.includes('kontrast') || labelLower.includes('hdmi') || labelLower.includes('vga') || labelLower.includes('eingang') || spec.label === 'Gewicht';
                        }
                        
                        // Standard: alle Specs anzeigen außer Personen bei PA-Anlagen (wenn nicht explizit gefiltert)
                        return true;
                      })
                      .map((spec, idx) => {
                        const category = product.categorySlug;
                        const isPartySet = product.id === 'party-set-small' || product.id === 'party-set-medium' || product.id === 'party-set-white' || product.id === 'party-set-large' || product.id === 'party-set-xlarge';
                        let icon = null;
                        let label = '';
                        
                        if (isPartySet) {
                          // Party-Set spezifische Icons und Labels
                          if (spec.label === 'Personen') {
                            icon = <Users className="w-5 h-5" />;
                            label = 'PERSONEN';
                          } else if (spec.label === 'Indoor') {
                            icon = <Home className="w-5 h-5" />;
                            label = 'INDOOR';
                          } else if (spec.label === 'Outdoor') {
                            icon = <CloudRain className="w-5 h-5" />;
                            label = 'OUTDOOR';
                          } else if (spec.label === 'Leistung') {
                            icon = <Zap className="w-5 h-5" />;
                            label = 'POWER';
                          } else if (spec.label === 'Schalldruck') {
                            icon = <Volume2 className="w-5 h-5" />;
                            label = 'SOUND';
                          } else if (spec.label === 'Bluetooth') {
                            icon = <Bluetooth className="w-5 h-5" />;
                            label = 'BLUETOOTH';
                          } else if (spec.label === 'Gewicht') {
                            icon = <Weight className="w-5 h-5" />;
                            label = 'WEIGHT';
                          } else if (spec.label === 'Transport') {
                            icon = <Truck className="w-5 h-5" />;
                            const transportValue = spec.value.toLowerCase();
                            if (transportValue.includes('pkw')) {
                              label = 'PKW';
                            } else if (transportValue.includes('kombi') || transportValue.includes('van')) {
                              label = 'VAN';
                            } else if (transportValue.includes('transporter')) {
                              label = 'TRANSPORT';
                            } else {
                              label = 'TRANSPORT';
                            }
                          }
                        } else if (category === 'pa-anlagen') {
                          // PA-Anlagen / Lautsprecher
                          const labelLower = spec.label.toLowerCase();
                          if (spec.label === 'Personen') {
                            icon = <Users className="w-5 h-5" />;
                            label = 'PERSONEN';
                          } else if (spec.label === 'Anwendung' || spec.label === 'Typ') {
                            icon = <Music className="w-5 h-5" />;
                            label = 'ANWENDUNG';
                          } else if (spec.label === 'Indoor') {
                            icon = <Home className="w-5 h-5" />;
                            label = 'INDOOR';
                          } else if (spec.label === 'Outdoor') {
                            icon = <CloudRain className="w-5 h-5" />;
                            label = 'OUTDOOR';
                          } else if (spec.label === 'Akkulaufzeit' || spec.label === 'Laufzeit' || labelLower.includes('akku') || labelLower.includes('laufzeit')) {
                            icon = <BatteryMedium className="w-5 h-5" />;
                            label = 'AKKU';
                          } else if (spec.label === 'Leistung' || labelLower.includes('leistung')) {
                            icon = <Zap className="w-5 h-5" />;
                            label = 'POWER';
                          } else if (spec.label === 'Schalldruck' || labelLower.includes('schalldruck')) {
                            icon = <Volume2 className="w-5 h-5" />;
                            label = 'SOUND';
                          } else if (spec.label === 'Bluetooth' || labelLower.includes('bluetooth')) {
                            icon = <Bluetooth className="w-5 h-5" />;
                            label = 'BLUETOOTH';
                          } else if (spec.label === 'Gewicht' || labelLower.includes('gewicht')) {
                            icon = <Weight className="w-5 h-5" />;
                            label = 'WEIGHT';
                          } else if (spec.label === 'Transport' || labelLower.includes('transport')) {
                            icon = <Truck className="w-5 h-5" />;
                            const transportValue = spec.value.toLowerCase();
                            if (transportValue.includes('pkw')) {
                              label = 'PKW';
                            } else if (transportValue.includes('kombi') || transportValue.includes('van')) {
                              label = 'VAN';
                            } else {
                              label = 'TRANSPORT';
                            }
                          }
                        } else if (category === 'mischpulte-mikrofone') {
                          // Mischpulte / Mikrofone
                          const labelLower = spec.label.toLowerCase();
                          if (labelLower.includes('channel')) {
                            icon = <Sliders className="w-5 h-5" />;
                            label = 'CHANNELS';
                          } else if (labelLower.includes('effect') || labelLower.includes('dsp')) {
                            icon = <Sparkles className="w-5 h-5" />;
                            label = 'EFFECTS';
                          } else if (labelLower.includes('touch') || labelLower.includes('display')) {
                            icon = <MonitorCheck className="w-5 h-5" />;
                            label = 'DISPLAY';
                          } else if (labelLower.includes('protokoll') || labelLower.includes('network')) {
                            icon = <Network className="w-5 h-5" />;
                            label = 'PROTOKOLL';
                          } else if (labelLower.includes('wifi') || labelLower.includes('wireless')) {
                            const wifiValue = spec.value.toLowerCase();
                            icon = wifiValue.includes('ja') || wifiValue === 'yes' || wifiValue.includes('true') ? <Wifi className="w-5 h-5" /> : <WifiOff className="w-5 h-5" />;
                            label = 'WIFI';
                          } else if (labelLower.includes('usb')) {
                            icon = <Usb className="w-5 h-5" />;
                            label = 'USB';
                          } else if (labelLower.includes('gewicht')) {
                            icon = <Weight className="w-5 h-5" />;
                            label = 'WEIGHT';
                          }
                        } else if (category === 'statische-scheinwerfer-led-spots') {
                          // LED Spots / Lichteffekte
                          const labelLower = spec.label.toLowerCase();
                          if (labelLower.includes('leistung') || labelLower.includes('watt')) {
                            icon = <Zap className="w-5 h-5" />;
                            label = 'POWER';
                          } else if (labelLower.includes('akku') || labelLower.includes('laufzeit')) {
                            icon = <BatteryMedium className="w-5 h-5" />;
                            label = 'AKKU';
                          } else if (spec.label === 'Indoor') {
                            icon = <Home className="w-5 h-5" />;
                            label = 'INDOOR';
                          } else if (spec.label === 'Outdoor') {
                            icon = <CloudRain className="w-5 h-5" />;
                            label = 'OUTDOOR';
                          } else if (labelLower.includes('farb') || labelLower.includes('rgb')) {
                            icon = <Palette className="w-5 h-5" />;
                            label = 'FARBEN';
                          } else if (labelLower.includes('sound') || labelLower.includes('light')) {
                            icon = <Music className="w-5 h-5" />;
                            label = 'SOUND';
                          } else if (labelLower.includes('fernbedienung') || labelLower.includes('wireless') || labelLower.includes('dmx')) {
                            icon = <Wifi className="w-5 h-5" />;
                            label = 'WIRELESS';
                          } else if (labelLower.includes('gewicht')) {
                            icon = <Weight className="w-5 h-5" />;
                            label = 'WEIGHT';
                          }
                        } else if (category === 'moving-heads') {
                          // Moving Heads
                          const labelLower = spec.label.toLowerCase();
                          if (labelLower.includes('leistung') || labelLower.includes('watt')) {
                            icon = <Zap className="w-5 h-5" />;
                            label = 'POWER';
                          } else if (labelLower.includes('pan') || labelLower.includes('tilt') || labelLower.includes('movement')) {
                            icon = <Move className="w-5 h-5" />;
                            label = 'PAN/TILT';
                          } else if (labelLower.includes('schutz') || labelLower.includes('klasse')) {
                            icon = <ShieldAlert className="w-5 h-5" />;
                            label = 'SCHUTZ';
                          } else if (spec.label === 'Indoor') {
                            icon = <Home className="w-5 h-5" />;
                            label = 'INDOOR';
                          } else if (spec.label === 'Outdoor') {
                            icon = <CloudRain className="w-5 h-5" />;
                            label = 'OUTDOOR';
                          } else if (labelLower.includes('farb') || labelLower.includes('rgb')) {
                            icon = <Palette className="w-5 h-5" />;
                            label = 'FARBEN';
                          } else if (labelLower.includes('sound') || labelLower.includes('light') || labelLower.includes('programme')) {
                            icon = <Music className="w-5 h-5" />;
                            label = 'SOUND';
                          } else if (labelLower.includes('fernbedienung') || labelLower.includes('wireless') || labelLower.includes('dmx')) {
                            icon = <Wifi className="w-5 h-5" />;
                            label = 'WIRELESS';
                          } else if (labelLower.includes('gewicht')) {
                            icon = <Weight className="w-5 h-5" />;
                            label = 'WEIGHT';
                          }
                        } else if (category === 'nebelmaschinen-buehneneffekte') {
                          // Nebelmaschine / Bühneneffekte
                          const labelLower = spec.label.toLowerCase();
                          if (labelLower.includes('leistung') || labelLower.includes('heiz') || labelLower.includes('aufnahme') || labelLower.includes('watt')) {
                            icon = <Zap className="w-5 h-5" />;
                            label = 'POWER';
                          } else if (labelLower.includes('nebelart') || labelLower.includes('bodennebel') || labelLower.includes('dunst') || labelLower.includes('shownebel') || labelLower.includes('kaltfunken') || labelLower.includes('fontäne')) {
                            icon = <BarChart3 className="w-5 h-5" />;
                            label = 'NEBELART';
                          } else if (labelLower.includes('nebelausstoß') || labelLower.includes('ausstoß') || labelLower.includes('menge')) {
                            icon = <SignalHigh className="w-5 h-5" />;
                            label = 'AUSSTOSS';
                          } else if (labelLower.includes('funk') || labelLower.includes('wireless')) {
                            icon = <Wifi className="w-5 h-5" />;
                            label = 'FUNK';
                          } else if (labelLower.includes('kabel') || labelLower.includes('cable')) {
                            icon = <Cable className="w-5 h-5" />;
                            label = 'KABEL';
                          } else if (labelLower.includes('gewicht')) {
                            icon = <Weight className="w-5 h-5" />;
                            label = 'WEIGHT';
                          }
                        } else if (category === 'medien-konferenztechnik') {
                          // Beamer & Display
                          const labelLower = spec.label.toLowerCase();
                          if (labelLower.includes('typ') || labelLower.includes('technologie')) {
                            icon = <Monitor className="w-5 h-5" />;
                            label = 'TYP';
                          } else if (labelLower.includes('auflösung') || labelLower.includes('resolution') || labelLower.includes('hd') || labelLower.includes('4k')) {
                            icon = <Maximize className="w-5 h-5" />;
                            label = 'HD';
                          } else if (labelLower.includes('helligkeit') || labelLower.includes('lumen') || labelLower.includes('ansi')) {
                            icon = <Sun className="w-5 h-5" />;
                            label = 'HELLIGKEIT';
                          } else if (labelLower.includes('kontrast')) {
                            icon = <Contrast className="w-5 h-5" />;
                            label = 'KONTRAST';
                          } else if (labelLower.includes('hdmi') || labelLower.includes('vga') || labelLower.includes('eingang') || labelLower.includes('anschluss')) {
                            icon = <HdmiPort className="w-5 h-5" />;
                            label = 'EINGÄNGE';
                          } else if (labelLower.includes('gewicht')) {
                            icon = <Weight className="w-5 h-5" />;
                            label = 'WEIGHT';
                          }
                        } else {
                          // Standard Icons für andere Produkte
                          if (spec.label === 'Leistung') {
                            icon = <Zap className="w-5 h-5" />;
                            label = 'POWER';
                          } else if (spec.label === 'Personen') {
                            icon = <Users className="w-5 h-5" />;
                            label = 'PERSONEN';
                          } else if (spec.label === 'Typ') {
                            icon = <Music className="w-5 h-5" />;
                            label = 'TYPE';
                          }
                        }
                        
                        // Nur anzeigen, wenn Icon vorhanden
                        if (!icon) return null;
                        
                        return (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="text-primary">{icon}</span>
                            <span className="text-xs text-gray-600 leading-tight">
                              {spec.value}
                            </span>
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>

              {/* Preise und CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
                <div className="flex flex-col gap-1">
                  {(() => {
                    const priceSpec = product.specs?.find(s => s.label === 'Preis' && s.value === 'Auf Anfrage');
                    const isPriceOnRequest = !!priceSpec;
                    
                    if (product.priceOptions && product.priceOptions.length > 0) {
                      return (
                        <div className="space-y-1">
                          {product.priceOptions.map((option, idx) => (
                            <div key={idx} className="text-sm">
                              <span className="font-semibold text-gray-700">{option.label}:</span>{' '}
                              <span className="text-lg font-bold text-primary">
                                {option.price.toFixed(2).replace('.', ',')} €
                              </span>
                            </div>
                          ))}
                        </div>
                      );
                    } else if (isPriceOnRequest) {
                      return (
                        <div className="text-xl font-bold text-primary">
                          Preis auf Anfrage
                        </div>
                      );
                    } else {
                      return (
                        <>
                          <div className="text-xl font-bold text-primary">
                            {product.pricePerUnit.toFixed(2).replace('.', ',')} € / {(product.id === 'sub-sat-set-bluetooth' || product.id === 'pa-set-small' || product.id === 'pa-set-medium' || product.id === 'pa-set-large' || product.id === 'pa-set-xlarge' || product.id === 'pa-set-premium' || product.id === 'pa-set-outdoor' || product.id === 'party-set-small' || product.id === 'party-set-medium' || product.id === 'party-set-white' || product.id === 'party-set-large' || product.id === 'party-set-xlarge') ? 'Tag' : 'Stück'}
                          </div>
                          {product.pricePerPair && (
                            <div className="text-sm text-gray-500">
                              {product.pricePerPair.toFixed(2).replace('.', ',')} € / {(product.id === 'sub-sat-set-bluetooth' || product.id === 'pa-set-small' || product.id === 'pa-set-medium' || product.id === 'pa-set-large' || product.id === 'pa-set-xlarge' || product.id === 'pa-set-premium' || product.id === 'pa-set-outdoor' || product.id === 'party-set-small' || product.id === 'party-set-medium' || product.id === 'party-set-white' || product.id === 'party-set-large' || product.id === 'party-set-xlarge') ? 'Wochenende' : 'Paar'}
                            </div>
                          )}
                        </>
                      );
                    }
                  })()}
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href={`/produkte/${product.id}`}
                    className="flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all"
                  >
                    Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    In Warenkorb
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
