import About from './_components/about/About'
import Academic from './_components/academic/Academic'
import Blog from './_components/blog/Blog'
import Contact from './_components/contact/Contact'
import Experience from './_components/experience/Experience'
import Hero from './_components/hero/Hero'
import Projects from './_components/projects/Projects'
import Technologies from './_components/technologies/Technologies'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Academic />
      <Projects />
      <Technologies />
      <Experience />
      <Blog />
      <Contact />
    </main>
  )
}
