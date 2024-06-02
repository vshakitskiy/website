import { Link, useLocation } from "react-router-dom"
import { MenuIcon } from "./icons/menu"
import { useCallback, useEffect, useState } from "react"
import { cn } from "lib/utils"
import LocationIcon from "./icons/location"
import useWindowSize from "hooks/useWindowSize"
import useSound from "use-sound"
import switchSound from "../assets/sounds/switch.mp3"
import { FaGithub } from "react-icons/fa"
import ModeToggle from "./modeToggle"

type Paths = "/" | "/projects" | "/technologies" | "/etc"

const Navbar = () => {
  const { isMobile } = useWindowSize(768)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { pathname } = useLocation()
  // TODO: fix pathname type
  const isInBoundry = ["/", "/projects", "/technologies", "/etc"].includes(
    pathname
  )

  const [playSound] = useSound(switchSound)

  useEffect(() => {
    if (isMobile) setIsOpen(false)
    playSound()
  }, [pathname])

  const toggleMobileMenu = useCallback(() => setIsOpen(!isOpen), [isOpen])

  const NavbarItem = ({ text, link }: { text: string; link: Paths }) => (
    <li
      className={cn("menu-link", {
        "text-[#727272] dark:text-[#a9a9a9]": link !== pathname,
      })}
    >
      <Link to={link}>{text}</Link>
    </li>
  )

  return (
    <>
      <nav className="md:hidden border-b border-b-primary-foreground flex justify-between items-center px-8 py-4">
        <h2 className="font-bold">Vladislav Shakitskiy</h2>
        <MenuIcon onClick={toggleMobileMenu} isOpen={isOpen} />
      </nav>
      <nav
        className={cn(
          "fixed md:h-screen top-0 left-0 p-8 border-r border-r-primary-foreground flex flex-col z-50",
          {
            "duration-700 w-full h-full backdrop-blur-sm": isMobile,
            "translate-y-full": !isOpen && isMobile,
            "translate-y-14 backdrop-blur-sm": isOpen && isMobile,
          }
        )}
      >
        <h2 className="hidden mb-1 font-bold text-lg md:block">
          Vladislav Shakitskiy
        </h2>
        <h3>
          <a
            href="https://www.google.com/maps/search/Elektrougli, Moscow Region"
            target="_blank"
            className="flex items-center gap-3"
          >
            <LocationIcon className="h-5 w-5" color="#6f00e6" />
            <p className="transition-none">Elektrougli, MR</p>
          </a>
        </h3>
        <ul className="relative mt-2">
          {!isMobile ? (
            <div
              className={cn(
                "transition-transform timing duration-500 absolute w-0.5 h-8 bg-primary top-3 -right-[33px]",
                {
                  "translate-y-10": pathname === "/projects",
                  "translate-y-20": pathname === "/technologies",
                  "translate-y-[120px]": pathname === "/etc",
                  "opacity-0": !isInBoundry,
                }
              )}
            ></div>
          ) : null}
          <NavbarItem text="home" link="/" />
          <NavbarItem text="projects" link="/projects" />
          <NavbarItem text="technologies" link="/technologies" />
          <NavbarItem text="more" link="/etc" />
        </ul>
        <ul className="flex items-center justify-between md:justify-around mt-auto mb-16 md:mb-4">
          <li>
            <a target="_blank" href="https://github.com/vshakitskiy">
              <FaGithub className="w-6 h-6" />
            </a>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </>
  )
}
// https://www.google.com/maps/search/Elektrougli, Moscow Region

export default Navbar
