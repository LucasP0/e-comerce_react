import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import formatCurrency from "../formatCurrency/formatCurrency";
import { CartItem } from "./cartItem";

export const CartComponent = () => {
  const { cartItems, isCartVisible } = useContext<any>(AppContext);
  const totalPrice = cartItems.reduce((acc, item) =>
    item.valor + acc, 0);
  return (
    <section className={`cart  max-w-[300px] bg-white h-[100vh] absolute overflow-y-scroll top-0 right-0 z-10 flex flex-col justify-between pt-[200px] opacity-0 ${isCartVisible ? 'cart--active' : ''} `}>
      <div>
        { cartItems.map((item) =>
          <CartItem
            id={item.id}
            data={item}
          />)}
      </div>
      <div className="flex flex-row gap-4 items-center p-4">
      <p className="text-2xl">Carrinho:</p>
      <h1 className="text-xl font-normal text-center w-full">{formatCurrency(totalPrice, 'BRL')}</h1>
      </div>
    </section>
  )
}