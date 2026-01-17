'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileNavigation from '@/components/MobileNavigation';

export default function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/ueber-uns', label: 'Über uns' },
    { href: '/liefergebiet', label: 'Liefergebiet' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <>
      <header className="border-b border-gray-100 fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center" prefetch={true}>
            <Image
              src="/images/logo.svg"
              alt="da-sound Logo"
              width={50}
              height={50}
              className="h-[50px] w-auto"
              style={{
                imageRendering: '-webkit-optimize-contrast',
              }}
              quality={100}
              priority
              sizes="50px"
            />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || 
                  (link.href !== '/' && pathname?.startsWith(link.href));
                
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={true}
                    className={`text-base font-medium transition-colors ${
                      isActive
                        ? 'text-primary'
                        : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Navigation */}
            <MobileNavigation />
          </div>
        </nav>
      </header>
      {/* Spacer für fixed Navigation */}
      <div className="h-[104px]"></div>
    </>
  );
}
