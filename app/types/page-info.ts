import type { RichTextContent } from "@graphcms/rich-text-types"
import { KnownTech, Project } from "./projects";
import { WorkExperiences } from "./work-experiences";

export type Social = {
  url: string;
  iconSvg: string;
}

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent; 
  }
  technologies: KnownTech[]
  profilePicture: {
    url: string
  }
  socials: Social[]
  knownTechs: KnownTech[]
  highlightProjects: Project[]
  profileAbout: {
    url: string
  }
  urlCurriculum: string
  aboutMe: {
    raw: RichTextContent
  }
}

export type ProjectPageData = {
  project: Project
}

export type ProjectsPageData = {
  projects: Project[]
}

export type ProjectsPageStaticData = {
  projects: {
    slug: string
  }[]
}

export type HomePageData = {
  page: HomePageInfo
  workExperiences: WorkExperiences[]
}

export type AboutPageData = {
  profileAbout: {
    url: string
  }
  urlCurriculum: string
}