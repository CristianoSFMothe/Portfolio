import { HighlightedProjects } from "./components/pages/highlighted-projects";
import { AboutMe } from "./components/pages/about/about-me";
import { HeroSection } from "./components/pages/home/hero-section";
import { KnownTechs } from "./components/pages/known-techs";
import { WorkExperience } from "./components/pages/work-experience";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

const getPageData = async () => {
  const query = `
  query PageInfoQuery {
    page(where: {slug: "home"}) {
      introduction {
        raw
      }
      technologies {
        name
      }
      profilePicture {
        url
      }
      socials {
        url
        iconSvg
      }
      knownTechs {
        iconSvg
        name
        startDate
      }
    }    
  }
`;

  return fetchHygraphQuery(query);
};

export default async function Home() {
  const response = await getPageData();

  console.log(response);

  return (
    <>
      <HeroSection />
      <KnownTechs />
      <AboutMe />
      <HighlightedProjects />
      <WorkExperience />
    </>
  );
}
