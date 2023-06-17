import { Footer } from "./components/Footer";
import { MainPageEight } from "./components/mainPageEight";
import { MainPageFour } from "./components/mainPageFour";
import { Sidebar } from "./components/sidebar";
import { Sparkle } from 'lucide-react';

export const App = () => {

  return (
    <div className='bg-pd flex flex-col font-inter'>
      <Sidebar />
        <main className="flex flex-col w-full items-center justify-center">
          <div className="flex flex-row items-start bg-white">
            <section className="flex flex-col items-center border-r-2 border-button/20">
              <img src="../public/img/image 6.png" alt="" />
              <div className="flex flex-row gap-8 items-center">
              <img src="../public/img/image 5.png" alt="" />
              <img src="../public/img/image 13.png" alt="" />
              <img src="../public/img/image 14.png" alt="" />
              </div>
            </section>
            <section>
              <div>
                <h1>Apple iPhone 13 Por Max - 512 gb</h1>
                <p><strong>Código:</strong> AP4545</p>
                <p className="flex flex-row items-start w-full gap-2 px-2 w-3/4 ">
                  <Sparkle size={20} color="#4d8e29" />
                  <Sparkle size={20} color="#4d8e29" />
                  <Sparkle size={20} color="#4d8e29" />
                  <Sparkle size={20} color="#4d8e29" />
                  <Sparkle size={20} color="#4d8e29" />
                </p>
              </div>
            </section>
          </div>
        </main>
      <Footer />
  </div>
  )
};
