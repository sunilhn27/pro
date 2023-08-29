import Contact from '@/components/Contact'
import CssUnits from '@/components/CssUnits'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Services from '@/components/Services'

export default function Home() {
  return (
    <main className='font-sans ' >
      <Hero />
      <Services />
      <Experience />
      <Projects/>
      <Contact />
    </main>
  )
}
