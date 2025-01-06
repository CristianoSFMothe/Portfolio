import { ProjectDetails } from "@/app/components/pages/project/project-details";
import { ProjectSection } from "@/app/components/pages/project/project-section";
import { ProjectPageData } from "@/app/types/page-info";
import { fetchHygraphQuery } from "@/app/utils/fetch-hygraph-query";

type ProjectProps = {
  params: {
    slug: string;
  };
};

const getProjectDetails = async (slug: string): Promise<ProjectPageData | null> => {
  const query = `
  query ProjectQuery {
    project(where: {slug: "${slug}"}) {
      pageThumbnail {
        url
      }
      thumbnail {
        url
      }
      sections {
        title
        image {
          url
        }
      }
      title
      shortDescription
      description {
        raw
        text
      }
      technologies {
        name
      }
      liveProjectUrl
      githubUrl
    }
  }
  `;

  const data = await fetchHygraphQuery(query, 60 * 60 * 24);
  console.log("Hygraph Response:", data);

  return data?.project ? { project: data.project } : null;
};

export default async function Project({ params: { slug } }: ProjectProps) {
  const projectData = await getProjectDetails(slug);

  if (!projectData) {
    throw new Error("Projeto não encontrado.");
  }

  const { project } = projectData;

  console.log(project);

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSection />
    </>
  );
}
