'use client';

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
import { LazySection } from '@/src/components/lazy-section';

export function LandingPage() {
  return (
    <main className="w-full overflow-hidden">
      {/* ── Above the fold ── renders immediately ── */}
      <HeroSlideshow />

      <TrustSignals />

      {/* ── Below the fold ── lazy loaded (Item 4: DOM reduction) ── */}
      <LazySection minHeight="400px">
        <ProblemSection />
      </LazySection>

      <LazySection minHeight="400px">
        <SolutionSection />
      </LazySection>

      <LazySection minHeight="300px">
        <PartnersSection />
      </LazySection>

      <LazySection minHeight="500px">
        <PlatformTabs />
      </LazySection>

      <LazySection minHeight="400px">
        <CareHubSection />
      </LazySection>

      <LazySection minHeight="400px">
        <WhyPillaxia />
      </LazySection>

      <LazySection minHeight="300px">
        <TestimonialsSection />
      </LazySection>

      <LazySection minHeight="300px">
        <NewsletterSection />
      </LazySection>
    </main>
  );
}