'use client'

import StatisticsCards from '@/components/navbar/home/statistics-cards'
import Navigation from '@/components/navbar/nav'
import { useTheme } from 'next-themes'

export default function Home() {
  const { theme } = useTheme()

  const bgColor = theme === 'dark' ? 'bg-black/60' : 'bg-slate-100'
  return (
    <div className={`${bgColor} relative min-h-screen`}>
      <Navigation />
      {/* Statistics cards */}
      <StatisticsCards />
    </div>
  )
}
