import MotionWrapper from "components/motionWrapper"
import useLanyard from "hooks/useLanyard"
import { cn } from "lib/utils"

const EtcPage = () => {
  const lanyard = useLanyard("511911643475738656")

  return (
    <MotionWrapper>
      <h1 className="heading-primary">Etc</h1>
      <h2 className="heading-secondary">Thanks</h2>
      <p className="text">
        Thanks for all your time spent on my website. The source code for this
        project available at{" "}
        <a
          href="https://github.com/vshakitskiy/website"
          className="text-primary"
          target="_blank"
        >
          vshakitskiy/website
        </a>
        .
      </p>
      <p className="text">
        Thanks to{" "}
        <a
          href="https://github.com/Phineas"
          className="text-primary"
          target="_blank"
        >
          @Phineas
        </a>{" "}
        for open sourcing his website! Took some concepts from his projects.
      </p>
      <h2 className="heading-secondary">Contact</h2>
      <p className="text">
        If you have any questions or suggestions, feel free to contact me. I'm
        most responsive through Telegram or Discord DMs. You can{" "}
        <a
          href="https://t.me/vshakitskiy"
          className="text-primary"
          target="_blank"
        >
          click here
        </a>{" "}
        to DM me. My discord is @vshakitskiy
        <span
          className={cn("transition-opacity duration-500", {
            "opacity-0": !lanyard,
            "opacity-100": lanyard,
          })}
        >
          {" "}
          - I'm currently{" "}
          <span
            className={cn("transition-colors", {
              "text-[#000000] dark:text-[#777777]":
                lanyard?.discord_status === "offline",
              "text-[#91da72]": lanyard?.discord_status === "online",
              "text-[#f04747]": lanyard?.discord_status === "dnd",
              "text-[#f09e47]": lanyard?.discord_status === "idle",
            })}
          >
            in {lanyard?.discord_status}
          </span>
        </span>
      </p>
      <h2 className="heading-secondary">Themes coloring</h2>
      <p className="text">
        For themes in my website I use{" "}
        <a
          href="https://catppuccin.com/palette"
          className="text-primary"
          target="_blank"
        >
          Catppuccin
        </a>{" "}
        color scheme (Latte for Light / Mocha for Dark). I'm so in love with
        this colors that I made all my OS using that colors.
      </p>
    </MotionWrapper>
  )
}

export default EtcPage
