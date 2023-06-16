import { PageFive } from "./pages/pageFive";
import { PageFour } from "./pages/pageFour";
import { PageOne } from "./pages/pageOne";
import { PageSix } from "./pages/pageSix";
import { PageThee } from "./pages/pageThee";
import { PageTwo } from "./pages/pageTwo";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/sidebar";

export const App = () => {

  return (
    <div className='bg-pd  flex flex-col font-inter'>
      <Sidebar />
      <Footer />
  </div>
  )
};
