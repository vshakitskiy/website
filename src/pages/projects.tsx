import MotionWrapper from "components/motionWrapper"
import { Project } from "types/projects"
import Simapi from "assets/simapi.png"
import Website from "assets/website.png"
import Productify from "assets/productify.png"
import ProjectCard from "components/projectCard"

const PROJECTS: Project[] = [
  {
    name: "website",
    link: "https://vshakitskiy.dev/",
    github: "https://github.com/vshakitskiy/website",
    description: "My personal website.",
    technologies: ["React", "Typescript", "Tailwindcss", "Vite"],
    image: Website,
    phase: "Completed",
  },
  {
    name: "simapi",
    link: null,
    github: "https://github.com/vshakitskiy/simapi",
    description: "Determine text similarity with ease.",
    technologies: [
      "React",
      "Typescript",
      "Tailwindcss",
      "Next",
      "Prisma",
      "Redis",
    ],
    image: Simapi,
    phase: "Completed",
  },
  {
    name: "productify",
    link: null,
    github: "https://github.com/vshakitskiy/productify",
    description: "Full-stack filtering system.",
    technologies: ["React", "Typescript", "Tailwindcss", "Next"],
    image: Productify,
    phase: "Completed",
  },
]

const ProjectsPage = () => {
  return (
    <MotionWrapper>
      <h1 className="heading-primary">Projects</h1>
      <h3 className="heading-secondary">Companies</h3>
      <div className="w-full border-2 border-dotted border-card bg-[#cecece] p-12 dark:bg-accent dark:opacity-50"></div>
      <h3 className="heading-secondary">Open Source Projects</h3>
      <div className="mb-10 grid grid-cols-1 gap-8 xl:grid-cols-2 3xl:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </MotionWrapper>
  )
}

export default ProjectsPage
