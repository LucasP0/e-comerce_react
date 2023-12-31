import { Footer } from "../components/Footer"
import { BackgroundComponent } from "../components/background"
import { MainPageThee } from "../components/mainPageThee"
import { Sidebar } from "../components/sidebar"

export const PageThee = () => {
  return (
    <>
    <BackgroundComponent>
      <Sidebar />
      <MainPageThee />
      <Footer />
    </BackgroundComponent>
    </>
  )
}