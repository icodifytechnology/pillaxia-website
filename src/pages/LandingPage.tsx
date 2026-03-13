import React from 'react';
import { HeroSlideshow } from '../components/landing/HeroSlideshow';
import { TrustSignals } from '../components/landing/TrustSignals';
import { ProblemSection } from '../components/landing/ProblemSection';
import { SolutionSection } from '../components/landing/SolutionSection';
import { PartnersSection } from '../components/landing/PartnersSection';
import { PlatformTabs } from '../components/landing/PlatformTabs';
import { CareHubSection } from '../components/landing/CareHubSection';
import { WhyPillaxia } from '../components/landing/WhyPillaxia';
import { TestimonialsSection } from '../components/landing/TestimonialsSection';
import { NewsletterSection } from '../components/landing/NewsletterSection';
export function LandingPage() {
  return (
    <main className="w-full overflow-hidden">
      <HeroSlideshow />
      <TrustSignals />
      <ProblemSection />
      <SolutionSection />
      <PartnersSection />
      <PlatformTabs />
      <CareHubSection />
      <WhyPillaxia />
      <TestimonialsSection />
      <NewsletterSection />
    </main>);

}