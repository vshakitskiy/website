import { Technology } from "types/technology"
import {
  NextIcon,
  ReactIcon,
  TailwindcssIcon,
  TSIcon,
  ViteIcon,
} from "./icons/tech"

const TechnologieCard = ({
  ...data
}: {
  name: Technology
  description: string
  type: string
}) => {
  return (
    <div className="flex flex-col rounded-lg border border-border lg:flex-row">
      <div className="flex h-28 w-full items-center justify-center rounded-t-lg bg-foreground lg:w-28 lg:rounded-l-lg lg:rounded-t-none">
        {data.name === "React" ? (
          <ReactIcon className="h-14 w-14 text-background" />
        ) : null}
        {data.name === "Typescript" ? (
          <TSIcon className="h-14 w-14 text-background" />
        ) : null}
        {data.name === "Next" ? (
          <NextIcon className="h-14 w-14 text-background" />
        ) : null}
        {data.name === "Tailwindcss" ? (
          <TailwindcssIcon className="h-14 w-14 text-background" />
        ) : null}
        {data.name === "Vite" ? (
          <ViteIcon className="h-14 w-14 text-background" />
        ) : null}
      </div>
      <div className="flex w-full flex-col justify-center border-t border-border p-3 lg:w-28 lg:border-r lg:border-t-0">
        <h5 className="text-sm font-bold">name</h5>
        <p>{data.name}</p>
      </div>
      <div className="flex w-full flex-col justify-center border-t border-border p-3 lg:w-52 lg:border-r lg:border-t-0">
        <h5 className="text-sm font-bold">type</h5>
        <p>{data.type}</p>
      </div>
      <div className="flex flex-1 flex-col justify-center border-t border-border p-3 lg:border-t-0">
        <h5 className="text-sm font-bold">about</h5>
        <p>{data.description}</p>
      </div>
    </div>
  )
}

export default TechnologieCard
