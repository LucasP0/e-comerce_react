import { Outlet } from "react-router-dom"
import { Sidebar } from "./components/SideBar/sidebar"
import { BackgroundComponent } from "./components/background"
import { Footer } from "./components/Footer"

export const App = () => {
  return (
    <BackgroundComponent>
      <Sidebar/>
      <Outlet />
      <Footer />
    </BackgroundComponent>
  )
}