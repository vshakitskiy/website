import {
  NotionIcon,
  VSCodeIcon,
  GitIcon,
  MiroIcon,
  PnpmIcon,
  PostmanIcon,
  RapidIcon,
} from "components/icons/tech"
import MotionWrapper from "components/motionWrapper"
import TechnologieCard from "components/technologieCard"
import { Technology } from "types/technology"

const TECHNOLOGIES = [
  {
    name: "React",
    description: "JavaScript library for building user interfaces.",
    type: "Frontend Framework",
  },
  {
    name: "Typescript",
    description:
      "Strongly typed programming language, making JS more powerful.",
    type: "Programming language",
  },
  {
    name: "Tailwindcss",
    description: "CSS framework for rapid UI development.",
    type: "CSS Framework",
  },
  {
    name: "Next",
    description: "Server-side rendering and fullstack development.",
    type: "React Framework",
  },
  {
    name: "Vite",
    description: "Light and fast frontend developing tool.",
    type: "React Framework",
  },
] as {
  name: Technology
  description: string
  type: string
}[]

const TechnologiesPage = () => {
  return (
    <MotionWrapper>
      <h1 className="heading-primary">Technologies</h1>
      <h2 className="heading-secondary">Primary</h2>
      <div className="grid grid-cols-1 gap-4">
        {TECHNOLOGIES.map((technologie) => (
          <TechnologieCard key={technologie.name} {...technologie} />
        ))}
      </div>
      <h2 className="heading-secondary">Additional</h2>
      <div className="mb-10 flex flex-wrap justify-center gap-4">
        <div className="technology-additional">
          <VSCodeIcon className="h-16 w-16 text-secondary" />
        </div>
        <div className="technology-additional">
          <NotionIcon className="h-16 w-16 text-secondary" />
        </div>
        <div className="technology-additional">
          <GitIcon className="h-16 w-16 text-secondary" />
        </div>
        <div className="technology-additional">
          <MiroIcon className="h-16 w-16 text-secondary" />
        </div>
        <div className="technology-additional">
          <RapidIcon className="h-16 w-16 text-secondary" />
        </div>
        <div className="technology-additional">
          <PnpmIcon className="h-16 w-16 text-secondary" />
        </div>
        <div className="technology-additional">
          <PostmanIcon className="h-16 w-16 text-secondary" />
        </div>
      </div>
    </MotionWrapper>
  )
}

export default TechnologiesPage
