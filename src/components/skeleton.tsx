import { cn } from "lib/utils"
import { HTMLAttributes } from "react"

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {}

const Skeleton = ({ ...props }: SkeletonProps) => {
  return (
    <div
      {...props}
      className={cn("animate-pulse rounded-md bg-secondary", props.className)}
    />
  )
}

export default Skeleton
