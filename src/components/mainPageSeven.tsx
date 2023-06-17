import { ArrowLeft, ArrowRight, Sparkle } from 'lucide-react';

export const MainPageSeven = () => {
  return (
    <main className="w-full mb-mlg max-sm:mb-mB" >
    <section className="w-full flex flex-col items-center justify-start mt-16 p-16 gap-36">
      <h1 className="text-4xl font-bold text-white">Destaques</h1>
      <div className="flex flex-row">
        <div className="flex flex-row gap-6 w-full items-center justify-center max-sm:flex-col">
        <ArrowLeft className="max-sm:opacity-0"  size={35}/>
        <div className="flex flex-col gap-4 items-center h-30  text-sm p-6 rounded-md bg-gradient-to-t from-ff via-ff to-white/70 w-1/4 max-sm:w-full">
            <img className="" src="../public/img/image5.png" alt="" />
            <h2 className="px-2"><strong>IMotorola Boladão</strong></h2>
            <p className="flex flex-row items-start w-full gap-2 px-2">
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
            </p>
            <div className="px-2 flex flex-col gap-2">
              <p><strong>R$ 10.0000,00</strong></p>
              <p>até <strong>12x</strong> de <strong>R$833</strong> sem juros <br /> ou <strong className="text-preço text-xl">R$ 12.0020,00</strong>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center h-30  text-sm p-6 rounded-md bg-gradient-to-t from-ff via-ff to-white/70 w-1/4 max-sm:w-full">
            <img className="" src="../public/img/produto2.png" alt="" />
            <h2 className="px-2"><strong>Xiomi 12 Max - 500gb</strong></h2>
            <p className="flex flex-row items-start w-full gap-2 px-2">
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
            </p>
            <div className="px-2 flex flex-col gap-2">
              <p><strong>R$ 5.0020,00</strong></p>
              <p>até <strong>12x</strong> de <strong>R$416</strong> sem juros <br /> ou <strong className="text-preço text-xl">R$ 5.0020,00</strong>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center h-30  text-sm p-6 rounded-md bg-gradient-to-t from-ff via-ff to-white/70 w-1/4 max-sm:w-full">
            <img className="" src="../public/img/produto3.png" alt="" />
            <h2 className="px-2"><strong>IMotorola Boladão</strong></h2>
            <p className="flex flex-row items-start w-full gap-2 px-2">
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
            </p>
            <div className="px-2 flex flex-col gap-2">
              <p><strong>R$ 3.0020,00</strong></p>
              <p>até <strong>12x</strong> de <strong>R$250</strong> sem juros <br /> ou <strong className="text-preço text-xl">R$ 3.0020,00</strong>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center h-30  text-sm p-6 rounded-md bg-gradient-to-t from-ff via-ff to-white/70 w-1/4 max-sm:w-full">
            <img className="" src="../public/img/memoria.png" alt="" />
            <h2 className="px-2"><strong>Memoria Ram 128gb</strong></h2>
            <p className="flex flex-row items-start w-full gap-2 px-2">
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
            </p>
            <div className="px-2 flex flex-col gap-2">
              <p><strong>R$ 1.000,00</strong></p>
              <p>até <strong>12x</strong> de <strong>R$100</strong> sem juros <br /> ou <strong className="text-preço text-xl">R$ 1.000,00</strong>
              </p>
            </div>
          </div>


          <ArrowRight className="max-sm:opacity-0"  size={35} color="#000000" />
        </div>
      </div>

      <div className="w-full flex flex-row items-center justify-center gap-6 max-sm:flex-col">
        <img src="../public/img/a.png" alt="" />
        <img src="../public/img/a (1).png" alt="" />
      </div>

      <h1 className="text-4xl font-bold text-white">Promoções</h1>
      {/* PROMOÇÕES */}
      <div className="flex flex-row">
        <div className="flex flex-row gap-6 w-full items-center justify-center max-sm:flex-col">
        <ArrowLeft className="max-sm:opacity-0"  size={35}/>
        <div className="flex flex-col gap-4 items-center h-30  text-sm p-6 rounded-md bg-gradient-to-t from-ff via-ff to-white/70 w-1/4 max-sm:w-full">
            <img className="" src="../public/img/image5.png" alt="" />
            <h2 className="px-2"><strong>IMotorola Boladão</strong></h2>
            <p className="flex flex-row items-start w-full gap-2 px-2">
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
            </p>
            <div className="px-2 flex flex-col gap-2">
              <p><strong>R$ 10.0000,00</strong></p>
              <p>até <strong>12x</strong> de <strong>R$833</strong> sem juros <br /> ou <strong className="text-preço text-xl">R$ 12.0020,00</strong>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center h-30  text-sm p-6 rounded-md bg-gradient-to-t from-ff via-ff to-white/70 w-1/4 max-sm:w-full">
            <img className="" src="../public/img/produto2.png" alt="" />
            <h2 className="px-2"><strong>Xiomi 12 Max - 500gb</strong></h2>
            <p className="flex flex-row items-start w-full gap-2 px-2">
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
            </p>
            <div className="px-2 flex flex-col gap-2">
              <p><strong>R$ 5.0020,00</strong></p>
              <p>até <strong>12x</strong> de <strong>R$416</strong> sem juros <br /> ou <strong className="text-preço text-xl">R$ 5.0020,00</strong>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center h-30  text-sm p-6 rounded-md bg-gradient-to-t from-ff via-ff to-white/70 w-1/4 max-sm:w-full">
            <img className="" src="../public/img/produto3.png" alt="" />
            <h2 className="px-2"><strong>IMotorola Boladão</strong></h2>
            <p className="flex flex-row items-start w-full gap-2 px-2">
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
            </p>
            <div className="px-2 flex flex-col gap-2">
              <p><strong>R$ 3.0020,00</strong></p>
              <p>até <strong>12x</strong> de <strong>R$250</strong> sem juros <br /> ou <strong className="text-preço text-xl">R$ 3.0020,00</strong>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center h-30  text-sm p-6 rounded-md bg-gradient-to-t from-ff via-ff to-white/70 w-1/4 max-sm:w-full">
            <img className="" src="../public/img/memoria.png" alt="" />
            <h2 className="px-2"><strong>Memoria Ram 128gb</strong></h2>
            <p className="flex flex-row items-start w-full gap-2 px-2">
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
              <Sparkle size={15} color="#4d8e29" />
            </p>
            <div className="px-2 flex flex-col gap-2">
              <p><strong>R$ 1.000,00</strong></p>
              <p>até <strong>12x</strong> de <strong>R$100</strong> sem juros <br /> ou <strong className="text-preço text-xl">R$ 1.000,00</strong>
              </p>
            </div>
          </div>


          <ArrowRight className="max-sm:opacity-0"  size={35} color="#000000" />
        </div>
      </div>

        <div className=" flex flex-row items-center justify-center w-3/5 max-sm:w-full">
          <img className="w-full rounded-md  h-72 max-sm:h-36" src="../public/img/Inserir um título (4) 1.png" alt="" />
        </div>
    </section>
  </main>
  );
}