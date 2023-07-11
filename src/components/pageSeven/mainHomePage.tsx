
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ProductsDiv } from './productsDiv';
import { products, promocoes } from './products';
import { DivCaroulsel } from './DivCaroulsel';



export const MainHomePage = () => {
const scrollLeft = () => {
  document.getElementById('content').scrollLeft -= 1300;
}
const scrollRight = () => {
  document.getElementById('content').scrollLeft += 1300;
}
const scrollLeft2 = () => {
  document.getElementById('content2').scrollLeft -= 1300;
}
const scrollRight2 = () => {
  document.getElementById('content2').scrollLeft += 1300;
}
  return (
    <main className="w-full mb-5 max-sm:mb-5" >
      <DivCaroulsel />
    <section className="w-full flex flex-col items-center justify-start mt-16 p-16 gap-36">
      <h1 className="text-4xl font-bold text-white">Destaques</h1>
        <div className='flex flex-col items-center justify-center w-full'>
          <div className="w-full flex flex-row  items-center justify-center gap-6 max-sm:gap-0 max-sm:w-[320px] ">
          <button className="max-sm:hidden" onClick={scrollLeft}><ArrowLeft size={30} /></button>
            <div id="content" className="carousel p-4 flex  gap-10 justify-start relative overflow-x-auto scroll-smooth  scrollbar-hide max-md2:w-[980px]">
              {products && products.map((p, k,) => {
                return(
                    <ProductsDiv
                    link={p.url}
                    name={p.name}
                    imgUrl={p.imgUrl}
                    description={p.description}
                    valor={p.valor}
                    key={k}
                    />
                )
              })}
            </div>
            <button className="max-sm:hidden" onClick={scrollRight}><ArrowRight size={30} /></button>
          </div>
          <div className='flex flex-row gap-2 items-center justify-center text-white opacity-0 max-sm:opacity-100'>
            <h1>Deslize para a Direta </h1>
            <ArrowRight size={30} />
          </div>
          </div>

      <div className="w-full flex flex-row items-center justify-center gap-6 max-md:flex-col">
        <img src="../img/a.png" alt="" />
        <img src="../img/a (1).png" alt="" />
      </div>

      <h1 className="text-4xl font-bold text-white">Promoções</h1>
      {/* PROMOÇÕES */}
      <div className='flex flex-col items-center justify-center w-full'>
        <div className="w-full flex flex-row items-center justify-center gap-10 max-sm:gap-0 max-sm:w-[320px]">
          <button className="max-sm:hidden" onClick={scrollLeft2}><ArrowLeft size={30} /></button>
            <div id="content2" className="carousel p-4 flex max-w-[1300px] gap-8 items-center justify-start relative overflow-x-auto scroll-smooth w-full scrollbar-hide max-md2:w-[980px]">
              {promocoes  && promocoes.map((p, k,) => {
                return(
                    <ProductsDiv
                    link={p.url}
                    name={p.name}
                    imgUrl={p.imgUrl}
                    description={p.description}
                    valor={p.valor}
                    key={k}
                    />
                )
              })}
            </div>
            <button className="max-sm:hidden" onClick={scrollRight2}><ArrowRight size={30} /></button>
          </div>
          <div className='flex flex-row gap-2 items-center justify-center text-white opacity-0 max-sm:opacity-100'>
              <h1>Deslize para a Direta </h1>
              <ArrowRight size={30} />
            </div>
      </div>


        <div className=" flex flex-row items-center justify-center  max-sm:w-full bg-black">
          <img className="w-full rounded-md  h-72 max-sm:h-36" src="../img/Inserir um título (4) 1.png" alt="" />
        </div>
    </section>
  </main>
  );
}
