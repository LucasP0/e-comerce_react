import { Outlet } from "react-router-dom"
import { Sidebar } from "./components/SideBar/sidebar"
import { BackgroundComponent } from "./components/background"
import { Footer } from "./components/Footer"
import { Provider } from "./context/provider"
import { Cart } from "./components/cart/cart"

export const App = () => {
  return (
    <Provider>
      <BackgroundComponent>
        <Sidebar/>
        <Cart />
        <Outlet />
        <Footer />
      </BackgroundComponent>
    </Provider>

  )
}