import Navbar from "components/navbar"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div className="h-full md:flex font-montserrat">
      <Navbar />
      <main className="flex-1 md:ml-[252px]">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
