import { ChevronDown, Check, MoveLeft, MoveRight } from 'lucide-react';
import { products } from '../components/pageSeven/products';
import { ProductsDiv } from '../components/pageSeven/productsDiv';

export const MainPageEight = () => {
  return (
    <main className='text-white mb-mB max-sm: mt-36'>
          <div className=' flex flex-row items-start justify-center p-8 mt-28 max-md:flex-col w-full max-lg:p-0'>
            <div className=' max-lg:w-full flex flex-col max-sm:gap-10'>
              <section className='flex flex-col items-start justify-center  p-10 max-lg:p-0 max-lg:pb-4'>
              <div className='w-boxmd h-boxsx  bg-button rounded-md font-bold flex flex-row justify-between gap-2 p-2 max-lg:m-auto max-sm:w-full'>Apple <ChevronDown />
              </div>
              <a className='p-2 border-b border-black bg-blackzinho w-full flex flex-row items-center gap-2' href="#">  Iphone 13</a>
              <a className='p-2 border-b border-black bg-blackzinho w-full flex flex-row items-center gap-2' href="#">  Air Pods</a>
              <a className='p-2 border-b border-black bg-blackzinho w-full flex flex-row items-center gap-2' href="#">  Iphone 14 PRO</a>
              <a className='p-2 border-b border-black bg-blackzinho w-full flex flex-row items-center gap-2' href="#">  IPAD</a>
              </section>

              <section className='flex flex-col items-start justify-center  p-10 max-lg:p-0 max-lg:pb-4'>
              <a className='p-2 border-b-2 w-full flex flex-row items-center gap-2' href="#">  XIAOMI</a>
              <a className='p-2 border-b-2  w-full flex flex-row items-center gap-2' href="#">  REALME</a>
              <a className='p-2 border-b-2  w-full flex flex-row items-center gap-2' href="#">  MOTOROLA</a>
              <a className='p-2 border-b-2  w-full flex flex-row items-center gap-2' href="#">  APPLE</a>
              <a className='p-2 border-b-2  w-full flex flex-row items-center gap-2' href="#">  USADOS</a>
              </section>

              <section className='flex flex-col items-start justify-center  p-10 max-lg:p-0 max-lg:pb-4'>
              <a className='p-2 border-b-2 w-full flex flex-row items-center gap-2' href="#"> <div className="w-5 h-5 rounded-sm border-2"><Check size={18} /></div> de R$25,00 a R$250,00</a>
              <a className='p-2 border-b-2 w-full flex flex-row items-center gap-2' href="#"> <div className="w-5 h-5 rounded-sm border-2"><Check size={18} /></div> de R$25,00 a R$250,00</a>
              <a className='p-2 border-b-2 w-full flex flex-row items-center gap-2' href="#"> <div className="w-5 h-5 rounded-sm border-2"><Check size={18} /></div> de R$25,00 a R$250,00</a>
              <a className='p-2 border-b-2 w-full flex flex-row items-center gap-2' href="#"> <div className="w-5 h-5 rounded-sm border-2"><Check size={18} /></div> de R$25,00 a R$250,00</a>
              <a className='p-2 border-b-2 w-full flex flex-row items-center gap-2' href="#"> <div className="w-5 h-5 rounded-sm border-2"><Check size={18} /></div> de R$25,00 a R$250,00</a>
              </section>
            </div>

            {/* INICIO SECTION TWO ^^ */}
              <div className='flex flex-col max-lg:w-full max-lg:mt-12  w-3/5 gap-10 mt-10 max-sm:w-4/5 max-sm:m-auto'>
                <div className="flex flex-row text-black">
                  <div className="flex flex-row gap-6 w-full items-center justify-center max-sm:flex-col">
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
                  </div>
                </div>

                {/* seson 2 */}
                <div className="flex flex-row text-black">
                  <div className="flex flex-row gap-6 w-full items-center justify-center max-sm:flex-col">
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
                  </div>
                </div>
                {/* section 3 */}
                <div className="flex flex-row text-black">
                  <div className="flex flex-row gap-6 w-full items-center justify-center max-sm:flex-col">
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
                  </div>
                </div>
                {/* section 4 */}
                <div className="flex flex-row text-black">
                  <div className="flex flex-row gap-6 w-full items-center justify-center max-sm:flex-col">
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
                  </div>

                </div>
                <div className="w-4/5 flex flex-row items-center justify-center m-auto gap-10 max-sm:gap-5">
                <a href="">
                  <MoveLeft size={40}/>
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