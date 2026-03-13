import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { SectionHeading } from '../components/ui/SectionHeading';
export function SitemapPage() {
  const links = [
  {
    category: 'Main',
    items: [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About Us',
      path: '/about'
    },
    {
      name: 'Contact',
      path: '/contact'
    }]

  },
  {
    category: 'Resources',
    items: [
    {
      name: 'Blog & Insights',
      path: '/blog'
    },
    {
      name: 'Press & Media',
      path: '/press'
    }]

  },
  {
    category: 'Legal',
    items: [
    {
      name: 'Privacy Policy',
      path: '/privacy'
    },
    {
      name: 'Terms of Service',
      path: '/terms'
    },
    {
      name: 'Cookie Policy',
      path: '/cookies'
    }]

  },
  {
    category: 'Actions',
    items: [
    {
      name: 'Book a Demo',
      path: '/book-demo'
    },
    {
      name: 'Sign In',
      path: '/contact'
    }]

  }];

  return (
    <main className="pt-32 pb-20 min-h-[70vh]">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <SectionHeading title="Sitemap" centered={false} />

        <AnimatedSection className="grid md:grid-cols-2 gap-12">
          {links.map((section, i) =>
          <div key={i}>
              <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, j) =>
              <li key={j}>
                    <Link
                  to={item.path}
                  className="text-slate-600 hover:text-brand-600 font-medium transition-colors">
                  
                      {item.name}
                    </Link>
                  </li>
              )}
              </ul>
            </div>
          )}
        </AnimatedSection>
      </div>
    </main>);

}