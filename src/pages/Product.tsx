import { Footer } from "../components/Footer";
import { BackgroundComponent } from "../components/background";
import { MainPageNine } from "../components/mainPageNine";
import { Sidebar } from "../components/sidebar";

export const ProductPage = () => {
  return (
    <>
    <BackgroundComponent>
      <Sidebar />
      <MainPageNine />
      <Footer />
    </BackgroundComponent>
    </>
  );

}