import { KnownTech } from "./projects"
import type { RichTextContent } from "@graphcms/rich-text-types"


export type WorkExperiences = {
  companyLogo: {
    url: string
  }
  role: string
  companyName: string
  companyUrl: string
  startDate: string
  endDate: string
  technologies: KnownTech[]
  description: {
    raw: RichTextContent
  }
}