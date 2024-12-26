import { HighlightedProjects } from "./components/pages/highlighted-projects";
import { AboutMe } from "./components/pages/about/about-me";
import { HeroSection } from "./components/pages/home/hero-section";
import { KnownTechs } from "./components/pages/known-techs";
import { WorkExperience } from "./components/pages/work-experience";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <AboutMe />
      <HighlightedProjects />
      <WorkExperience />
    </>
  )
}
