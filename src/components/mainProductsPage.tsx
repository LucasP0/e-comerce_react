import { MoveLeft, MoveRight } from 'lucide-react';
import { products } from './pageSeven/products';
import { ProductsDiv } from './pageSeven/productsDiv';

export const MainProductsPage= () => {
  return (
    <main className='text-white mb-5 max-sm:mt-2'>
      <div className=' flex flex-row items-start justify-center p-8 mt-10 max-md:flex-col w-full max-lg:p-0'>
        <div className=' max-lg:w-full flex flex-col max-sm:gap-10'>
          <section className='flex flex-col items-start justify-center  p-10 max-lg:p-0 max-lg:pb-4'>
            <select className='w-boxmd bg-button rounded-md font-bold gap-2 p-4 max-lg:m-auto max-sm:w-full'>
              <option selected >Iphone 13</option>
              <option>Air Pods</option>
              <option>Iphone 14 PRO</option>
              <option>IPAD</option>
            </select>
          </section>

          <section className='flex flex-col items-start justify-center  p-10 max-lg:p-0 max-lg:pb-4'>
            <a className='p-2 border-b-2 w-full flex flex-row items-center gap-2 hover:bg-preço' href="#">XIAOMI</a>
            <a className='p-2 border-b-2 w-full flex flex-row items-center gap-2 hover:bg-preço' href="#">REALME</a>
            <a className='p-2 border-b-2 w-full flex flex-row items-center gap-2 hover:bg-preço' href="#">MOTOROLA</a>
            <a className='p-2 border-b-2 w-full flex flex-row items-center gap-2 hover:bg-preço' href="#">APPLE</a>
            <a className='p-2 border-b-2 w-full flex flex-row items-center gap-2 hover:bg-preço' href="#">USADOS</a>
          </section>

          {/*<section className='flex flex-col items-start justify-center  p-10 max-lg:p-0 max-lg:pb-4'>
            <a className='p-2 border-b-2 w-full flex flex-row items-center gap-2'> <div className="w-5 h-5 rounded-sm border-2"><Check size={18} /></div> de R$25,00 a R$250,00</a>
            <a className='p-2 border-b-2 w-full flex flex-row items-center gap-2'> <div className="w-5 h-5 rounded-sm border-2"><Check size={18} /></div> de R$251,00 a R$500,00</a>
            <a className='p-2 border-b-2 w-full flex flex-row items-center gap-2'> <div className="w-5 h-5 rounded-sm border-2"><Check size={18} /></div> de R$25,00 a R$250,00</a>
            <a className='p-2 border-b-2 w-full flex flex-row items-center gap-2'> <div className="w-5 h-5 rounded-sm border-2"><Check size={18} /></div> de R$25,00 a R$250,00</a>
            <a className='p-2 border-b-2 w-full flex flex-row items-center gap-2'> <div className="w-5 h-5 rounded-sm border-2"><Check size={18} /></div> de R$25,00 a R$250,00</a>
          </section>*/}
        </div>

        {/* INICIO SECTION TWO ^^ */}
        <div className='flex flex-col max-lg:w-full max-lg:mt-12  w-3/5 gap-10 mt-10 max-sm:w-4/5 max-sm:m-auto'>
          <div className="flex flex-row text-black">
            <div className="grid grid-cols-3 max-md2:grid-cols-2 gap-3 max-sm:grid-cols-1 place-items-center max-sm:mt-20 max-sm:w-full px-2">
              {products && products.map((p, k) => {
                return (
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
          </div>
          <div className="w-4/5 flex flex-row items-center justify-center m-auto gap-10 max-sm:gap-5">
            <a href="">
              <MoveLeft size={40} />
            </a>
            <div className="w-10 h-10 border-2 rounded-full flex flex-row justify-center items-center bg-button/20">1</div>
            <div className="w-10 h-10 border-2 rounded-full flex flex-row justify-center items-center">2</div>
            <div className="w-10 h-10 border-2 rounded-full flex flex-row justify-center items-center">3</div>
            <div className="w-10 h-10 border-2 rounded-full flex flex-row justify-center items-center">4</div>
            <div className="w-10 h-10 border-2 rounded-full flex flex-row justify-center items-center">5</div>
            <div className="w-10 h-10 border-2 rounded-full flex flex-row justify-center items-center">6</div>
            <a href="">
              <MoveRight size={40} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}