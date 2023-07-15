import { Footer } from "../components/Footer";
import { BackgroundComponent } from "../components/background";
import { MainProductPage } from "../components/mainProductPage";
import { Sidebar } from "../components/SideBar/sidebar";

export const ProductPage = () => {
  return (
    <>
    <BackgroundComponent>
      <Sidebar />
      <MainProductPage />
      <Footer />
    </BackgroundComponent>
    </>
  );

}