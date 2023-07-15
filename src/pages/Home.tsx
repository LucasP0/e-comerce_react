import { Footer } from "../components/Footer";
import { BackgroundComponent } from "../components/background";
import { MainHomePage } from "../components/pageSeven/mainHomePage";
import { Sidebar } from "../components/SideBar/sidebar";

export const HomePage = () => {
  return (
    <>
    <BackgroundComponent>
      <Sidebar />
      <MainHomePage />
      <Footer />
    </BackgroundComponent>

    </>
  );
}