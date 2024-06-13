import { Project } from "types/projects"
import { generateStackIcons } from "./stackIcon"
import { Link } from "react-router-dom"
import { cn } from "lib/utils"
import { LazyLoadImage } from "react-lazy-load-image-component"
import loader from "assets/loader.png"

const stackIcons = generateStackIcons("w-6 h-6 mr-1")

const ProjectCard = ({ ...data }: Project) => {
  return (
    <div className="w-full rounded-3xl">
      <div className="rounded-t-md bg-foreground p-1 transition-[max-height] duration-150">
        <LazyLoadImage
          src={data.image}
          alt={data.name}
          placeholderSrc={loader}
        />
      </div>

      <div className="bg-background transition-colors duration-300 hover:bg-[#f9f9f9] dark:hover:bg-[#050505]">
        <div className="stats-template grid">
          <div className="flex w-auto flex-col justify-center border-x border-border p-3">
            <h5 className="text-sm font-bold">name</h5>
            <p>{data.name}</p>
          </div>
          <div className="flex w-auto flex-col justify-center border-r border-border p-3">
            <h5 className="text-sm font-bold">phase</h5>
            <div className="flex items-center gap-2">
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
        <div className="flex w-auto flex-col justify-center border-x border-t border-border p-3 xs:hidden">
          <h5 className="text-sm font-bold">stack</h5>
          <div className="flex flex-wrap">
            {data.technologies.map((tech) => stackIcons[tech])}
          </div>
        </div>
        <div className="flex w-auto flex-col justify-center border-x border-t border-border p-3 py-5">
          <h5 className="text-sm font-bold">what</h5>
          <p>{data.description}</p>
        </div>
        {data.link ? (
          <Link to={data.link}>
            <button className="w-full rounded-b-md border border-border py-2 hover:bg-[#e2e2e2] dark:hover:bg-[#202020]">
              View project
            </button>
          </Link>
        ) : (
          <button className="w-full cursor-not-allowed rounded-b-md border border-border py-2 text-[#d4d4d4] dark:text-secondary">
            View project
          </button>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
