'use client'

import { Mail, Phone } from 'lucide-react';
export function TopBar() {
  return (
    <div className="hidden md:flex w-full bg-[#252872] text-white py-2 px-4 justify-between items-center text-sm font-medium border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <div className="flex items-center space-x-6">
          <a
            href="mailto:info@gyansewa.com"
            className="flex items-center hover:text-[#d91f22] transition-colors">

            <Mail className="w-4 h-4 mr-2" />
            <span>info@gyansewa.com</span>
          </a>
          <a
            href="tel:+9779848459849"
            className="flex items-center hover:text-[#d91f22] transition-colors">

            <Phone className="w-4 h-4 mr-2" />
            <span>+977 9848459849</span>
          </a>
        </div>
        <div className="flex items-center space-x-4 text-xs opacity-80">
          <span>Kathmandu, Nepal</span>
          <span>|</span>
          <span>Est. 2024</span>
        </div>
      </div>
    </div>);

}