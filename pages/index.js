import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar/NavBar'
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import Skill from '@/components/Skill/Skill'
import Service from '@/components/Service/Service'
import Project from '@/components/Project/Project'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import { useState } from 'react'
import Sidebar from '@/components/common/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <header>
          <NavBar toggleSidebar={toggleSidebar} />
      </header>
      <main className={` ${inter.className} bg-gradient-to-b from-zinc-200 backdrop-blur-2xl`}>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <Hero />
        <About />
        <Service />
        <Skill />
        <Project />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
   
  )
}
