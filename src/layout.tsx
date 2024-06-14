import Navbar from "components/navbar"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div className="h-full font-montserrat md:flex">
      <Navbar />
      <main className="2xs:p-10 flex-1 p-3 md:ml-[252px]">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
