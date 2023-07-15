import { Sidebar } from "../components/SideBar/sidebar"
import { Footer } from "../components/Footer"
import { MainLoginPage } from "../components/mainLoginPage"
import { BackgroundComponent } from "../components/background"

export const LoginPage = () => {
  return (
    <>
    <BackgroundComponent>
      <Sidebar />
      <MainLoginPage />
      <Footer />
    </BackgroundComponent>
    </>
  )
}