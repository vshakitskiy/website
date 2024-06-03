import MotionWrapper from "components/motionWrapper"

const HomePage = () => {
  return (
    <MotionWrapper>
      <h1 className="heading-primary">Home</h1>
      <p className="text">Vlad. 17 y/o, student & developer.</p>
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
        I love to work with people who are passionate about what they do. So
        that's why I'm so happy that Open Source exists. Being able to help
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
