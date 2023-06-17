import { ChevronDown, Sparkle, Check, MoveLeft, MoveRight } from 'lucide-react';

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
                <div className="flex flex-row">
                  <div className="flex flex-row gap-6 w-full items-center justify-center max-sm:flex-col">
                      <div className="flex flex-col gap-4 items-center h-30  text-lg p-6 rounded-md bg-gradient-to-t from-ff via-ff to-white/70 w-1/4 max-sm:w-full text-black">
                        <img className="" src="../public/img/image5.png" alt="" />
                        <h2 className="px-2"><strong>Iphone 13</strong></h2>
                        <p className="flex flex-row items-center  w-full gap-2 px-2 w-3/4 ">
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                        </p>
                        <div className="px-2 flex flex-col gap-2">
                          <p><strong>R$ 10.0000,00</strong></p>
                          <p>até <strong>12x</strong> de <strong>R$833</strong> sem juros <br /> ou <strong className="text-preço text-xl">R$ 12.0020,00</strong>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 items-center h-30  text-lg p-6 rounded-md bg-gradient-to-t from-ff via-ff to-white/70 w-1/4 max-sm:w-full text-black">
                        <img className="" src="../public/img/image5.png" alt="" />
                        <h2 className="px-2"><strong>Iphone 13</strong></h2>
                        <p className="flex flex-row items-start w-full gap-2 px-2 w-3/4 ">
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                        </p>
                        <div className="px-2 flex flex-col gap-2">
                          <p><strong>R$ 10.0000,00</strong></p>
                          <p>até <strong>12x</strong> de <strong>R$833</strong> sem juros <br /> ou <strong className="text-preço text-xl">R$ 12.0020,00</strong>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 items-center h-30  text-lg p-6 rounded-md bg-gradient-to-t from-ff via-ff to-white/70 w-1/4 max-sm:w-full text-black">
                        <img className="" src="../public/img/image5.png" alt="" />
                        <h2 className="px-2"><strong>Iphone 13</strong></h2>
                        <p className="flex flex-row items-start w-full gap-2 px-2 w-3/4 ">
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                        </p>
                        <div className="px-2 flex flex-col gap-2">
                          <p><strong>R$ 10.0000,00</strong></p>
                          <p>até <strong>12x</strong> de <strong>R$833</strong> sem juros <br /> ou <strong className="text-preço text-xl">R$ 12.0020,00</strong>
                          </p>
                        </div>
                      </div>
                  </div>
                </div>

                {/* seson 2 */}
                <div className="flex flex-row">
                  <div className="flex flex-row gap-6 w-full items-center justify-center max-sm:flex-col">
                      <div className="flex flex-col gap-4 items-center h-30  text-lg p-6 rounded-md bg-gradient-to-t from-ff via-ff to-white/70 w-1/4 max-sm:w-full text-black">
                        <img className="" src="../public/img/image5.png" alt="" />
                        <h2 className="px-2"><strong>Iphone 13</strong></h2>
                        <p className="flex flex-row items-start w-full gap-2 px-2 w-3/4 ">
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                        </p>
                        <div className="px-2 flex flex-col gap-2">
                          <p><strong>R$ 10.0000,00</strong></p>
                          <p>até <strong>12x</strong> de <strong>R$833</strong> sem juros <br /> ou <strong className="text-preço text-xl">R$ 12.0020,00</strong>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 items-center h-30  text-lg p-6 rounded-md bg-gradient-to-t from-ff via-ff to-white/70 w-1/4 max-sm:w-full text-black">
                        <img className="" src="../public/img/image5.png" alt="" />
                        <h2 className="px-2"><strong>Iphone 13</strong></h2>
                        <p className="flex flex-row items-start w-full gap-2 px-2 w-3/4 ">
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                        </p>
                        <div className="px-2 flex flex-col gap-2">
                          <p><strong>R$ 10.0000,00</strong></p>
                          <p>até <strong>12x</strong> de <strong>R$833</strong> sem juros <br /> ou <strong className="text-preço text-xl">R$ 12.0020,00</strong>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 items-center h-30  text-lg p-6 rounded-md bg-gradient-to-t from-ff via-ff to-white/70 w-1/4 max-sm:w-full text-black">
                        <img className="" src="../public/img/image5.png" alt="" />
                        <h2 className="px-2"><strong>Iphone 13</strong></h2>
                        <p className="flex flex-row items-start w-full gap-2 px-2 w-3/4 ">
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                        </p>
                        <div className="px-2 flex flex-col gap-2">
                          <p><strong>R$ 10.0000,00</strong></p>
                          <p>até <strong>12x</strong> de <strong>R$833</strong> sem juros <br /> ou <strong className="text-preço text-xl">R$ 12.0020,00</strong>
                          </p>
                        </div>
                      </div>
                  </div>
                </div>
                {/* section 3 */}
                <div className="flex flex-row">
                  <div className="flex flex-row gap-6 w-full items-center justify-center max-sm:flex-col">
                      <div className="flex flex-col gap-4 items-center h-30  text-lg p-6 rounded-md bg-gradient-to-t from-ff via-ff to-white/70 w-1/4 max-sm:w-full text-black">
                        <img className="" src="../public/img/image5.png" alt="" />
                        <h2 className="px-2"><strong>Iphone 13</strong></h2>
                        <p className="flex flex-row items-start w-full gap-2 px-2 w-3/4 ">
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                        </p>
                        <div className="px-2 flex flex-col gap-2">
                          <p><strong>R$ 10.0000,00</strong></p>
                          <p>até <strong>12x</strong> de <strong>R$833</strong> sem juros <br /> ou <strong className="text-preço text-xl">R$ 12.0020,00</strong>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 items-center h-30  text-lg p-6 rounded-md bg-gradient-to-t from-ff via-ff to-white/70 w-1/4 max-sm:w-full text-black">
                        <img className="" src="../public/img/image5.png" alt="" />
                        <h2 className="px-2"><strong>Iphone 13</strong></h2>
                        <p className="flex flex-row items-start w-full gap-2 px-2 w-3/4 ">
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                        </p>
                        <div className="px-2 flex flex-col gap-2">
                          <p><strong>R$ 10.0000,00</strong></p>
                          <p>até <strong>12x</strong> de <strong>R$833</strong> sem juros <br /> ou <strong className="text-preço text-xl">R$ 12.0020,00</strong>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 items-center h-30  text-lg p-6 rounded-md bg-gradient-to-t from-ff via-ff to-white/70 w-1/4 max-sm:w-full text-black">
                        <img className="" src="../public/img/image5.png" alt="" />
                        <h2 className="px-2"><strong>Iphone 13</strong></h2>
                        <p className="flex flex-row items-start w-full gap-2 px-2 w-3/4 ">
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                        </p>
                        <div className="px-2 flex flex-col gap-2">
                          <p><strong>R$ 10.0000,00</strong></p>
                          <p>até <strong>12x</strong> de <strong>R$833</strong> sem juros <br /> ou <strong className="text-preço text-xl">R$ 12.0020,00</strong>
                          </p>
                        </div>
                      </div>
                  </div>
                </div>
                {/* section 4 */}
                <div className="flex flex-row">
                  <div className="flex flex-row gap-6 w-full items-center justify-center max-sm:flex-col">
                      <div className="flex flex-col gap-4 items-center h-30  text-lg p-6 rounded-md bg-gradient-to-t from-ff via-ff to-white/70 w-1/4 max-sm:w-full text-black">
                        <img className="" src="../public/img/image5.png" alt="" />
                        <h2 className="px-2"><strong>Iphone 13</strong></h2>
                        <p className="flex flex-row items-start w-full gap-2 px-2 w-3/4 ">
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                        </p>
                        <div className="px-2 flex flex-col gap-2">
                          <p><strong>R$ 10.0000,00</strong></p>
                          <p>até <strong>12x</strong> de <strong>R$833</strong> sem juros <br /> ou <strong className="text-preço text-xl">R$ 12.0020,00</strong>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 items-center h-30  text-lg p-6 rounded-md bg-gradient-to-t from-ff via-ff to-white/70 w-1/4 max-sm:w-full text-black">
                        <img className="" src="../public/img/image5.png" alt="" />
                        <h2 className="px-2"><strong>Iphone 13</strong></h2>
                        <p className="flex flex-row items-start w-full gap-2 px-2 w-3/4 ">
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                        </p>
                        <div className="px-2 flex flex-col gap-2">
                          <p><strong>R$ 10.0000,00</strong></p>
                          <p>até <strong>12x</strong> de <strong>R$833</strong> sem juros <br /> ou <strong className="text-preço text-xl">R$ 12.0020,00</strong>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 items-center h-30  text-lg p-6 rounded-md bg-gradient-to-t from-ff via-ff to-white/70 w-1/4 max-sm:w-full text-black">
                        <img className="" src="../public/img/image5.png" alt="" />
                        <h2 className="px-2"><strong>Iphone 13</strong></h2>
                        <p className="flex flex-row items-start  w-3/4 ">
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                          <Sparkle size={20} color="#4d8e29" />
                        </p>
                        <div className="px-2 flex flex-col gap-2">
                          <p><strong>R$ 10.0000,00</strong></p>
                          <p>até <strong>12x</strong> de <strong>R$833</strong> sem juros <br /> ou <strong className="text-preço text-xl">R$ 12.0020,00</strong>
                          </p>
                        </div>
                      </div>
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