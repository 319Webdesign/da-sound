'use client';

import { motion, type MotionProps } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { DEFAULT_BLUR_DATA_URL } from '@/lib/blurDataUrl';
import GoogleRatingBadge from './GoogleRatingBadge';

interface HeroProps {
  headline: string;
  highlight: string;
  images: Array<{ 
    id: number; 
    url: string; 
    alt: string; 
    type: 'speaker' | 'lightshow' | 'live-event';
    position: 'A' | 'B' | 'C';
  }>;
  socialProof: { eventsCount: number; region: string };
}

export default function Hero({ headline, highlight, images, socialProof }: HeroProps) {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const speakerImage = images.find(img => img.type === 'speaker');
  const lightshowImage = images.find(img => img.type === 'lightshow');
  const liveEventImage = images.find(img => img.type === 'live-event');
  const mainHeroImageId = lightshowImage?.id ?? speakerImage?.id ?? liveEventImage?.id ?? images[0]?.id;
  const mobileHeroImage = lightshowImage ?? speakerImage ?? liveEventImage ?? images[0];
  void socialProof;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateDesktop = () => setIsDesktop(desktopQuery.matches);
    const updateMotion = () => setPrefersReducedMotion(motionQuery.matches);

    updateDesktop();
    updateMotion();

    desktopQuery.addEventListener('change', updateDesktop);
    motionQuery.addEventListener('change', updateMotion);

    return () => {
      desktopQuery.removeEventListener('change', updateDesktop);
      motionQuery.removeEventListener('change', updateMotion);
    };
  }, []);

  const shouldAnimate = isDesktop && !prefersReducedMotion;
  const applyMotion = (config: MotionProps) => (shouldAnimate ? config : {});
  const heroImageQuality = isDesktop ? 85 : 60;
  const mobileHeroImageQuality = isDesktop ? 85 : 55;
  const heroMinHeightClass = isDesktop ? 'min-h-[70vh]' : 'min-h-[50vh]';

  const scrollToRentalCategories = () => {
    if (typeof window !== 'undefined') {
      const rentalSection = document.getElementById('miet-kategorien');
      rentalSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-16 lg:pb-20 relative overflow-hidden ${heroMinHeightClass} md:min-h-0`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start relative">
        {/* Links: Content - 50% */}
        <motion.div
          {...applyMotion({ initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6, ease: 'easeOut' } })}
          className="space-y-8 lg:w-full relative z-10"
        >
          {/* Headline */}
          <motion.h1 
            {...applyMotion({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1, duration: 0.6 } })}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-900 leading-tight"
          >
            {headline}
          </motion.h1>
          
          {/* Highlight */}
          {highlight && (
            <motion.div
              {...applyMotion({ initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2, duration: 0.5 } })}
              className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium leading-relaxed"
            >
              {highlight}
            </motion.div>
          )}

          {/* Buttons */}
          <motion.div
            {...applyMotion({ initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3, duration: 0.5 } })}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <button
              onClick={scrollToRentalCategories}
              className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-lg"
            >
              Equipment mieten
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <Link
              href="/kontakt"
              className="group flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-primary text-gray-900 hover:text-primary px-8 py-4 rounded-xl font-semibold transition-all text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Kontakt
            </Link>
          </motion.div>

          {/* Google Rating Badge */}
          <motion.div
            {...applyMotion({ initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4, duration: 0.5 } })}
            className="pt-2"
          >
            <GoogleRatingBadge googleBusinessUrl="https://www.google.com/maps/place/?q=place_id:ChIJ5c3RqQ57vUcR790xWEv0vQo" />
          </motion.div>
        </motion.div>

        {/* Rechts: Bento-Grid - 50% */}
        <motion.div
          {...applyMotion({ initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6, ease: 'easeOut' } })}
          className="relative w-full z-0"
        >
          {isDesktop && (
            <motion.div
              {...applyMotion({ initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5, ease: 'easeOut' } })}
              className="grid grid-cols-2 gap-4"
            >
              <div className="flex flex-col gap-4">
                {/* Oben: Lautsprecher */}
                {speakerImage && (
                  <motion.div
                    {...applyMotion({ initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { delay: 0.2, duration: 0.6 } })}
                    onMouseEnter={() => setHoveredImage(speakerImage.id)}
                    onMouseLeave={() => setHoveredImage(null)}
                    className="relative aspect-square rounded-3xl overflow-hidden border border-gray-100 bg-white/50 backdrop-blur-sm group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                    style={{
                      transform: hoveredImage === speakerImage.id 
                        ? 'translateY(-8px) scale(1.02)' 
                        : 'translateY(0) scale(1)',
                    }}
                  >
              <Image
                src={speakerImage.url}
                alt={speakerImage.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out"
                style={{
                  transform: hoveredImage === speakerImage.id 
                    ? 'scale(1.1)' 
                    : 'scale(1)',
                }}
                sizes="(max-width: 1024px) 50vw, (max-width: 1280px) 25vw, 20vw"
                quality={heroImageQuality}
                priority={speakerImage.id === mainHeroImageId}
                placeholder="blur"
                blurDataURL={DEFAULT_BLUR_DATA_URL}
                onError={(e) => {
                  console.error('Failed to load image:', speakerImage.url);
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.opacity = '1';
                }}
                onLoad={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.opacity = '1';
                }}
              />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                )}

                {/* Unten: Live-Event */}
                {liveEventImage && (
                  <motion.div
                    {...applyMotion({ initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { delay: 0.3, duration: 0.6 } })}
                    onMouseEnter={() => setHoveredImage(liveEventImage.id)}
                    onMouseLeave={() => setHoveredImage(null)}
                    className="relative aspect-square rounded-3xl overflow-hidden border border-gray-100 bg-white/50 backdrop-blur-sm group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                    style={{
                      transform: hoveredImage === liveEventImage.id 
                        ? 'translateY(-8px) scale(1.02)' 
                        : 'translateY(0) scale(1)',
                    }}
                  >
                <Image
                  src={liveEventImage.url}
                  alt={liveEventImage.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out"
                  style={{
                    transform: hoveredImage === liveEventImage.id 
                      ? 'scale(1.1)' 
                      : 'scale(1)',
                  }}
                  sizes="(max-width: 1024px) 50vw, (max-width: 1280px) 25vw, 20vw"
                  quality={heroImageQuality}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={DEFAULT_BLUR_DATA_URL}
                  onError={(e) => {
                    console.error('Failed to load image:', liveEventImage.url);
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.opacity = '1';
                  }}
                  onLoad={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.opacity = '1';
                  }}
                />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                )}
              </div>

              {/* Rechts: Großes Hochformat - Lichtshow */}
              {lightshowImage && (
                <motion.div
                  {...applyMotion({ initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { delay: 0.4, duration: 0.6 } })}
                  onMouseEnter={() => setHoveredImage(lightshowImage.id)}
                  onMouseLeave={() => setHoveredImage(null)}
                  className="relative h-full rounded-3xl overflow-hidden border border-gray-100 bg-white/50 backdrop-blur-sm group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                  style={{
                    transform: hoveredImage === lightshowImage.id 
                      ? 'translateY(-8px) scale(1.02)' 
                      : 'translateY(0) scale(1)',
                  }}
                >
                    <Image
                      src={lightshowImage.url}
                      alt={lightshowImage.alt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out"
                      style={{
                        transform: hoveredImage === lightshowImage.id 
                          ? 'scale(1.1)' 
                          : 'scale(1)',
                      }}
                      sizes="(max-width: 1024px) 50vw, (max-width: 1280px) 50vw, 40vw"
                      quality={heroImageQuality}
                      priority={lightshowImage.id === mainHeroImageId}
                      placeholder="blur"
                      blurDataURL={DEFAULT_BLUR_DATA_URL}
                      onError={(e) => {
                        console.error('Failed to load image:', lightshowImage.url);
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.opacity = '1';
                      }}
                      onLoad={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.opacity = '1';
                      }}
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              )}
            </motion.div>
          )}

          {!isDesktop && mobileHeroImage && (
            <motion.div
              {...applyMotion({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2, duration: 0.6 } })}
              className="lg:hidden relative aspect-[16/9] rounded-3xl overflow-hidden border border-gray-100 bg-white/50 backdrop-blur-sm shadow-lg"
            >
              <Image
                src={mobileHeroImage.url}
                alt={mobileHeroImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={mobileHeroImageQuality}
                priority
                fetchPriority="high"
                loading="eager"
                placeholder="blur"
                blurDataURL={DEFAULT_BLUR_DATA_URL}
                onError={(e) => {
                  console.error('Failed to load image:', mobileHeroImage.url);
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.opacity = '1';
                }}
                onLoad={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.opacity = '1';
                }}
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
