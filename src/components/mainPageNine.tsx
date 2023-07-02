import {  Star, ChevronDown } from 'lucide-react';

export const MainPageNine = () => {
  return (
    <main className="flex flex-col w-full items-center justify-center mt-24 mb-5">
    <div className="flex flex-row items-start justify-center w-4/5 bg-white p-20 gap-20 rounded-md max-md:flex-col max-sm:w-full ">
      <section className="flex flex-col items-center border-r-2 border-button/20">
        <img src="../img/image 6.png" alt="" />
        <div className="flex flex-row gap-8 items-center max-sm:grid max-sm:grid-cols-2">
        <img src="../img/image 5.png" alt="" />
        <img src="../img/image 13.png" alt="" />
        <img src="../img/image 14.png" alt="" />
        </div>
      </section>
      <section className="flex flex-col mt-14 items-start ">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-xl"><strong>Apple iPhone 13 Por Max - 512 gb</strong></h1>
          <p><strong>Código:</strong> AP4545</p>
          <p className="flex flex-row items-start gap-2 w-3/4 ">
          <Star size={20} color="#65e70d" />
          <Star size={20} color="#65e70d" />
          <Star size={20} color="#65e70d" />
          <Star size={20} color="#65e70d" />
          <Star size={20} color="#65e70d" />
          </p>
          <div className=" flex flex-col gap-2">
            <p><strong>R$ 10.0000,00</strong></p>
            <p>até <strong>12x</strong> de <strong>R$833</strong> sem juros <br /> ou <strong className="text-preço text-xl">R$ 12.0020,00</strong>
            </p>
          </div>
          <div className='w-boxmd h-boxsx  bg-ff rounded-md font-bold flex flex-row border-2 border-button/20 text-sm justify-between gap-2 p-2 max-lg:m-auto max-sm:w-full'>Selecionar a Cor <ChevronDown />
          </div>
          <p><strong>Estoque:</strong>disponível</p>
          <button className='w-boxmd h-boxsx  bg-preço rounded-md font-bold flex flex-row border-2 border-button/20 text-white text-sm items-center justify-center  max-lg:m-auto max-sm:w-full'>Comprar
          </button>
          <button className='w-boxmd h-boxsx  bg-ff rounded-md font-bold flex flex-row border-2 border-button/20 text-preço text-sm items-center justify-center  max-lg:m-auto max-sm:w-full'>Adicionar ao Carrinho
          </button>
        </div>
      </section>
    </div>
    {/* frente */}
    <div className='flex flex-row items-start justify-center w-4/5 mt-24 text-sm text-black bg-ff rounded-md max-lg:flex-col max-lg:items-center max-sm:w-full   '>
      <section className=' flex flex-row items-center justify-start border-search  w-full'>
        <div className=' w-full p-6 flex flex-col bg'>
          <div className='flex flex-col items-start max-lg:items-center'>
            <h1 className='  text-xl font-bold p-1 '>Clacular Frete</h1>
            <div className='flex flex-col items-center justify-center gap-4'>
              <div className='flex flex-row items-center px-10 pt-10 ml-40 max-lg:ml-0 '>
                <input className='text-black h-10 placeholder-black border-button border-2 rounded-l-md p-4 ' type="number" name="number" id="CEP" placeholder='CEP' />
                <button className='bg-button h-10 p-4 flex flex-row items-center rounded-r-md font-bold text-ff'>OK</button>
              </div>
              <h2 className='ml-40 max-lg:ml-0'>Não sabe seu CEP? <a className='list-' href="#"><strong>entre aqui</strong></a>
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section  className='w-full border-l-2 border-search/20 flex flex-col max-lg:items-center '>
        <div className='flex flex-col gap-10 p-6'>
          <h1 className='  text-xl font-bold p-1 '>Tipos de Frete</h1>
          <div className='flex flex-col items-start gap-2'>
            <p className='flex flex-row items-center gap-2'>
              <input className='cursor-pointer' type="checkbox"  name="" id="" />
              Correios - R$ 25,00 - 25 dias
            </p>
            <p className='flex flex-row items-center gap-2'>
              <input type="checkbox" name="" id="" />
              Motoboy - R$25,00 - 25 dias
            </p>
            <p className='flex flex-row items-center gap-2'>
              <input type="checkbox" name="" id="" />
              Van - R$25,00 - 25 dias
            </p>
            <p className='flex flex-row items-center gap-2'>
              <input type="checkbox" name="" id="" />
              Transportadora - R$25,00 - 25 dias
            </p>
          </div>
        </div>
      </section>
    </div>
    {/* DIVISÃO  */}
    {/* frente */}
    <div className='flex flex-col items-center justify-center w-4/5 mt-24 text-sm text-black bg-ff rounded-md max-lg:flex-col max-lg:items-center max-sm:w-full'>
      <h1 className="text-2xl font-bold text-center w-full mt-14"> Descrição
      </h1>
      <div className="flex flex-row items-center justify-center  border-2 border-bordinha w-3/5 rounded-md p-10 mt-14 max-sm:w-4/5">
        <p>iPhone 14 Pro Max. Câmera grande-angular de 48 MP para capturar detalhes impressionantes. Dynamic Island, uma nova forma de interação no iPhone. Tela Sempre Ativa. E Detecção de Acidente*, um novo recurso de segurança que liga para a emergência se você não puder.</p>
      </div>
      <h1 className="text-2xl font-bold text-center w-full mt-14"> Especificações
      </h1>
      <div className="flex flex-col items-start justify-center w-4/5 mt-24 max-sm:w-full">
        <div className="bg-bg_clarinho flex flex-row w-full max-sm:px-2 ">
          <div className="flex flex-row w-2/5 justify-between items-center p-4 max-sm:w-full ">
            <p>TIPO:</p>
            <p>Barra</p>
          </div>
        </div>
        <div className="flex flex-row w-full max-sm:px-2">
          <div className="flex flex-row w-2/5 justify-between items-center p-4 max-sm:w-full">
            <p>SOM:</p>
            <p>Sim</p>
          </div>
        </div>
        <div className="bg-bg_clarinho flex flex-row w-full max-sm:px-2">
          <div className="flex flex-row w-2/5 justify-between items-center p-4 max-sm:w-full">
            <p>GRAVAR VÍDEO:</p>
            <p>Sim</p>
          </div>
        </div>
        <div className="flex flex-row w-full max-sm:px-2">
          <div className="flex flex-row w-2/5 justify-between items-center p-4 max-sm:w-full">
            <p>PROCESSADOR:</p>
            <p>A16</p>
          </div>
        </div>
        <div className="bg-bg_clarinho flex flex-row w-full max-sm:px-2">
          <div className="flex flex-row w-2/5 justify-between items-center p-4 max-sm:w-full">
            <p>SISTEMA OPERACIONA:</p>
            <p>ios 16</p>
          </div>
        </div>
        <div className="flex flex-row w-full max-sm:px-2">
          <div className="flex flex-row w-2/5 justify-between items-center p-4 max-sm:w-full">
            <p>BLUETOOTH:</p>
            <p>Sim</p>
          </div>
        </div>
        <div className=" bg-bg_clarinho flex flex-row w-full max-sm:px-2">
          <div className="flex flex-row w-2/5 justify-between items-center p-4 max-sm:w-full">
            <p>WI-FI:</p>
            <p>Sim</p>
          </div>
        </div>
        <div className="flex flex-row w-full max-sm:px-2">
          <div className="flex flex-row w-4/5 justify-between items-start gap-40 p-4 max-md:flex-col max-md:gap-4 max-md:items-center max-sm:w-full">
            <p>CARACTERÍSTICAS GERAIS:</p>
            <p>- Tela Super Retina XDR de 6,7 polegadas** com tela Sempre Ativa e ProMotion- Dynamic Island, uma nova forma de interação no iPhone- Câmera grande-angular de 48MP para resolução até 4x maior- Modo Cinema, agora em 4K Dolby Vision até 30qps- Modo Ação para vídeos em movimento com mais estabilidade- Tecnologia de segurança—Detecção de Acidente*,que liga para a emergência se você não puder - Bateria para o dia todo e até 23 horas de reprodução de vídeo***- A16 Bionic, o máximo em chip para smartphone. Rede celular 5G ultrarrápida****- Durabilidade líder na indústria, com Ceramic Shield e resistência à água*****- iOS 16, com ainda mais maneiras de personalizar, se comunicar e compartilhar******
          </p>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-center w-full mt-14"> Garantia
      </h1>
      <div className="flex flex-row items-center justify-center  border-2 border-bordinha w-4/5 rounded-md p-10 mt-14 mb-36 max-sm:w-full">
        <p>12 meses contra defeitos de fabricação (9 meses de garantia junto ao fabricante, mais 90 dias referentes à garantia legal, nos termos do artigo 26, II, do Código de Defesa do Consumidor).
        </p>
      </div>
    </div>
  </main>
  );
}