import Banner from "components/Banner"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <main>
      <Banner />

      <Outlet />
    </main>
  )
}

export default MainLayout
