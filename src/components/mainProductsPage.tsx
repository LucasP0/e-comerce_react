import { products } from './pageSeven/products';
import { ProductsDiv } from './pageSeven/productsDiv';

export const MainProductsPage= () => {
  return (
    <main className='text-white mb-32 max-sm:mt-2 w-ful'>
      <div className=' flex flex-row items-start  justify-center p-6 mt-10 max-md:flex-col w-full max-lg:p-0'>
        <div className='flex flex-col max-sm:gap-10'>
          <section className='flex flex-col items-start justify-center  p-10 max-lg:p-0 max-lg:pb-4'>
            <select className='w-boxmd bg-button/40 rounded-md font-bold gap-2 p-4 max-lg:m-auto max-sm:w-full'>
              <option className='text-black' selected >Iphone 13</option>
              <option className='text-black'>Air Pods</option>
              <option className='text-black'>Iphone 14 PRO</option>
              <option className='text-black'>IPAD</option>
            </select>
          </section>

          <section className='flex flex-col items-start justify-center  p-10 max-lg:p-0 max-lg:pb-4'>
            <a className='p-2 border-b-2 w-full flex  flex-row items-center gap-2 hover:bg-preço hover:text-black' href="#">XIAOMI</a>
            <a className='p-2 border-b-2 w-full flex flex-row items-center gap-2 hover:bg-preço hover:text-black' href="#">REALME</a>
            <a className='p-2 border-b-2 w-full flex flex-row items-center gap-2 hover:bg-preço hover:text-black' href="#">MOTOROLA</a>
            <a className='p-2 border-b-2 w-full flex flex-row items-center gap-2 hover:bg-preço hover:text-black' href="#">APPLE</a>
            <a className='p-2 border-b-2 w-full flex flex-row items-center gap-2 hover:bg-preço hover:text-black' href="#">USADOS</a>
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
        <div className='flex flex-col max-2xl:w-full  max-lg:mt-12  w-3/5 gap-10 mt-10 max-sm:w-full max-sm:m-aut'>
          <div className="flex flex-row text-black">
            <div className="grid grid-cols-3  gap-3 max-sm2:grid-cols-2 max-sm:grid-cols-1 place-items-center max-sm:mt-20
            max-xl: overflow-x-auto h-[1100px] max-md2:w-full">
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
        </div>
      </div>
    </main>
  );
}