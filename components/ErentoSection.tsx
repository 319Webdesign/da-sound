import Image from 'next/image';

const ERENTO_URL =
  'https://www.erento.com/anbieter/a3ce4356-20f4-40ea-a6f8-8e919aa880a5';

export default function ErentoSection() {
  return (
    <section
      aria-labelledby="erento-heading"
      className="bg-white py-10 md:py-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 rounded-2xl border border-gray-100 bg-gray-50/70 px-6 py-8 md:px-10 md:py-8">
          <div className="text-center md:text-left max-w-xl">
            <h2
              id="erento-heading"
              className="text-xl md:text-2xl font-bold text-gray-900 mb-2"
            >
              Auch auf Erento finden
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Weitere Mietartikel und Angebote von da-sound finden Sie auch auf
              Erento.
            </p>
          </div>

          <a
            href={ERENTO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="da-sound auf Erento (öffnet in neuem Tab)"
            className="group shrink-0 rounded-xl p-3 -m-1 transition-all duration-300 hover:bg-white hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Image
              src="/images/erento_quadratisch_blau_transparent_2.png"
              alt="da-sound auf Erento"
              width={160}
              height={160}
              className="h-16 w-16 md:h-20 md:w-20 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-300"
              sizes="80px"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
