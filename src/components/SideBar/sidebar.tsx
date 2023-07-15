import { Nav } from './nav';

export const Sidebar = () => {
  return (
    <header className='bg-white flex flex-col'>
          <Nav />
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
