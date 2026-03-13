import React from 'react';
import { UsersIcon, EyeIcon, HeartIcon } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '../ui/AnimatedSection';
export function CareHubSection() {
  return (
    <section className="py-24 bg-brand-900 relative overflow-hidden text-white">
      {/* Background patterns */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
          'radial-gradient(circle at 20% 50%, rgba(37,175,252,0.8) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(37,175,252,0.6) 0%, transparent 50%)'
        }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent-400 uppercase tracking-widest text-sm font-bold mb-4">
            CAREHUB
          </span>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Care Is a Team Sport—CareHub Makes It Visible
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            CareHub enables shared care coordination between patients,
            clinicians, and trusted supporters.
          </p>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          <p className="text-center text-lg text-white/90 font-medium mb-10">
            With clear permissions and auditability, CareHub allows:
          </p>

          <AnimatedSection stagger className="grid md:grid-cols-3 gap-6 mb-16">
            {[
            {
              icon: <UsersIcon className="w-8 h-8 text-accent-400" />,
              text: 'Families to support without overstepping'
            },
            {
              icon: <EyeIcon className="w-8 h-8 text-accent-400" />,
              text: "Clinicians to see who's involved in care"
            },
            {
              icon: <HeartIcon className="w-8 h-8 text-accent-400" />,
              text: 'Patients to feel held, not watched'
            }].
            map((item, i) =>
            <AnimatedItem key={i}>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl h-full flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-white/5 rounded-full">
                    {item.icon}
                  </div>
                  <p className="text-lg font-medium text-white">{item.text}</p>
                </div>
              </AnimatedItem>
            )}
          </AnimatedSection>

          <AnimatedSection className="text-center">
            <p className="text-2xl font-bold text-accent-400">
              This is how healthcare becomes connected, not chaotic.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>);

}