import MotionWrapper from "components/motionWrapper"
import { getAge } from "lib/utils"

const HomePage = () => {
  return (
    <MotionWrapper>
      <h1 className="heading-primary">Home</h1>
      <h3 className="heading-secondary">About Me</h3>
      <p className="text">
        Vlad. {getAge(new Date(2006, 8, 8))} y/o, student & developer.
      </p>
      <p className="text">
        I love exploring new technologies by building projects with stack I
        never used before. Currently, I'm working on creating pet projects and
        studying engineering in college.
      </p>
      <p className="text">
        I specialize in frontend part, but right now thinking about switching my
        interest to backend & networking.
      </p>
      <h3 className="heading-secondary">About Open Source</h3>
      <p className="text">
        I really do love open source. I love the idea of building software that
        I know people will be able to make use of. And also, being able to help
        developers with contributions is something that I enjoy doing.
      </p>
      <p className="text">
        So, all my projects that I will ever make is most likely going to be
        open sourced and available for everyone to use or maintain. So if you
        want to contribute, I'm looking forward to your help!
      </p>
    </MotionWrapper>
  )
}

export default HomePage
