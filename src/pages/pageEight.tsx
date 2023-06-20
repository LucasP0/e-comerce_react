import { Footer } from "../components/Footer";
import { BackgroundComponent } from "../components/background";
import { MainPageEight } from "../components/mainPageEight";
import { Sidebar } from "../components/sidebar";

export const PageEight = () => {
  return (
    <>
      <BackgroundComponent>
      <Sidebar/>
      <MainPageEight/>
      <Footer />
      </BackgroundComponent>
    </>
  );
}