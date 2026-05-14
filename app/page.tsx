import About from './_components/about/About'
import Academic from './_components/academic/Academic'
import Hero from './_components/hero/Hero'
import Projects from './_components/projects/Projects'
import Technologies from './_components/technologies/Technologies'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Technologies />
      <Academic />
      <Projects />
    </main>
  )
}
