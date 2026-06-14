import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/sections/Projects"
import Education from "@/components/sections/Education"
import Leadership from "@/components/sections/Leadership"
import Achievements from "@/components/sections/Achievements"
import GithubStats from "@/components/sections/GithubStats"
import Contact from "@/components/sections/Contact"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Leadership />
      <Achievements />
      <GithubStats />
      <Contact />
    </>
  )
}
