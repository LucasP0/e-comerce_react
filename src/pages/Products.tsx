import { Footer } from "../components/Footer";
import { BackgroundComponent } from "../components/background";
import { MainProductsPage } from "../components/mainProductsPage";
import { Sidebar } from "../components/SideBar/sidebar";

export const ProductsPage = () => {
  return (
    <>
      <BackgroundComponent>
      <Sidebar/>
      <MainProductsPage/>
      <Footer />
      </BackgroundComponent>
    </>
  );
}