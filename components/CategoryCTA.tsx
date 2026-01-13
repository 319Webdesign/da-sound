'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { data } from '@/lib/data';

interface CategoryCTAProps {
  title: string;
}

export default function CategoryCTA({ title }: CategoryCTAProps) {
  const whatsappLink = `https://wa.me/${data.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hallo, ich interessiere mich für: ${title}`)}`;

  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark py-16 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Interesse an {title}?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für ein individuelles Angebot. Wir beraten Sie gerne und finden die perfekte Lösung für Ihre Veranstaltung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Jetzt anfragen via WhatsApp
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-xl font-semibold transition-all"
            >
              Weitere Kontaktmöglichkeiten
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
