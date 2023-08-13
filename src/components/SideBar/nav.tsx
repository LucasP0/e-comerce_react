import { Search, ShoppingCart, User2 } from "lucide-react"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../context/AppContext";

export const Nav = () => {
  const [searchValue, setSearchValue] = useState("");
  const { isCartVisible, setIsCartVisible } = useContext<any>(AppContext);
  // função de search:
  const handleSearch = (event: any) => {
    event.preventDefault();
  }
  return (
    <nav className=' h-20 flex flex-row gap-7 items-center justify-between p-12 max-lg:w-full max-sm:flex-col max-lg:h-auto max-lg:py-2 z-50'>
      <div className='flex flex-row items-center gap-8 max-md:flex-col w-full '>
        <Link to={`/`}>
          <img src="../img/LOGO_1080x1080 - VERSÃO HORIZONTAL 01 2.png" alt="logo" />
        </Link>
        <form className='bg-input w-inputl  rounded-md h-full flex flex-row gap-2 max-lg:w-full' onSubmit={handleSearch}>
          <input
            className='w-full  bg-input  rounded-l-md p-2 h-[50px] border-r-2 border-black/10' type="search" name="search"
            value={searchValue}
            onChange={({target}) => setSearchValue(target.value)}
            placeholder='Faça sua pesquisa aqui' id="" />
          <button className='text-search  px-4'><Search /></button>
        </form>
      </div>
      <div className='flex flex-row items-center gap-14 max-md:flex-col max-lg:gap-2'>
        <Link to={`/login`}>
          <button className='bg-input w-48 h-12 rounded-md flex flex-row items-center p-3 gap-2'>
            <User2 /> Seja bem-Vindo
          </button>
        </Link>
        <button
          className='bg-input w-48 h-12 rounded-md flex flex-row items-center p-3 gap-2'
          onClick={ () => setIsCartVisible(!isCartVisible) }
          >
          <ShoppingCart /> Seu carrinho
        </button>
      </div>
    </nav>
  )
}