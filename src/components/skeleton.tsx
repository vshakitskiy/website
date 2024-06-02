import { cn } from "lib/utils"
import { HTMLAttributes } from "react"

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {}

const Skeleton = ({ ...props }: SkeletonProps) => {
  return (
    <div
      {...props}
      className={cn("rounded-md bg-secondary animate-pulse", props.className)}
    />
  )
}

export default Skeleton
