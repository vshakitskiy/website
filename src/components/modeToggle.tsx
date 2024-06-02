import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md"
import { useTheme } from "./providers/theme"

const ModeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative flex"
    >
      <MdOutlineLightMode className="w-7 h-7 transition-transform rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <MdOutlineDarkMode className="absolute top-0 w-7 h-7 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
    </button>
  )
}

export default ModeToggle
