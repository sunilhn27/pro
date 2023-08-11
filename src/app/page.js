import HeroSection from '@/components/HeroSection'
import Services from '@/components/Services'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='font-sans '>
      <HeroSection />
      <Services />
    </main>
  )
}
