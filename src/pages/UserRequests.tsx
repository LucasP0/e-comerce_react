import { Footer } from "../components/Footer"
import { BackgroundComponent } from "../components/background"
import { MainUserRequestsPage } from "../components/mainUserRequestsPage";
import { Sidebar } from "../components/sidebar"

export const UserRequestsPage = () => {
  return (
    <>
    <BackgroundComponent>
      <Sidebar />
      <MainUserRequestsPage />
      <Footer />
    </BackgroundComponent>
    </>
  )
}