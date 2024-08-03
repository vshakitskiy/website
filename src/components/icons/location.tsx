import { useTheme } from "components/providers/theme"
import { SVGProps } from "react"

interface LocationIcon extends SVGProps<SVGSVGElement> {}

const COLORS = {
  dark: "#CAA6F7",
  light: "#8839EF",
}

const LocationIcon = ({ ...props }: LocationIcon) => {
  const { theme } = useTheme()

  console.log(theme)

  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={COLORS[theme]}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
    </svg>
  )
}

export default LocationIcon
