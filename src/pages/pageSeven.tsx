import { Footer } from "../components/Footer";
import { BackgroundComponent } from "../components/background";
import { MainPageSeven } from "../components/mainPageSeven";
import { Sidebar } from "../components/sidebar";

export const PageSeven = () => {
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