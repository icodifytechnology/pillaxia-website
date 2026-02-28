'use client'

import { Mail, Phone, Facebook, Youtube, Instagram } from 'lucide-react';

export function TopBar() {
  return (
    <div className="hidden md:flex w-full bg-[#252872] text-white py-2 px-4 justify-between items-center text-sm font-medium border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <div className="flex items-center space-x-6">
          <a href="mailto:info@gyansewa.com" className="flex items-center hover:text-[#d91f22] transition-colors">
            <Mail className="w-4 h-4 mr-2" />
            <span>info@gyansewa.com</span>
          </a>
          <a href="tel:+9779848459849" className="flex items-center hover:text-[#d91f22] transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            <span>+977 9848459849</span>
          </a>
        </div>

        <div className="flex items-center space-x-4">

          <div className="flex items-center space-x-2">
            <a href="https://www.facebook.com/people/G-Sewa/61585401110025" target="_blank" rel="noopener noreferrer"
              className="w-7 h-7 rounded-md flex items-center justify-center bg-white/8 hover:bg-[#d91f22] transition-all duration-200">
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <div className="w-px h-4 bg-white/20" />
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
              className="w-7 h-7 rounded-md flex items-center justify-center bg-white/8 hover:bg-[#d91f22] transition-all duration-200">
              <Youtube className="w-3.5 h-3.5" />
            </a>
            <div className="w-px h-4 bg-white/20" />
            <a href="https://www.instagram.com/g_sewa.np" target="_blank" rel="noopener noreferrer"
              className="w-7 h-7 rounded-md flex items-center justify-center bg-white/8 hover:bg-[#d91f22] transition-all duration-200">
              <Instagram className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}