import { HighlightedProjects } from "./components/pages/highlighted-projects";
import { AboutMe } from "./components/pages/home/about/about-me";
import { HeroSection } from "./components/pages/home/hero-section";
import { KnownTechs } from "./components/pages/known-techs";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <AboutMe />
      <HighlightedProjects />
    </>
  )
}
