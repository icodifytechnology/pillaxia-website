'use client'

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from
  'lucide-react';
import Image from 'next/image';
export function Footer() {
  return (
    <footer className="bg-[#252872] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="text-3xl font-extrabold tracking-tight">
              <Image
                src="/logo-white.png"
                alt="GyanSewa"
                width={140}
                height={60}
                className="h-12 w-auto sm:h-16 object-contain"
                priority
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering students and educators across Nepal with accessible,
              high-quality digital learning resources.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) =>
                <a
                  key={i}
                  href="#"
                  className="bg-white/10 hover:bg-[#d91f22] p-2 rounded-full transition-colors duration-300">

                  <Icon className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-[#d91f22] inline-block pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                'About Us',
                'Our Courses',
                'Instructors',
                'Success Stories',
                'Privacy Policy',
                'Terms of Service'].
                map((item) =>
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#d91f22] hover:pl-2 transition-all duration-300 flex items-center">

                      <span className="w-1.5 h-1.5 bg-[#d91f22] rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>
                      {item}
                    </a>
                  </li>
                )}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-[#d91f22] inline-block pb-2">
              Categories
            </h3>
            <ul className="space-y-3">
              {[
                'Loksewa Preparation',
                'Entrance Exams',
                'IELTS / TOEFL',
                'CMAT / KUUMAT',
                'Bridge Course',
                'IT Training'].
                map((item) =>
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#d91f22] hover:pl-2 transition-all duration-300">

                      {item}
                    </a>
                  </li>
                )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-[#d91f22] inline-block pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#d91f22] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Kathmandu, Nepal
                  <br />
                  Bagmati Province
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-[#d91f22] mr-3 flex-shrink-0" />
                <span className="text-gray-300">+977 9848459849</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-[#d91f22] mr-3 flex-shrink-0" />
                <span className="text-gray-300">info@gyansewa.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} GyanSewa Education Platform. All
            rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>);

}