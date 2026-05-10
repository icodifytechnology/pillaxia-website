'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blogs' },
  { name: 'Press', path: '/press' },
  { name: 'FAQ', path: '/faqs' },
  { name: 'Contact', path: '/contact' },
] as const;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#010d3e]/95 backdrop-blur-md border-b border-[#3b9eff]/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Pillaxia home">
            <Image
              src="/logo.png"
              alt="Pillaxia logo"
              width={120}
              height={48}
              priority
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                aria-current={pathname === link.path ? 'page' : undefined}
                className={`text-sm font-medium transition-colors hover:text-[#3b9eff] ${
                  pathname === link.path ? 'text-[#3b9eff]' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              as="a"
              href={process.env.NEXT_PUBLIC_APP_URL || 'https://app.pillaxia.com'}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
            >
              Sign in
            </Button>
            <Button as={Link} href="/book-demo" size="sm">
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-[#3b9eff]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#010d3e] border-t border-[#3b9eff]/20 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  aria-current={pathname === link.path ? 'page' : undefined}
                  className="text-lg font-medium text-white py-2 border-b border-white/5"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Button
                  as="a"
                  href={process.env.NEXT_PUBLIC_APP_URL || 'https://app.pillaxia.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  className="w-full"
                >
                  Sign in
                </Button>
                <Button as={Link} href="/book-demo" className="w-full">
                  Book a Demo
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}