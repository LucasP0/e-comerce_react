import { Sidebar } from "../components/sidebar"
import { Footer } from "../components/Footer"
import { MainOne } from "../components/mainPageOne"
import { BackgroundComponent } from "../components/background"

export const LoginPage = () => {
  return (
    <>
    <BackgroundComponent>
      <Sidebar />
      <MainOne />
      <Footer />
    </BackgroundComponent>
    </>
  )
}