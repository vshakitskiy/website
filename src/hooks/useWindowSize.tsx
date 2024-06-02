import { useEffect, useState } from "react"

const useWindowSize = (mobile?: number) => {
  const [windowSize, setWindowSize] = useState<{
    width: number
    height: number
  }>({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const res = {
    size: windowSize,
    isMobile: mobile ? windowSize.width < mobile : null,
  }

  return res
}

export default useWindowSize
