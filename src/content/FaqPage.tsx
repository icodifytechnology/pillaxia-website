'use client';

import React, { useEffect, useState } from 'react';
import { AnimatedSection } from '../components/ui/AnimatedSection';

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqPage() {
  const [faqsData, setFaqsData] = useState<FaqItem[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://api.pillaxia.com/api/v1/faqs')
      .then((res) => res.json())
      .then((data) => {
        setFaqsData(data.result);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="pt-32 pb-20 mesh-dark min-h-screen relative">
      <div className="absolute top-0 left-0 right-0 neon-line" />

      {/* Background decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '-10%',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(59,158,255,0.07) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '15%',
            left: '-8%',
            width: '360px',
            height: '360px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(59,158,255,0.05) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        <AnimatedSection>
          {/* Header */}
          <div className="text-center mb-14">
            <p
              className="text-[#3b9eff] text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ letterSpacing: '0.18em' }}
            >
              Support
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
              Everything you need to know about Pillaxia. Can't find what you're
              looking for?{' '}
              <a
                href="/contact"
                className="text-[#3b9eff] hover:underline underline-offset-2"
              >
                Reach out to us.
              </a>
            </p>
          </div>

          {/* Loading state */}
          {loading && (
            <div className="flex flex-col gap-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/5 bg-white/[0.03] h-16 animate-pulse"
                  style={{ animationDelay: `${i * 80}ms` }}
                />
              ))}
            </div>
          )}

          {/* Error state */}
          {error && !loading && (
            <div className="text-center py-16">
              <p className="text-slate-400 text-base">
                We couldn't load the FAQs right now. Please try again later or{' '}
                <a href="/contact" className="text-[#3b9eff] hover:underline">
                  contact support
                </a>
                .
              </p>
            </div>
          )}

          {/* FAQ Accordion */}
          {!loading && !error && faqsData.length > 0 && (
            <div className="flex flex-col gap-3">
              {faqsData.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    style={{
                      borderRadius: '14px',
                      border: isOpen
                        ? '1px solid rgba(59,158,255,0.3)'
                        : '1px solid rgba(255,255,255,0.06)',
                      background: isOpen
                        ? 'rgba(59,158,255,0.05)'
                        : 'rgba(255,255,255,0.02)',
                      transition: 'border-color 0.25s ease, background 0.25s ease',
                      overflow: 'hidden',
                    }}
                  >
                    <button
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '20px 24px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                        gap: '16px',
                      }}
                    >
                      <span
                        style={{
                          color: isOpen ? '#ffffff' : '#cbd5e1',
                          fontWeight: isOpen ? 600 : 500,
                          fontSize: '1rem',
                          lineHeight: '1.5',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {item.question}
                      </span>

                      {/* Animated chevron */}
                      <span
                        style={{
                          flexShrink: 0,
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          border: isOpen
                            ? '1px solid rgba(59,158,255,0.5)'
                            : '1px solid rgba(255,255,255,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'border-color 0.25s ease, transform 0.3s ease',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 4L6 8L10 4"
                            stroke={isOpen ? '#3b9eff' : '#94a3b8'}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>

                    {/* Collapsible body */}
                    <div
                      style={{
                        maxHeight: isOpen ? '600px' : '0px',
                        overflow: 'hidden',
                        transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <div
                        style={{
                          padding: '0 24px 22px 24px',
                          color: '#94a3b8',
                          fontSize: '0.95rem',
                          lineHeight: '1.75',
                          borderTop: '1px solid rgba(255,255,255,0.05)',
                          paddingTop: '18px',
                        }}
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Empty state */}
          {!loading && !error && faqsData.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-400">No FAQs available at the moment.</p>
            </div>
          )}

          {/* Bottom CTA */}
          {!loading && !error && (
            <div
              style={{
                marginTop: '56px',
                borderRadius: '16px',
                border: '1px solid rgba(59,158,255,0.15)',
                background: 'rgba(59,158,255,0.04)',
                padding: '36px 32px',
                textAlign: 'center',
              }}
            >
              <h3 className="text-white font-semibold text-xl mb-2">
                Still have questions?
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Our team is happy to help with anything not covered above.
              </p>
              <a
                href="/contact-us"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 28px',
                  borderRadius: '8px',
                  background: '#3b9eff',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.85')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')
                }
              >
                Contact Support
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 7H12M8 3L12 7L8 11"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          )}
        </AnimatedSection>
      </div>
    </main>
  );
}