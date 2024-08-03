import { Project } from "types/projects"
import { generateStackIcons } from "./stackIcon"
import { Link } from "react-router-dom"
import { cn } from "lib/utils"

const stackIcons = generateStackIcons("w-6 h-6 mr-1")

const ProjectCard = ({ ...data }: Project) => {
  return (
    <div className="w-full rounded-3xl">
      <div className="flex justify-center rounded-t-md bg-foreground p-1 transition-[max-height] duration-150">
        <img src={data.image} alt={data.name} loading="lazy" />
      </div>

      <div className="bg-background hover:bg-card">
        <div className="stats-template 3xs:grid">
          <div className="flex w-auto flex-col justify-center border-x border-border p-3">
            <h5 className="text-sm font-bold">name</h5>
            <p className="text-card-foreground">{data.name}</p>
          </div>
          <div className="hidden w-auto flex-col justify-center border-r border-border p-3 3xs:flex">
            <h5 className="text-sm font-bold">phase</h5>
            <div className="flex items-center gap-2 text-card-foreground">
              {data.phase}{" "}
              <div
                className={cn("h-2.5 w-2.5 rounded-full", {
                  "bg-green-500": data.phase === "Completed",
                  "bg-cyan-500": data.phase === "Building",
                  "bg-purple-500": data.phase === "Passive",
                })}
              />
            </div>
          </div>
          <div className="hidden w-auto flex-col justify-center border-x border-r border-border p-3 xs:flex xs:border-l-0">
            <h5 className="text-sm font-bold">stack</h5>
            <div className="flex flex-wrap">
              {data.technologies.map((tech) => stackIcons[tech])}
            </div>
          </div>
        </div>
        <div className="flex w-auto flex-col justify-center border-x border-t border-border p-3 3xs:hidden">
          <h5 className="text-sm font-bold">phase</h5>
          <div className="flex items-center gap-2 text-card-foreground">
            {data.phase}{" "}
            <div
              className={cn("h-2.5 w-2.5 rounded-full", {
                "bg-green-500": data.phase === "Completed",
                "bg-cyan-500": data.phase === "Building",
                "bg-purple-500": data.phase === "Passive",
              })}
            />
          </div>
        </div>
        <div className="flex w-auto flex-col justify-center border-x border-t border-border p-3 xs:hidden">
          <h5 className="text-sm font-bold">stack</h5>
          <div className="flex flex-wrap">
            {data.technologies.map((tech) => stackIcons[tech])}
          </div>
        </div>
        <div className="flex w-auto flex-col justify-center border-x border-t border-border p-3 py-5">
          <h5 className="text-sm font-bold">what</h5>
          <p className="text-card-foreground">{data.description}</p>
        </div>

        <Link target="_blank" to={data.link || data.github}>
          <button className="w-full rounded-b-md border border-border py-2 text-card-foreground hover:bg-accent">
            {data.link ? "View project" : "Open in Github"}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
