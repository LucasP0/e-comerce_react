import { Footer } from "../components/Footer"
import { BackgroundComponent } from "../components/background"
import { MainUserDetailsPage } from "../components/mainUserDetailsPage"
import { Sidebar } from "../components/SideBar/sidebar"

export const UserDetailsPage = () => {
  return (
    <>
    <BackgroundComponent>
    <Sidebar />
    <MainUserDetailsPage />
    <Footer />
    </BackgroundComponent>
    </>
  )
}