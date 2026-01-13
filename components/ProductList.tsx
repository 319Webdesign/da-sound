'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, ArrowRight } from 'lucide-react';
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
    <div className="space-y-8">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {/* Bilder */}
            <div className="md:col-span-1">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                {product.images && product.images.length > 0 ? (
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
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
            </div>

            {/* Beschreibung und Details */}
            <div className="md:col-span-2 flex flex-col">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

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
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="text-sm">
                        <span className="font-semibold text-gray-700">{spec.label}:</span>{' '}
                        <span className="text-gray-600">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Preise und CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
                <div className="flex flex-col gap-1">
                  <div className="text-lg font-bold text-primary">
                    {product.pricePerUnit.toFixed(2).replace('.', ',')} € / Stück
                  </div>
                  {product.pricePerPair && (
                    <div className="text-sm text-gray-600">
                      {product.pricePerPair.toFixed(2).replace('.', ',')} € / Paar
                    </div>
                  )}
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
                >
                  <ShoppingBag className="w-5 h-5" />
                  In Warenkorb
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
