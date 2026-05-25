import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Positioning from '@/components/Positioning'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import CareerFocus from '@/components/CareerFocus'
import Education from '@/components/Education'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Positioning />
      <Experience />
      <Skills />
      <Projects />
      <CareerFocus />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
