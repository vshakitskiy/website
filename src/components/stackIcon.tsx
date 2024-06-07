import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri"
import { BiLogoTypescript } from "react-icons/bi"
import { SiPrisma } from "react-icons/si"
import { DiRedis } from "react-icons/di"
import { IconType } from "react-icons"
import { cn } from "lib/utils"

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
    <div className="absolute top-7 flex items-center gap-2 border border-secondary bg-background px-3 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
      Icon={RiReactjsFill}
      className={classNames}
    />
  ),
  Next: (
    <FormIcon
      key={"cards-next"}
      text="Next"
      Icon={RiNextjsFill}
      className={classNames}
    />
  ),
  Typescript: (
    <FormIcon
      key={"cards-ts"}
      text="Typescript"
      Icon={BiLogoTypescript}
      className={classNames}
    />
  ),
  Tailwindcss: (
    <FormIcon
      key={"cards-tailwind"}
      text="Tailwindcss"
      Icon={RiTailwindCssFill}
      className={classNames}
    />
  ),
  Prisma: (
    <FormIcon
      key={"cards-prisma"}
      text="Prisma"
      Icon={SiPrisma}
      className={classNames}
    />
  ),
  Redis: (
    <FormIcon
      key={"cards-redis"}
      text="Redis"
      Icon={DiRedis}
      className={classNames}
    />
  ),
})
