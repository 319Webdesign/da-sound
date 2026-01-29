'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Volume2, Bluetooth, Package, Zap, ArrowRight, Settings, Users, Headphones, Save, Vote, Cable } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { DEFAULT_BLUR_DATA_URL } from '@/lib/blurDataUrl';

interface HighlightProductProps {
  title: string;
  image: string;
  imageAlt: string;
  description?: string;
  features: Array<{ icon: 'volume' | 'bluetooth' | 'package' | 'zap' | 'settings' | 'users' | 'headphones' | 'save' | 'vote' | 'cable'; text: string }>;
  price: string;
  pricePeriod?: string;
  ctaText?: string;
  productUrl?: string;
  onCtaClick?: () => void;
}

const iconMap = {
  volume: Volume2,
  bluetooth: Bluetooth,
  package: Package,
  zap: Zap,
  settings: Settings,
  users: Users,
  headphones: Headphones,
  save: Save,
  vote: Vote,
  cable: Cable,
};

export default function HighlightProduct({
  title,
  image,
  imageAlt,
  description,
  features,
  price,
  pricePeriod = '/ Tag',
  ctaText = 'Zur Produktseite',
  productUrl,
  onCtaClick,
}: HighlightProductProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    }
    // Wenn productUrl vorhanden ist, wird Link-Komponente verwendet
    // Ansonsten Fallback
    if (!productUrl && !onCtaClick) {
      const contactSection = document.getElementById('kontakt');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="bg-[#F3F4F6] py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Links: Produktbild */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm lg:max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl transform rotate-3 opacity-20" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl bg-white flex items-center justify-center p-4 md:p-6 lg:p-8">
                <div className="relative w-full h-full">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    quality={90}
                    priority
                    placeholder="blur"
                    blurDataURL={DEFAULT_BLUR_DATA_URL}
                    onError={(e) => {
                      console.error('Failed to load image:', image);
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.opacity = '1';
                    }}
                    onLoad={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.opacity = '1';
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Rechts: Text-Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="space-y-6 text-center lg:text-left"
          >
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs md:text-sm font-semibold bg-primary text-white uppercase tracking-wide">
                Highlight des Monats
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {title}
            </h2>

            {/* Description */}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
              >
                {description}
              </motion.p>
            )}

            {/* Features / Bullet-Points */}
            <div className="space-y-4 pt-4">
              {features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 justify-center lg:justify-start"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-lg md:text-xl text-gray-700 font-medium">
                      {feature.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Call-to-Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="pt-4 flex justify-center lg:justify-start"
            >
              {productUrl ? (
                <Link
                  href={productUrl}
                  className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-lg"
                >
                  {ctaText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <button
                  onClick={handleCtaClick}
                  className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-lg w-full sm:w-auto"
                >
                  {ctaText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
