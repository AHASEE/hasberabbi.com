'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black/90 py-3">
        <div className="container mx-auto px-4 flex flex-col items-center gap-2 text-sm md:flex-row md:justify-between md:items-center">
          <div className="text-center md:text-left">
            📍 Serving Clients Across Pakistan Since 2013
          </div>
          <div className="flex flex-col items-center gap-1 md:flex-row md:gap-4 md:items-center">
            <a href="mailto:haseebclubi33@gmail.com" className="flex items-center gap-1 hover:text-accent transition">
              ✉️ <span className="break-all">haseebclubi33@gmail.com</span>
            </a>
            <a href="tel:+923313954965" className="flex items-center gap-1 hover:text-accent transition">
              📞 <span>+92 331 3954965</span>
            </a>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-emerald-50 border-b-2 border-primary-light py-4">
        <div className="container mx-auto px-4 flex justify-around items-center flex-wrap gap-4 text-sm font-semibold text-primary-dark">
          <div className="flex items-center gap-2"><span>🏆</span> Ministry Approved MRA/423</div>
          <div className="flex items-center gap-2"><span>⭐</span> 4.9/5 (892 Reviews)</div>
          <div className="flex items-center gap-2"><span>📺</span> Featured on Geo News</div>
          <div className="flex items-center gap-2"><span>✅</span> 100% Visa Approval</div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/98 backdrop-blur-lg sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Hasb-e-Rabbi Travels & Tours"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <h1 className="text-lg font-extrabold leading-none whitespace-nowrap bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                  Hasb-e-Rabbi
                </h1>
                <span className="text-xs font-semibold whitespace-nowrap bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">
                  Travels & Tours
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-4">
              <Link href="/" className="text-amber-600 font-semibold hover:text-gray-700 transition whitespace-nowrap">
                Home
              </Link>
              <Link href="/umrah-packages" className="text-gray-700 hover:text-primary font-medium transition whitespace-nowrap">
                Umrah Packages
              </Link>
              <Link href="/hajj-packages" className="text-gray-700 hover:text-primary font-medium transition whitespace-nowrap">
                Hajj Packages
              </Link>
              <Link href="/visa-services" className="text-gray-700 hover:text-primary font-medium transition whitespace-nowrap">
                Visa Services
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-primary font-medium transition whitespace-nowrap">
                Blog
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <a href="tel:+923313954965"
                className="bg-primary text-white px-4 py-2 rounded-full font-semibold hover:bg-primary-light transition whitespace-nowrap text-sm flex-shrink-0">
                📞 +92 331 3954965
              </a>
            </nav>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-3xl text-primary-dark"
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 flex flex-col gap-4 border-t">
              <Link href="/" className="text-gray-700 font-bold hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/umrah-packages" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>
                Umrah Packages
              </Link>
              <Link href="/hajj-packages" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>
                Hajj Packages
              </Link>
              <Link href="/visa-services" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>
                Visa Services
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <a href="tel:+923313954965" className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold text-center whitespace-nowrap">
                📞 +92 331 3954965
              </a>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}