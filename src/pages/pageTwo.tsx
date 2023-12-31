import { Footer } from "../components/Footer"
import { BackgroundComponent } from "../components/background"
import { MainPageTwo } from "../components/mainPageTwo"
import { Sidebar } from "../components/sidebar"

export const PageTwo = () => {
  return (
    <>
    <BackgroundComponent>
      <Sidebar />
      <MainPageTwo />
      <Footer />
    </BackgroundComponent>
    </>
  )
}