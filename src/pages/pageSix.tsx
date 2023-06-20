import { Footer } from "../components/Footer"
import { BackgroundComponent } from "../components/background"
import { MainPageSix } from "../components/mainPageSix"
import { Sidebar } from "../components/sidebar"

export const PageSix = () => {
  return (
    <>
    <BackgroundComponent>
      <Sidebar />
      <MainPageSix />
      <Footer />
    </BackgroundComponent>
    </>
  )
}