
import { HeroSection } from '../components/HeroSection'
import { StatsSection } from '../components/StatsSection'
import { PartnersSection } from '../components/PartnersSection'
import { CategoriesSection } from '../components/CategoriesSection'
import { AdBanner } from '../components/AdBanner'
import { QuizzesSection } from '../components/QuizzesSection'
import { ImageGallery } from '../components/ImageGallery'
import { NoticesSection } from '../components/NoticesSection'
import { VideoGrid } from '../components/VideoGrid'
import { Newsletter } from '../components/Newsletter'
export function HomePage() {
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
