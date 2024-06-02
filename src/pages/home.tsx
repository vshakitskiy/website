import MotionWrapper from "components/motionWrapper"
import Skeleton from "components/skeleton"
import useLanyard from "hooks/useLanyard"

const HomePage = () => {
  const data = useLanyard("511911643475738656")
  console.log(data)

  return (
    <MotionWrapper>
      {!data ? (
        <></>
      ) : (
        <div className="flex flex-col-reverse mt-4">
          <Skeleton className="w-20 h-20" />
        </div>
      )}
    </MotionWrapper>
  )
}

export default HomePage
