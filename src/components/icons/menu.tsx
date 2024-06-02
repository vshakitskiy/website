import { cn } from "lib/utils"
import { HTMLAttributes } from "react"

interface MenuIconProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
}

export const MenuIcon = ({ isOpen, ...props }: MenuIconProps) => {
  return (
    <div {...props} className="flex flex-col gap-y-1.5 rounded-md">
      <div
        className={cn("menu-line", {
          "translate-y-[7px] rotate-45": isOpen,
        })}
      />
      <div
        className={cn("menu-line", {
          "-translate-y-[1px] -rotate-45": isOpen,
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
