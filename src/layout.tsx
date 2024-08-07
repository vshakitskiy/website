import Navbar from "components/navbar"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div className="h-full font-montserrat md:flex">
      <Navbar />
      <main className="flex-1 p-3 2xs:p-10 md:ml-[252px]">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
