'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function MobileNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-gray-700 hover:text-primary transition-colors"
        aria-label="Menü öffnen"
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bg-gray-900 z-40 border-t border-gray-700">
          <nav className="flex flex-col gap-0">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-white hover:bg-gray-800 transition-colors py-4 px-6 border-b border-gray-800"
            >
              Home
            </Link>
            <Link
              href="/ueber-uns"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-white hover:bg-gray-800 transition-colors py-4 px-6 border-b border-gray-800"
            >
              Über uns
            </Link>
            <Link
              href="/google-review"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-white hover:bg-gray-800 transition-colors py-4 px-6 border-b border-gray-800"
            >
              Google Reviews
            </Link>
            <Link
              href="/liefergebiet"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-white hover:bg-gray-800 transition-colors py-4 px-6 border-b border-gray-800"
            >
              Liefergebiet
            </Link>
            <Link
              href="/kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-white hover:bg-gray-800 transition-colors py-4 px-6"
            >
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
