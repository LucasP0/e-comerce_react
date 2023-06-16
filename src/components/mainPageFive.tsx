import { User, List, LogOut } from 'lucide-react';

export const MainPageFive = () => {
  return (
    <main className='h-screen text-white mb-mB'>
      <div className=' flex flex-row items-start justify-center p-8 mt-28 max-lg:flex-col max-lg:items-center'>
        <div>
          <section className='flex flex-col items-start justify-center gap-6 p-10'>
          <button className='w-boxmd h-boxsx  bg-button rounded-md font-bold flex flex-row justify-start items-center gap-2 p-2'><User /> Minha Conta</button>
          <a className='p-2 border-t-2 w-full flex flex-row items-center gap-2' href="#"> <List /> Meus Pedidos</a>
          <a className='p-2 border-t-2 w-full flex flex-row items-center gap-2' href="#"><LogOut /> Sair</a>
          </section>
        </div>
            {/* INICIO SECTION TWO ^^ */}
        <div className='max-lg:w-full '>
          <h1 className='text-xl font-bold p-1 max-md:flex max-md:flex-col max-lg:w-4/5 max-md:pl-12 max-md:pb-4'>Meus Pedidos</h1>
          <section className='border-2 border-white w-boxGG  rounded-md flex flex-row justify-center p-10 bg-ff text-black max-lg:w-full max-lg:m-auto '>
          <h1 className='text-xl font-bold p-1 max-lg:text-sm'>Você ainda não efetuou nenhum pedido nesta Loja</h1>
          </section>
        </div>
      </div>
    </main>

  )
}