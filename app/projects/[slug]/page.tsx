import { ProjectDetails } from "@/app/components/pages/project/project-details";
import { ProjectSections } from "@/app/components/pages/project/project-sections";
import { ProjectPageData, ProjectsPageStaticData } from "@/app/types/page-info";
import { fetchHygraphQuery } from "@/app/utils/fetch-hygraph-query";
import { Metadata } from "next";

type ProjectProps = {
  params: {
    slug: string;
  };
};

const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
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

  type ProjectQueryResponse = {
    project: ProjectPageData["project"];
  };

  const data = await fetchHygraphQuery<ProjectQueryResponse>(
    query,
    60 * 60 * 1,
  );

  if (!data.project) {
    throw new Error("Projeto não encontrado.");
  }

  return { project: data.project };
};

export default async function Project({ params: { slug } }: ProjectProps) {
  const { project } = await getProjectDetails(slug);

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </>
  );
}

export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery {
      projects(first: 100) {
        slug
      }
    }
  `;

  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query);

  return projects.map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({
  params: { slug },
}: ProjectProps): Promise<Metadata> {
  const { project } = await getProjectDetails(slug);

  return {
    title: project.title,
    description: project.description.text,
    openGraph: {
      images: [
        {
          url: project.thumbnail.url,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
    twitter: {
      card: project.thumbnail.url,
      title: project.title,
      description: project.description.text,
      image: project.thumbnail.url,
      site: "https://portfolio-qa-cristiano.vercel.app/",
    } as any,
    robots: {
      index: true,
      follow: true,
    },
  };
}
