import { Footer } from "../components/Footer"
import { BackgroundComponent } from "../components/background"
import { MainPageFive } from "../components/mainPageFive"
import { Sidebar } from "../components/sidebar"

export const PageFive = () => {
  return (
    <>
    <BackgroundComponent>
      <Sidebar />
      <MainPageFive />
      <Footer />
    </BackgroundComponent>
    </>
  )
}