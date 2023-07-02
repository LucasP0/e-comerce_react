import { Footer } from "../components/Footer";
import { BackgroundComponent } from "../components/background";
import { MainPageSeven } from "../components/pageSeven/mainPageSeven";
import { Sidebar } from "../components/sidebar";

export const HomePage = () => {
  return (
    <>
    <BackgroundComponent>
      <Sidebar />
      <MainPageSeven />
      <Footer />
    </BackgroundComponent>

    </>
  );
}