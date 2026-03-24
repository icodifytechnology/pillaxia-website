import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const LOGO_URL = '/logo.png';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname()
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);
  const navLinks = [
    {
      name: 'Home',
      path: '/#home'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Blog',
      path: '/blog'
    },
    {
      name: 'Press',
      path: '/press'
    },
    {
      name: 'Contact',
      path: '/contact'
    }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#010d3e]/95 backdrop-blur-md border-b border-[#3b9eff]/10 py-3' : 'bg-transparent py-5'}`}>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src={LOGO_URL}
              alt="Pillaxia"
              className="h-10 md:h-12 w-auto" />

          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#3b9eff] ${pathname === link.path ? 'text-[#3b9eff]' : 'text-slate-300'}`}>

                {link.name}
              </Link>
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button as={Link} href="/contact" variant="outline" size="sm">
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
            aria-label="Toggle menu">

            {isMobileMenuOpen ?
              <XIcon className="w-6 h-6" /> :

              <MenuIcon className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
          <motion.div
            initial={{
              opacity: 0,
              height: 0
            }}
            animate={{
              opacity: 1,
              height: 'auto'
            }}
            exit={{
              opacity: 0,
              height: 0
            }}
            className="md:hidden bg-[#010d3e] border-t border-[#3b9eff]/20 overflow-hidden">

            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) =>
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-lg font-medium text-white py-2 border-b border-white/5">

                  {link.name}
                </Link>
              )}
              <div className="flex flex-col gap-3 mt-4">
                <Button
                  as={Link}
                  href="/contact"
                  variant="outline"
                  className="w-full">

                  Sign in
                </Button>
                <Button as={Link} href="/book-demo" className="w-full">
                  Book a Demo
                </Button>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}