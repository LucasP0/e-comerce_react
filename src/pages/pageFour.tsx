import { Footer } from "../components/Footer"
import { BackgroundComponent } from "../components/background"
import { MainPageFour } from "../components/mainPageFour"
import { Sidebar } from "../components/sidebar"

export const PageFour = () => {
  return (
    <>
    <BackgroundComponent>
    <Sidebar />
    <MainPageFour />
    <Footer />
    </BackgroundComponent>
    </>
  )
}