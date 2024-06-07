import { Technology } from "./technology"

export type Project = {
  name: string
  link: string | null
  github: string
  description: string
  technologies: Technology[]
  image: string
  phase: "Completed" | "Building" | "Passive"
}
