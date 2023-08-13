import { Link } from "react-router-dom";
import formatCurrency from "../formatCurrency/formatCurrency";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { ShoppingCart } from "lucide-react";

interface props {
  name: string;
  valor: string;
  description: string;
  imgUrl: string;
  id: number;
  p: number;
}

export const ProductsDiv = ({ valor, description, imgUrl, name, p, id }: props) => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const data = {imgUrl, name, p, id, valor};
  const handleClick = () => {
    setCartItems([ ...cartItems, data]);
    console.log(cartItems)
  }
  return (
      <Link to={''}>
        <div className="flex flex-col gap-4 items-center w-72 h-30  text-sm p-6 rounded-md bg-gradient-to-t from-ff via-ff to-white/70 max-sm:w-[300px] group relative">
            <img className="object-cover" src={imgUrl} alt="" />
            <div className='absolute right-2 top-2 w-9 h-9 flex justify-center items-center opacity-0 group-hover:opacity-100 cursor-pointer  '>
              <ShoppingCart
                onClick={handleClick}
              />
      </div>
            <h2 className="px-2 font-semibold text-lg"><strong>{name}</strong>
            </h2>
            <div className="px-2 flex flex-col gap-2">
              <p>
                {description}<br/>
                <div className="flex flex-col items-start gap-2">
                  <strong className="text-preço text-xl">{
                  formatCurrency(valor, 'BRL') }
                  </strong>
                  <p>a vista </p>
                </div>
              </p>
              <h2>ou 12x de {formatCurrency(p/12, 'BRL')}</h2>
            </div>
          </div>
      </Link>


  )
}