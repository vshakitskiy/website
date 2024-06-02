import { cn } from "lib/utils"
import { HTMLAttributes } from "react"

interface MenuIconProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
}

export const MenuIcon = ({ isOpen, ...props }: MenuIconProps) => {
  return (
    <div {...props} className="flex flex-col rounded-md gap-y-1.5">
      <div
        className={cn("menu-line", {
          "rotate-45 translate-y-[7px]": isOpen,
        })}
      />
      <div
        className={cn("menu-line", {
          "-rotate-45 -translate-y-[1px]": isOpen,
        })}
      />
      <div
        className={cn("menu-line", {
          "opacity-0": isOpen,
        })}
      />
    </div>
  )
}
