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
        <div className="mt-4 flex flex-col-reverse">
          <Skeleton className="h-20 w-20" />
        </div>
      )}
    </MotionWrapper>
  )
}

export default HomePage
