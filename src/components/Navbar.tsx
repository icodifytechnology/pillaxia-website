'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ChevronRight, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigate = (path: string) => {
    router.push(path)
    setIsOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const NavItem = ({ to, label }: { to: string; label: string }) => (
    <Link
      href={to}
      className={`font-medium relative group transition-colors ${
        pathname === to
          ? 'text-[#d91f22]'
          : 'text-[#252872] hover:text-[#d91f22]'
      }`}
    >
      {label}
      <span
        className={`absolute -bottom-1 left-0 h-0.5 bg-[#d91f22] transition-all duration-300 
        ${
          pathname === to ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      />
    </Link>
  )

  const MobileNavItem = ({ to, label }: { to: string; label: string }) => (
    <button
      onClick={() => handleNavigate(to)}
      className={`flex items-center justify-between text-lg font-medium py-3 border-b border-gray-100 ${
        pathname === to ? 'text-[#d91f22]' : 'text-[#252872]'
      }`}
    >
      {label}
      <ChevronRight className="w-5 h-5 opacity-50" />
    </button>
  )

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
            : 'bg-white py-5'
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('/')}
            className="flex items-center"
          >
            <Image
              src="/logo.png"
              alt="GyanSewa"
              width={140}
              height={60}
              className="h-12 w-auto sm:h-16 object-contain"
              priority
            />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavItem to="/" label="Home" />
            <NavItem to="/loksewa" label="Loksewa" />
            <NavItem to="/entrance" label="Entrance" />
            <NavItem to="/institutes" label="Institutes" />
            <NavItem to="/blog" label="Blog" />
            <NavItem to="/about" label="About Us" />
            <NavItem to="/contact" label="Contact" />
          </div>

          {/* CTA / Profile */}
          <div className="hidden md:block">
            {pathname === '/profile' ? (
              <button
                onClick={() => handleNavigate('/profile')}
                className="w-10 h-10 bg-[#252872] text-white rounded-full flex items-center justify-center hover:bg-[#d91f22] transition shadow-md"
              >
                <User className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={() => handleNavigate('/login')}
                className="bg-[#d91f22] hover:bg-[#b91c1c] text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#252872] p-2"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-[60] md:hidden backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-[70] shadow-2xl md:hidden flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="p-6 flex justify-between items-center border-b">
                <Image
                  src="/logo.png"
                  alt="GyanSewa"
                  width={100}
                  height={40}
                />
                <button onClick={() => setIsOpen(false)}>
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
                <MobileNavItem to="/" label="Home" />
                <MobileNavItem to="/loksewa" label="Loksewa" />
                <MobileNavItem to="/entrance" label="Entrance" />
                <MobileNavItem to="/blog" label="Blog" />
                <MobileNavItem to="/institutes" label="Institutes" />
                <MobileNavItem to="/about" label="About Us" />
                <MobileNavItem to="/contact" label="Contact" />
                <MobileNavItem to="/profile" label="My Profile" />

                <button
                  onClick={() => handleNavigate('/login')}
                  className="mt-8 w-full bg-[#d91f22] text-white py-4 rounded-xl font-bold shadow-lg active:scale-95 transition"
                >
                  Login / Sign Up
                </button>
              </div>

              <div className="p-6 bg-gray-50 text-xs text-center text-gray-500">
                © 2026 GyanSewa Nepal. All rights reserved.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
