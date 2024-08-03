// TODO: rewrite this mess

import { cn } from "lib/utils"
import { IconType } from "types/icons"
import {
  NextIcon,
  PrismaIcon,
  ReactIcon,
  RedisIcon,
  TSIcon,
  TailwindcssIcon,
  ViteIcon,
} from "./icons/tech"

const FormIcon = ({
  Icon,
  text,
  className,
}: {
  Icon: IconType
  text: string
  className: string
}) => (
  <div
    className={cn(
      "group relative flex items-center justify-center rounded-full bg-foreground",
      className,
    )}
  >
    <div className="absolute top-7 flex items-center gap-2 border border-border bg-background px-3 py-1 text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <Icon className="h-5 w-5 text-foreground" />
      {text}
    </div>
    <Icon className="h-3/4 w-3/4 text-background" />
  </div>
)

export const generateStackIcons = (classNames: string) => ({
  React: (
    <FormIcon
      key={"cards-react"}
      text="React"
      Icon={ReactIcon}
      className={classNames}
    />
  ),
  Next: (
    <FormIcon
      key={"cards-next"}
      text="Next"
      Icon={NextIcon}
      className={classNames}
    />
  ),
  Typescript: (
    <FormIcon
      key={"cards-ts"}
      text="Typescript"
      Icon={TSIcon}
      className={classNames}
    />
  ),
  Tailwindcss: (
    <FormIcon
      key={"cards-tailwind"}
      text="Tailwindcss"
      Icon={TailwindcssIcon}
      className={classNames}
    />
  ),
  Prisma: (
    <FormIcon
      key={"cards-prisma"}
      text="Prisma"
      Icon={PrismaIcon}
      className={classNames}
    />
  ),
  Redis: (
    <FormIcon
      key={"cards-redis"}
      text="Redis"
      Icon={RedisIcon}
      className={classNames}
    />
  ),
  Vite: (
    <FormIcon
      key={"cards-vite"}
      text="Vite"
      Icon={ViteIcon}
      className={classNames}
    />
  ),
})
