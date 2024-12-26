import { AboutMe } from "./components/pages/about-me";
import { HighlightedProjects } from "./components/pages/highlighted-projects";
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
