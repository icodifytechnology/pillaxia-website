import React from 'react';
import { TwitterIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import Link from 'next/link';
const LOGO_URL = '/logo.png';
function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>);

}
function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M3.18 23.76c.3.17.64.22.98.15l13.5-7.76-2.9-2.9-11.58 10.51zM.54 1.57C.2 1.9 0 2.43 0 3.12v17.76c0 .69.2 1.22.54 1.55l.08.08 9.95-9.95v-.23L.62 1.49l-.08.08zM20.1 10.7l-2.83-1.63-3.17 3.17 3.17 3.17 2.85-1.64c.81-.47.81-1.23-.02-1.7v.03zM4.16.24L17.67 8c.82.48.82 1.24 0 1.72l-2.9 2.9-3.17-3.17L4.16.24z" />
    </svg>);

}
export function Footer() {
  return (
    <footer className="bg-[#010d3e] pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,_rgba(59,158,255,0.4)_0%,_transparent_50%),_radial-gradient(circle_at_80%_50%,_rgba(236,72,153,0.3)_0%,_transparent_50%)]"></div>
      </div>
      <div className="absolute top-0 left-0 right-0 neon-line" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <img src={LOGO_URL} alt="Pillaxia" className="h-10 w-auto" />
            </Link>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              Reimagining chronic care, together. Bridging patients, clinicians,
              families, and pharmacies through one trusted care platform.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-[#3b9eff] hover:bg-[#3b9eff]/20 transition-all">

                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-[#3b9eff] hover:bg-[#3b9eff]/20 transition-all">

                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@pillaxia.app"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-[#3b9eff] hover:bg-[#3b9eff]/20 transition-all">

                <MailIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-4">
              {[
                {
                  to: '/about',
                  label: 'About Us'
                },
                {
                  to: '/press',
                  label: 'Press & Media'
                },
                {
                  to: '/blog',
                  label: 'Blog & Insights'
                },
                {
                  to: '/contact',
                  label: 'Contact'
                }].
                map(({ to, label }) =>
                  <li key={to}>
                    <Link
                      href={to}
                      className="text-slate-400 hover:text-[#3b9eff] transition-colors">

                      {label}
                    </Link>
                  </li>
                )}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-white mb-6">Legal</h3>
            <ul className="space-y-4">
              {[
                {
                  to: '/privacy',
                  label: 'Privacy Policy'
                },
                {
                  to: '/terms',
                  label: 'Terms of Service'
                },
                {
                  to: '/cookies',
                  label: 'Cookie Policy'
                },
                {
                  to: '/sitemap',
                  label: 'Sitemap'
                }].
                map(({ to, label }) =>
                  <li key={to}>
                    <Link
                      href={to}
                      className="text-slate-400 hover:text-[#3b9eff] transition-colors">

                      {label}
                    </Link>
                  </li>
                )}
            </ul>
          </div>

          {/* Download Column */}
          <div>
            <h3 className="font-semibold text-white mb-2">Get the App</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Your care companion, always in your pocket.
            </p>

            <div className="flex flex-col gap-3">
              {/* App Store */}
              <a
                href="https://apps.apple.com/app/pillaxia/id6520385747"
                target="_blank"
                className="group flex items-center gap-3 bg-white/5 border border-white/10 hover:border-[#3b9eff]/50 text-white rounded-2xl px-4 py-3 transition-all duration-200 hover:shadow-[0_0_15px_rgba(59,158,255,0.2)] hover:-translate-y-0.5">

                <AppleIcon />
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 leading-none mb-0.5">
                    Download on the
                  </span>
                  <span className="text-[14px] font-semibold leading-none">
                    App Store
                  </span>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="https://play.google.com/store/apps/details?id=com.icodify.pillaxia"
                target="_blank"
                className="group flex items-center gap-3 bg-white/5 border border-white/10 hover:border-[#3b9eff]/50 text-white rounded-2xl px-4 py-3 transition-all duration-200 hover:shadow-[0_0_15px_rgba(59,158,255,0.2)] hover:-translate-y-0.5">

                <GooglePlayIcon />
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 leading-none mb-0.5">
                    Get it on
                  </span>
                  <span className="text-[14px] font-semibold leading-none">
                    Google Play
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Pillaxia. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm">
            Made with care for better healthcare.
          </p>
        </div>
      </div>
    </footer>);

}