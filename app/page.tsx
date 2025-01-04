import { HighlightedProjects } from "./components/pages/highlighted-projects";
import { AboutMe } from "./components/pages/about/about-me";
import { HeroSection } from "./components/pages/home/hero-section";
import { KnownTechs } from "./components/pages/known-techs";
import { WorkExperience } from "./components/pages/work-experience";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";
import { HomePageData } from "./types/page-info";

const getPageData = async (): Promise<HomePageData> => {
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
      highlightProjects {
        slug
        thumbnail {
          url
        }
        title
        shortDescription
        technologies {
          name
        }
      }
    }    
  }
`;

  return fetchHygraphQuery(
    query,
    60 * 60 * 24, // 24 horas
  );
};

export default async function Home() {
  const { page: pageData } = await getPageData();

  console.log(pageData)

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechs techs={pageData.knownTechs} />
      <AboutMe />
      <HighlightedProjects projects={pageData.highlightProjects} />
      <WorkExperience />
    </>
  );
}
