import { Trash2 } from "lucide-react";
import formatCurrency from "../formatCurrency/formatCurrency";


export const CartItem = ({ data }: any) => {
  const { valor, imgUrl, name, id } = data;
  return (
    <section className="flex flex-row items-center border-b-2 pb-5 mb-5 gap-2 last:border-0 p-2">
    <img
      className="w-16"
      src={imgUrl}
      alt="imagem do produto"
    />
    <div className=" w-full flex flex-row gap-2 items-center justify-evenly">
      <div className="flex  flex-col items-center">
        <h3 className="text-[0.85rem] font-medium text-black/50 ">
          {name}

        </h3>
        <h3 className="text-[25px] font-medium">
          {formatCurrency(valor, 'BRL')}
        </h3>
      </div>
      <button
        className="button_remove-item"
        type="button"

        >
        <Trash2
          color="#d83232" size={20} />
      </button>
    </div>
  </section>
  )
}