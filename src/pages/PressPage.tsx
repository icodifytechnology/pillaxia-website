import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedItem } from '../components/ui/AnimatedSection';
import { Button } from '../components/ui/Button';
import {
  DownloadIcon,
  MicIcon,
  ArrowLeftIcon,
  ExternalLinkIcon } from
'lucide-react';
import { usePressReleases } from '../lib/api';
const LOGO_URL = "/logo.webp";

export function PressPage() {
  const [activeTab, setActiveTab] = useState('Press Releases');
  const { data: pressReleases, isLoading } = usePressReleases();
  const tabs = ['Press Releases', 'News & Coverage', 'Events'];
  const filteredReleases =
  pressReleases?.filter((pr) => pr.tab === activeTab) || [];
  return (
    <main className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="mb-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-brand-700 transition-colors mb-8">
            
            <ArrowLeftIcon className="w-4 h-4 mr-2" /> Back
          </Link>
          <AnimatedSection>
            <span className="inline-block text-accent-500 uppercase tracking-widest text-sm font-bold mb-4">
              NEWSROOM
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-900 mb-6">
              Press & Media
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
              News, press releases, and media coverage about Pillaxia's mission
              to transform chronic care.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="flex items-center justify-center gap-2">
                <DownloadIcon className="w-4 h-4" /> Download Media Kit
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 bg-white">
                
                <MicIcon className="w-4 h-4 text-accent-500" /> Press Enquiries:
                press@pillaxia.com
              </Button>
            </div>
          </AnimatedSection>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-full border border-slate-200 inline-flex shadow-sm">
            {tabs.map((tab) =>
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === tab ? 'bg-slate-50 text-brand-900 shadow-sm border border-slate-100' : 'text-slate-500 hover:text-brand-700'}`}>
              
                {tab}
              </button>
            )}
          </div>
        </div>

        {/* Content List */}
        <div className="space-y-6 mb-24">
          {isLoading ?
          <div className="text-center py-12 text-slate-500">
              Loading press releases...
            </div> :
          filteredReleases.length > 0 ?
          <AnimatedSection stagger className="space-y-6">
              {filteredReleases.map((item) =>
            <AnimatedItem key={item.id}>
                  <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow group">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm text-slate-500">
                        {item.date}
                      </span>
                      <span className="text-xs font-bold text-accent-500 bg-accent-500/10 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-900 mb-3 group-hover:text-accent-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <a
                  href="#"
                  className="inline-flex items-center text-sm font-bold text-accent-500 hover:text-accent-600 transition-colors">
                  
                      Read full release{' '}
                      <ExternalLinkIcon className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </AnimatedItem>
            )}
            </AnimatedSection> :

          <div className="text-center py-12 bg-white rounded-2xl border border-slate-100">
              <p className="text-slate-500">
                No items found for this category.
              </p>
            </div>
          }
        </div>

        {/* Brand Assets */}
        <AnimatedSection>
          <h3 className="text-2xl font-bold text-brand-900 mb-8 text-center">
            Brand Assets
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-sm">
              <div className="h-24 flex items-center justify-center mb-6">
                <img
                  src={LOGO_URL}
                  alt="Pillaxia Logo"
                  className="h-12 w-auto" />
                
              </div>
              <h4 className="font-bold text-brand-900 mb-2">Primary Logo</h4>
              <p className="text-sm text-slate-500 mb-6">
                For use on light backgrounds
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Download SVG
              </Button>
            </div>
            <div className="bg-brand-900 p-8 rounded-2xl flex flex-col items-center text-center shadow-sm">
              <div className="h-24 flex items-center justify-center mb-6">
                <img
                  src={LOGO_URL}
                  alt="Pillaxia Logo"
                  className="h-12 w-auto brightness-0 invert" />
                
              </div>
              <h4 className="font-bold text-white mb-2">Secondary Logo</h4>
              <p className="text-sm text-white/60 mb-6">
                For use on dark backgrounds
              </p>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-white/30 text-white hover:bg-white/10">
                
                Download SVG
              </Button>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-sm">
              <div className="flex gap-3 mb-6 h-24 items-center">
                <div className="w-10 h-10 rounded-full bg-[#040f4b] shadow-inner"></div>
                <div className="w-10 h-10 rounded-full bg-[#0a1a6b] shadow-inner"></div>
                <div className="w-10 h-10 rounded-full bg-[#25affc] shadow-inner"></div>
              </div>
              <h4 className="font-bold text-brand-900 mb-2">Color Palette</h4>
              <p className="text-sm text-slate-500 mb-6">
                Brand colors and guidelines
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Download PDF
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>);

}