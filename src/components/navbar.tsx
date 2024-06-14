import { Link, useLocation } from "react-router-dom"
import { MenuIcon } from "./icons/menu"
import { useCallback, useEffect, useState } from "react"
import { cn } from "lib/utils"
import LocationIcon from "./icons/location"
import useWindowSize from "hooks/useWindowSize"
import useSound from "use-sound"
import switchSound from "../assets/sounds/switch.mp3"
import ModeToggle from "./modeToggle"
import { GithubIcon } from "./icons/tech"

const PATHS = ["/", "/projects", "/technologies", "/etc"] as const
type Paths = (typeof PATHS)[number]

const Navbar = () => {
  const { isMobile } = useWindowSize(768)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { pathname } = useLocation() as { pathname: Paths }
  const isInBoundry = PATHS.includes(pathname)

  const [playSound] = useSound(switchSound)

  useEffect(() => {
    if (isMobile) setIsOpen(false)
    playSound()
  }, [pathname])

  const toggleMobileMenu = useCallback(() => setIsOpen(!isOpen), [isOpen])

  const NavbarItem = ({ text, link }: { text: string; link: Paths }) => (
    <li
      className={cn("menu-link font-medium", {
        "text-[#727272] dark:text-[#a9a9a9]": link !== pathname,
      })}
    >
      <Link to={link}>{text}</Link>
    </li>
  )

  return (
    <>
      <nav
        className={cn(
          "2xs:px-10 fixed top-0 z-50 flex w-full items-center justify-between gap-2 border-b border-b-border px-3 py-4 md:hidden",
          {
            "backdrop-blur-lg": isMobile && !isOpen,
            "bg-background": isMobile && isOpen,
          },
        )}
      >
        <h2 className="font-bold">Vladislav Shakitskiy</h2>
        <MenuIcon onClick={toggleMobileMenu} isOpen={isOpen} />
      </nav>
      <nav
        className={cn(
          "fixed left-0 top-0 z-50 flex flex-col border-r border-r-primary-foreground p-8 md:h-screen",
          {
            "h-full w-full bg-background duration-700": isMobile,
            "translate-y-full": !isOpen && isMobile,
            "translate-y-14": isOpen && isMobile,
          },
        )}
      >
        <h2 className="mb-1 hidden text-lg font-bold md:block">
          Vladislav Shakitskiy
        </h2>
        <h3>
          <a
            href="https://www.google.com/maps/search/Elektrougli, Moscow Region"
            target="_blank"
            className="flex items-center gap-3"
          >
            <LocationIcon className="h-5 w-5" color="#b300a4" />
            <p className="transition-none">Elektrougli, MR</p>
          </a>
        </h3>
        <ul className="relative mt-2">
          {!isMobile ? (
            <div
              className={cn(
                "timing absolute -right-[33px] top-3 h-8 w-0.5 bg-primary transition-transform duration-500",
                {
                  "translate-y-10": pathname === "/projects",
                  "translate-y-20": pathname === "/technologies",
                  "translate-y-[120px]": pathname === "/etc",
                  "opacity-0": !isInBoundry,
                },
              )}
            ></div>
          ) : null}
          <NavbarItem text="home" link="/" />
          <NavbarItem text="projects" link="/projects" />
          <NavbarItem text="technologies" link="/technologies" />
          <NavbarItem text="more" link="/etc" />
        </ul>
        <ul className="mb-16 mt-auto flex items-center justify-between md:mb-4 md:justify-around">
          <li className="p-2">
            <a target="_blank" href="https://github.com/vshakitskiy">
              <GithubIcon className="h-6 w-6" />
            </a>
          </li>
          <li className="p-2">
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
