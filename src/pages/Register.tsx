import { Footer } from "../components/Footer"
import { BackgroundComponent } from "../components/background"
import { MainRegisterPage } from "../components/mainRegisterPage"
import { Sidebar } from "../components/sidebar"

export const RegisterPage = () => {
  return (
    <>
    <BackgroundComponent>
      <Sidebar />
      <MainRegisterPage />
      <Footer />
    </BackgroundComponent>
    </>
  )
}