import { HTMLAttributes, PropsWithChildren } from "react"
import { motion as m, Variants } from "framer-motion"

const variants: Variants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
}

interface MotionWrapperProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLElement> {}

const MotionWrapper = ({ children, ...props }: MotionWrapperProps) => {
  return (
    <m.section
      variants={variants}
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <div {...props}>{children}</div>
    </m.section>
  )
}

export default MotionWrapper
