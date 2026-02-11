
'use client'

import { HeroSection } from '../src/components/HeroSection'
import { StatsSection } from '../src/components/StatsSection'
import { PartnersSection } from '../src/components/PartnersSection'
import { CategoriesSection } from '../src/components/CategoriesSection'
import { AdBanner } from '../src/components/AdBanner'
import { QuizzesSection } from '../src/components/QuizzesSection'
import { ImageGallery } from '../src/components/ImageGallery'
import { NoticesSection } from '../src/components/NoticesSection'
import { VideoGrid } from '../src/components/VideoGrid'
import { Newsletter } from '../src/components/Newsletter'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <PartnersSection />
      <CategoriesSection />
      <AdBanner />
      <QuizzesSection />
      <ImageGallery />
      <NoticesSection />
      <VideoGrid />
      <Newsletter />
    </main>
  )
}
