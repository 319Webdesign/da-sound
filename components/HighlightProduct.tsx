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
  featuresTitle?: string;
  price: string;
  pricePeriod?: string;
  secondaryPrice?: string;
  priceNote?: string;
  /** Wenn gesetzt, ersetzt die komplette erste Preiszeile (z. B. „ab 250 € pro Tag“). */
  priceSummary?: string;
  ctaText?: string;
  productUrl?: string;
  onCtaClick?: () => void;
  tone?: 'halloween';
  badge?: string;
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
  featuresTitle,
  price,
  pricePeriod = '/ Tag',
  secondaryPrice,
  priceNote,
  priceSummary,
  ctaText = 'Zur Produktseite',
  productUrl,
  onCtaClick,
  tone,
  badge = 'Neu im Sortiment',
}: HighlightProductProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const halloween = tone === 'halloween';

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    }
    if (!productUrl && !onCtaClick) {
      const contactSection = document.getElementById('kontakt');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={ref}
      id="highlight"
      className={`relative overflow-hidden py-16 md:py-20 lg:py-24 ${halloween ? 'bg-[#120c18]' : 'bg-[#F3F4F6]'}`}
    >
      {halloween && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 50% 70% at 22% 42%, rgba(79, 70, 229, 0.42), transparent 62%), radial-gradient(ellipse 42% 50% at 86% 78%, rgba(234, 88, 12, 0.28), transparent 64%)',
          }}
        />
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Links: Produktbild */}
          <motion.div
            initial={{ opacity: halloween ? 1 : 0, x: halloween ? 0 : -50 }}
            animate={isInView || halloween ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            <div className="relative z-10 w-full max-w-sm lg:max-w-md aspect-[4/3]">
              <div
                className={`absolute inset-0 rounded-3xl shadow-2xl transform rotate-3 ${
                  halloween
                    ? 'bg-gradient-to-br from-violet-500/50 to-orange-500/35 opacity-70'
                    : 'bg-gradient-to-br from-white to-gray-50 opacity-20'
                }`}
              />
              <div
                className={`absolute inset-0 overflow-hidden rounded-3xl shadow-xl ${
                  halloween ? 'bg-black shadow-orange-950/40' : 'bg-white'
                }`}
              >
                {halloween ? (
                  <img
                    src={image}
                    alt={imageAlt}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                ) : (
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                    priority
                    fetchPriority="high"
                    placeholder="blur"
                    blurDataURL={DEFAULT_BLUR_DATA_URL}
                  />
                )}
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
              <span
                className={`inline-flex items-center px-4 py-2 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wide text-white ${
                  halloween ? 'bg-orange-600' : 'bg-primary'
                }`}
              >
                {badge}
              </span>
            </div>

            {/* Headline */}
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${halloween ? 'text-white' : 'text-gray-900'}`}>
              {title}
            </h2>

            {/* Description */}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className={`text-lg md:text-xl leading-relaxed ${halloween ? 'text-gray-300' : 'text-gray-600'}`}
              >
                {description}
              </motion.p>
            )}

            {/* Features / Bullet-Points */}
            {featuresTitle && (
              <p className="text-xl md:text-2xl font-semibold text-gray-900">
                {featuresTitle}
              </p>
            )}
            <div className="space-y-4 pt-1">
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
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                        halloween ? 'bg-orange-500/15' : 'bg-primary/10'
                      }`}
                    >
                      <IconComponent className={`w-6 h-6 ${halloween ? 'text-orange-400' : 'text-primary'}`} />
                    </div>
                    <span className={`text-lg md:text-xl font-medium ${halloween ? 'text-gray-100' : 'text-gray-700'}`}>
                      {feature.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Preise */}
            {(priceSummary || price) && (
              <div className="flex justify-center lg:justify-start">
                <div
                  className={`inline-block w-fit max-w-full rounded-2xl px-5 py-4 text-left shadow-sm ${
                    halloween
                      ? 'border border-orange-400/30 bg-white/5 text-white'
                      : 'border border-gray-200 bg-white text-gray-900'
                  }`}
                >
                  <p className={`text-lg md:text-xl font-semibold ${halloween ? 'text-orange-300' : 'text-primary'}`}>
                    {priceSummary?.trim()
                      ? priceSummary.trim()
                      : `Preis / Tag: ${price}${pricePeriod}`}
                  </p>
                  {secondaryPrice && (
                    <p className={`mt-2 text-base md:text-lg ${halloween ? 'text-gray-300' : 'text-gray-600'}`}>
                      Preis / Wochenende*: {secondaryPrice}
                    </p>
                  )}
                  {priceNote && (
                    <p className="mt-3 text-xs md:text-sm text-gray-500">
                      {priceNote}
                    </p>
                  )}
                </div>
              </div>
            )}

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
