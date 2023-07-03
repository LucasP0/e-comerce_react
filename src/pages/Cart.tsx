import { Footer } from "../components/Footer"
import { BackgroundComponent } from "../components/background"
import { MainCart } from "../components/mainCart"
import { Sidebar } from "../components/sidebar"

export const CartPage = () => {
  return (
    <>
    <BackgroundComponent>
      <Sidebar />
      <MainCart />
      <Footer />
    </BackgroundComponent>
    </>
  )
}