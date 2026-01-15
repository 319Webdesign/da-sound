'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, ArrowRight, Zap, Users, Music } from 'lucide-react';
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
                      className={
                        product.id === 'akku-lautsprecher-compact' ||
                        product.id === 'aktivlautsprecher-bluetooth' ||
                        product.id === 'pa-saeule-bluetooth' ||
                        product.id === 'party-set-small' ||
                        product.id === 'party-set-medium' ||
                        product.id === 'party-set-white' ||
                        product.id === 'party-set-large'
                          ? 'object-contain p-4'
                          : 'object-cover'
                      }
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={80}
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

                {/* Specs */}
                {product.specs && product.specs.length > 0 && (
                  <div className="flex flex-wrap gap-4 mb-4">
                    {product.specs
                      .filter((spec) => !(product.categorySlug === 'pa-anlagen' && spec.label === 'Personen'))
                      .map((spec, idx) => {
                        let icon = null;
                        if (spec.label === 'Leistung') {
                          icon = <Zap className="w-4 h-4" />;
                        } else if (spec.label === 'Personen') {
                          icon = <Users className="w-4 h-4" />;
                        } else if (spec.label === 'Typ') {
                          icon = <Music className="w-4 h-4" />;
                        }
                        
                        return (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            {icon && <span className="text-primary">{icon}</span>}
                            <span className="text-gray-600">{spec.value}</span>
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>

              {/* Preise und CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
                <div className="flex flex-col gap-1">
                  {product.priceOptions && product.priceOptions.length > 0 ? (
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
                  ) : (
                    <>
                      <div className="text-xl font-bold text-primary">
                        {product.pricePerUnit.toFixed(2).replace('.', ',')} € / {(product.id === 'sub-sat-set-bluetooth' || product.id === 'pa-set-small' || product.id === 'pa-set-medium' || product.id === 'pa-set-large' || product.id === 'pa-set-xlarge' || product.id === 'pa-set-premium' || product.id === 'pa-set-outdoor') ? 'Tag' : 'Stück'}
                      </div>
                      {product.pricePerPair && (
                        <div className="text-sm text-gray-500">
                          {product.pricePerPair.toFixed(2).replace('.', ',')} € / {(product.id === 'sub-sat-set-bluetooth' || product.id === 'pa-set-small' || product.id === 'pa-set-medium' || product.id === 'pa-set-large' || product.id === 'pa-set-xlarge' || product.id === 'pa-set-premium' || product.id === 'pa-set-outdoor') ? 'Wochenende' : 'Paar'}
                        </div>
                      )}
                    </>
                  )}
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
