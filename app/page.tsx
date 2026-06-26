import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Timeline from "@/components/timeline"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
    </div>
  )
}
