import { Search, ShoppingCart, User2 } from 'lucide-react';

export const Sidebar = () => {
  return (
    <header className='bg-white flex flex-col'>
          <nav className=' h-20 flex flex-row gap-7 items-center justify-between p-12'>
            <div className='flex flex-row items-center gap-8'>
              <img src="../public/img/LOGO_1080x1080 - VERSÃO HORIZONTAL 01 2.png" alt="logo" />
              <form className='bg-input w-inputl h-12 rounded-md p-3 flex flex-row'><input className='w-full  bg-input' type="search" name="search" placeholder='Faça sua pesquisa aqui' id="" />
              <button className='text-search'><Search /></button>
              </form>
            </div>
            <div className='flex flex-row items-center gap-14'>
              <button className='bg-input w-48 h-12 rounded-md flex flex-row items-center p-3 gap-2'><User2 /> Seja bem-Vindo</button>
              <button className='bg-input w-48 h-12 rounded-md flex flex-row items-center p-3 gap-2'><ShoppingCart /> Seu carrinho</button>
            </div>
          </nav>
          <div className='flex flex-row items-center gap-6 justify-center p-3 border-t-4'>
            <a href='#' className='border-r-2 pr-2 divide-y-8'><strong>XIAOMI</strong></a>
            <a href='#' className='border-r-2 pr-2 cursor-pointer'><strong>REALME</strong></a>
            <a href='#' className='border-r-2 pr-2 cursor-pointer'><strong>MOTOROLA</strong></a>
            <a href='#' className='border-r-2 pr-2 cursor-pointer'><strong>APPLE</strong></a>
            <a href='#' className='border-r-2 pr-2 cursor-pointer'><strong>USADOS</strong></a>
            <a href='#' className='cursor-pointer'><strong>ACESSÓRIOS</strong></a>
          </div>
        </header>
  )
}
