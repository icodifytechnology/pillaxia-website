import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedItem } from '../components/ui/AnimatedSection';
import { Button } from '../components/ui/Button';
import { ArrowLeftIcon, ExternalLinkIcon } from 'lucide-react';
import { usePressReleases } from '../lib/api';
const LOGO_URL = "/new-logo_(1).webp";

const UNSPLASH_IMAGES = [
'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80'];

const getCardImage = (id: any) => {
  const index = Math.abs(parseInt(String(id), 10) || 0) % UNSPLASH_IMAGES.length;
  return UNSPLASH_IMAGES[index];
};
export function PressPage() {
  const [activeTab, setActiveTab] = useState('Press Releases');
  const { data: pressReleases, isLoading } = usePressReleases();
  const tabs = ['Press Releases', 'News & Coverage', 'Events'];
  const filteredReleases =
  pressReleases?.filter((pr) => pr.tab === activeTab) ?? [];
  return (
    <main className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Back Link */}
        <div className="mb-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-brand-700 transition-colors mb-8">
            
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back
          </Link>
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
              {filteredReleases.map((item: any) =>
            <AnimatedItem key={item.id}>
                  <div className="bg-white rounded-2xl border border-slate-100 hover:shadow-md transition-shadow group overflow-hidden">
                    {/* Card Image */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                    src={item.image ?? getCardImage(item.id)}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = getCardImage(item.id);
                    }} />
                  
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                      {item.category &&
                  <span className="absolute top-4 left-4 text-xs font-bold text-accent-500 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                  }
                    </div>

                    {/* Card Body */}
                    <div className="p-8">
                      {item.date &&
                  <p className="text-sm text-slate-500 mb-3">
                          {item.date}
                        </p>
                  }
                      <h3 className="text-xl font-bold text-brand-900 mb-3 group-hover:text-accent-500 transition-colors">
                        {item.title}
                      </h3>
                      {item.excerpt &&
                  <p className="text-slate-600 mb-6 leading-relaxed">
                          {item.excerpt}
                        </p>
                  }
                      <a
                    href={item.url ?? '#'}
                    className="inline-flex items-center text-sm font-bold text-accent-500 hover:text-accent-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer">
                    
                        Read full release
                        <ExternalLinkIcon className="w-4 h-4 ml-1" />
                      </a>
                    </div>
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
            {/* Primary Logo */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-sm">
              <div className="h-24 flex items-center justify-center mb-6">
                <img
                  src={LOGO_URL}
                  alt="Primary Logo"
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

            {/* Secondary Logo */}
            <div className="bg-brand-900 p-8 rounded-2xl flex flex-col items-center text-center shadow-sm">
              <div className="h-24 flex items-center justify-center mb-6">
                <img
                  src={LOGO_URL}
                  alt="Secondary Logo"
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

            {/* Color Palette */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-sm">
              <div className="flex gap-3 mb-6 h-24 items-center">
                <div className="w-10 h-10 rounded-full bg-[#040f4b] shadow-inner" />
                <div className="w-10 h-10 rounded-full bg-[#0a1a6b] shadow-inner" />
                <div className="w-10 h-10 rounded-full bg-[#25affc] shadow-inner" />
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