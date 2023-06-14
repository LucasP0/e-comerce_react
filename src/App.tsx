import { Footer } from './components/Footer';
import { Sidebar } from './components/sidebar';
import { User, List } from 'lucide-react';




export const App = () => {

  return (
    <div className='bg-pd  flex flex-col font-inter'>
      <Sidebar />
        <main className='h-screen text-white mb-mB'>
          <div className=' flex flex-row items-start justify-center p-8 mt-28'>
            <div>
              <section className='flex flex-col items-start justify-center gap-6 p-10'>
              <button className='w-boxmd h-boxsx  bg-button rounded-md font-bold flex flex-row justify-start items-center gap-2 p-2'><User /> Minha Conta</button>
              <a className='p-2 border-t-2 w-full' href="#">Meus Pedidos</a>
              <a className='p-2 border-t-2 w-full' href="#">Sair</a>
              </section>
            </div>
            {/* INICIO SECTION TWO ^^ */}
            <div>
              <h1 className='text-xl font-bold p-1'>Minha Conta</h1>
              <section className='border-2 border-white w-boxGG h-boxGG rounded-md flex flex-col items-start p-10 bg-ff'>
                <h2 className='flex flex-row items-center gap-2 text-black'>
                <List /> Dados Cadastrais
                </h2>
                  <div className='flex flex-col items-start p-7 mt-5 w-boxG rounded-md text-black bg-boxCin '>
                    <h2>P</h2>
                    <h2>P</h2>
                    <h2>P</h2>
                    <h2>P</h2>
                    <h2>P</h2>

                </div>
                </section>
            </div>
          </div>
        </main>
      <Footer />
    </div>
  )
};
