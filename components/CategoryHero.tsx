'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Package, 
  Speaker, 
  Sliders, 
  Lightbulb, 
  Sparkles, 
  Mic, 
  Cloud, 
  Monitor, 
  Zap, 
  Settings, 
  Layers, 
  Boxes,
} from 'lucide-react';

interface CategoryHeroProps {
  title: string;
  description: string;
  image: string;
  iconName: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'Package': Package,
  'Speaker': Speaker,
  'Sliders': Sliders,
  'Lightbulb': Lightbulb,
  'Sparkles': Sparkles,
  'Mic': Mic,
  'Cloud': Cloud,
  'Monitor': Monitor,
  'Zap': Zap,
  'Settings': Settings,
  'Layers': Layers,
  'Boxes': Boxes,
};

export default function CategoryHero({ title, description, image, iconName }: CategoryHeroProps) {
  const IconComponent = iconMap[iconName] || Package;

  return (
    <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10" />
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="100vw"
        quality={80}
        priority
        fetchPriority="high"
      />
      <div className="relative z-20 h-full flex items-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
          <Link
            href="/#miet-kategorien"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zu allen Kategorien
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {title}
            </h1>
          </motion.div>
          <p className="text-xl text-white/90 max-w-3xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
