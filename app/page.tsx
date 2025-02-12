import { HighlightedProjects } from "./components/pages/highlighted-projects";
import { HeroSection } from "./components/pages/home/hero-section";
import { KnownTechs } from "./components/pages/known-techs";
import { WorkExperience } from "./components/pages/work-experience";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";
import { HomePageData } from "./types/page-info";
import { AboutMe } from "./components/pages/about";

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
      profileAbout {
        url
      }
      urlCurriculum
      aboutMe {
        raw
      }
    }
    workExperiences {
      companyLogo {
        url
      }
      role
      companyName
      companyUrl
      startDate
      endDate
      description {
        raw
      }
      technologies {
        name
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
  const { page: pageData, workExperiences } = await getPageData();

  console.log(pageData.highlightProjects);

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechs techs={pageData.knownTechs} />
      <AboutMe homeInfo={pageData} />
      <HighlightedProjects projects={pageData.highlightProjects} />
      <WorkExperience experiences={workExperiences} />
    </>
  );
}
