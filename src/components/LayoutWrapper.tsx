'use client'

import { usePathname } from 'next/navigation'
import { TopBar } from './TopBar'
import { Footer } from './Footer'
import Navbar from './Navbar'

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hideLayout = pathname === '/login'

  return (
    <>
      {!hideLayout && <TopBar />}
      {!hideLayout && <Navbar />}
      
      <main>{children}</main>
      
      {!hideLayout && <Footer />}
    </>
  )
}