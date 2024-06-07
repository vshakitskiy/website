export type Project = {
  name: string
  link: string | null
  github: string
  description: string
  technologies: Technologies
  image: string
  phase: "Completed" | "Building" | "Passive"
}

export type Technologies = (
  | "React"
  | "Next"
  | "Typescript"
  | "Tailwindcss"
  | "Prisma"
  | "Redis"
)[]
