'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface NavLink {
  label: string;
  href: string;
}

interface HeaderNavProps {
  logo: string;
  logoImage?: string;
  links: NavLink[];
}

export default function HeaderNav({ logo, logoImage, links }: HeaderNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-bg border-b border-divider">
      <div className="max-w-7xl mx-auto px-s-6">
        <div className="flex justify-between items-center h-20 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="flex items-center">
              <Image
                src="/images/elle-logo.png"
                alt="Elle Restaurant & Lounge"
                width={160}
                height={80}
                className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300 filter invert"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-s-8" role="navigation" aria-label="Main navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-link hover:text-link-hover transition-colors duration-300 font-medium uppercase tracking-wider text-sm ${
                  pathname === link.href ? 'text-accent-1' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-ink focus:outline-none focus:ring-2 focus:ring-accent-1 p-2"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute top-0 left-0 w-6 h-0.5 bg-ink transition-all duration-300 ${
                  isOpen ? 'rotate-45 top-2.5' : ''
                }`}
              />
              <span
                className={`absolute top-2.5 left-0 w-6 h-0.5 bg-ink transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute top-5 left-0 w-6 h-0.5 bg-ink transition-all duration-300 ${
                  isOpen ? '-rotate-45 top-2.5' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={closeMenu}
        >
          <nav
            id="mobile-menu"
            className="fixed right-0 top-0 h-full w-80 max-w-sm bg-brand-bg shadow-xl mobile-menu-enter"
            role="navigation"
            aria-label="Mobile navigation"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full pt-20 px-s-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-s-4 text-link hover:text-link-hover transition-colors duration-300 font-medium uppercase tracking-wider border-b border-divider ${
                    pathname === link.href ? 'text-accent-1' : ''
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}