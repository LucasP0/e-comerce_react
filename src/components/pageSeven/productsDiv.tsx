interface props {
  name: string;
  valor: string;
  description: string;
  imgUrl: string;
}

export const ProductsDiv = ({ valor, description, imgUrl, name }: props) => {
  return (
    <div className="flex flex-col gap-4 items-center h-30  text-sm p-6 rounded-md bg-gradient-to-t from-ff via-ff to-white/70 max-sm:w-full">
    <img className="" src={imgUrl} alt="" />
    <h2 className="px-2"><strong>{name}</strong>
    </h2>
    <div className="px-2 flex flex-col gap-2">
      <p>
        <strong>R${valor}</strong>
      </p>
      <p>
        {description}<br/>
        <strong className="text-preço text-xl">R${valor}
        </strong>
      </p>
    </div>
  </div>
  )
}