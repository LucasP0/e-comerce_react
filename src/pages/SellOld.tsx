import { Footer } from "../components/Footer"
import { BackgroundComponent } from "../components/background"
import { MainSellOldPage } from "../components/mainSellOldPage"
import { Sidebar } from "../components/SideBar/sidebar"

export const SellOldPage = () => {
  return (
    <>
    <BackgroundComponent>
      <Sidebar />
      <MainSellOldPage />
      <Footer />
    </BackgroundComponent>
    </>
  )
}