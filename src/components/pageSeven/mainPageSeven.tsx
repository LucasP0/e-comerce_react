
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ProductsDiv } from './productsDiv';
import { products } from './products';
import { DivCaroulsel } from './DivCaroulsel';


export const MainPageSeven = () => {
  return (
    <main className="w-full mb-5 max-sm:mb-5" >
      {/* TENTANDO LLLLKKKKKKKKKKKKKKKKK */}
      <DivCaroulsel />
      {/* TENTANDO LLLLKKKKKKKKKKKKKKKKK */}
    <section className="w-full flex flex-col items-center justify-start mt-16 p-16 gap-36">
      <h1 className="text-4xl font-bold text-white">Destaques</h1>
      <div className="flex flex-row">
        <div className="flex flex-row gap-6 w-full items-center justify-center max-sm:flex-col">
          <a href="#">
            <ArrowLeft className="max-sm:opacity-0"  size={35}/>
          </a>
          {products && products.map((p, k) => {
            return(
              <ProductsDiv
              name={p.name}
              imgUrl={p.imgUrl}
              description={p.description}
              valor={p.valor}
              key={k}
              />
            )
          })}
          <a href="#">
            <ArrowRight className="max-sm:opacity-0"  size={35} color="#000000" />
          </a>
        </div>
      </div>

      <div className="w-full flex flex-row items-center justify-center gap-6 max-md:flex-col">
        <img src="../img/a.png" alt="" />
        <img src="../img/a (1).png" alt="" />
      </div>

      <h1 className="text-4xl font-bold text-white">Promoções</h1>
      {/* PROMOÇÕES */}
      <div className="flex flex-row">
        <div className="flex flex-row gap-6 w-full items-center justify-center max-sm:flex-col">
        <a href="#">
          <ArrowLeft className="max-sm:opacity-0"  size={35}/>
        </a>
        {products && products.map((p, k) => {
            return(
              <ProductsDiv
              name={p.name}
              imgUrl={p.imgUrl}
              description={p.description}
              valor={p.valor}
              key={k}
              />
            )
          })}
          <a href="#">
            <ArrowRight className="max-sm:opacity-0"  size={35} color="#000000" />
          </a>
        </div>
      </div>

        <div className=" flex flex-row items-center justify-center  max-sm:w-full bg-black">
          <img className="w-full rounded-md  h-72 max-sm:h-36" src="../img/Inserir um título (4) 1.png" alt="" />
        </div>
    </section>
  </main>
  );
}
