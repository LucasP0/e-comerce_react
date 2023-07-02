import { Search, ShoppingCart, User2 } from 'lucide-react';

export const Sidebar = () => {
  return (
    <header className='bg-white flex flex-col'>
          <nav className=' h-20 flex flex-row gap-7 items-center justify-between p-12 max-lg:w-full max-sm:flex-col max-lg:h-auto max-lg:py-2'>
            <div className='flex flex-row items-center gap-8 max-md:flex-col w-full '>
              <img src="../img/LOGO_1080x1080 - VERSÃO HORIZONTAL 01 2.png" alt="logo" />
              <form className='bg-input w-inputl h-12 rounded-md p-3 flex flex-row max-lg:w-full'><input className='w-full  bg-input' type="search" name="search" placeholder='Faça sua pesquisa aqui' id="" />
              <button className='text-search'><Search /></button>
              </form>
            </div>
            <div className='flex flex-row items-center gap-14 max-md:flex-col max-lg:gap-2'>
              <button className='bg-input w-48 h-12 rounded-md flex flex-row items-center p-3 gap-2'><User2 /> Seja bem-Vindo</button>
              <button className='bg-input w-48 h-12 rounded-md flex flex-row items-center p-3 gap-2'><ShoppingCart /> Seu carrinho</button>
            </div>
          </nav>
          <div className='flex flex-row items-center gap-6 justify-center p-3 border-t-4 border-button/30 max-lg:text-sm max-lg:gap-2 max-lg:grid max-lg:grid-cols-4 max-lg:p-2 max-lg:pt-2 '>
            <a href='#' className='border-r-2 pr-2'><strong>XIAOMI</strong></a>
            <a href='#' className='border-r-2 pr-2 cursor-pointer'><strong>REALME</strong></a>
            <a href='#' className='border-r-2 pr-2 cursor-pointer'><strong>MOTOROLA</strong></a>
            <a href='#' className='border-r-2 pr-2 cursor-pointer max-lg:border-none'><strong>APPLE</strong></a>
            <a href='#' className='border-r-2 pr-2 cursor-pointer'><strong>USADOS</strong></a>
            <a href='#' className='cursor-pointer'><strong>ACESSÓRIOS</strong></a>
          </div>
        </header>
  )
}
