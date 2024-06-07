import MotionWrapper from "components/motionWrapper"
import { Project } from "types/projects"
import Simapi from "assets/simapi.jpg"
import Productify from "assets/productify.jpg"
import ProjectCard from "components/projectCard"

const PROJECTS: Project[] = [
  {
    name: "simapi",
    link: "https://simapi.vercel.app/",
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
      <div className="w-full border-2 border-dotted border-card bg-accent p-12 opacity-50">
        Empty for now...
      </div>
      <h3 className="heading-secondary">Open Source Projects</h3>
      <div className="3xl:grid-cols-3 mb-10 grid grid-cols-1 gap-8 xl:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </MotionWrapper>
  )
}

export default ProjectsPage
