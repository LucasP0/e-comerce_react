import { Plus, Minus, Trash2 } from 'lucide-react';

export const MainCart = () => {
  return (
    <main className='h-screen text-white mb-md max-lg:mb-mblgg'>
    <div className=' flex flex-col  items-center justify-start  p-8 mt-20 w-full max-lg:p-0 '>
          {/* INICIO SECTION TWO ^^ */}
          <div className='flex flex-row items-baseline  w-4/5'>
          <h1 className='text-xl font-bold p-1 '>Carrinho</h1> <p className='font-light text-sm'>Clique em finalizar compra para efetuar o seu pedido</p>
        </div>
      <section className='border-2 w-4/5 rounded-md flex flex-col justify-start  bg-ff text-black max-lg:w-full'>
        <div className='bg-bluzinho w-full flex flex-row items-center justify-start p-2 max-lg:justify-center max-lg:p-4 max-lg:opacity-0'>
          <h2 className='px-9 max-lg:px-0 max-lg:text-sm '>Produto</h2>
          <div className='flex flex-row gap-24 px-10 max-lg:px-0 max-lg:gap-0 max-lg:text-sm '>
            <p>Preço uniário</p>
            <p>Quantidade</p>
            <p>Subtotal</p>
            <p>Excluir</p>
          </div>
        </div>
        {/* SECTION 2 */}
        <div className='bg-ff w-full flex flex-row items-center justify-between p-2 max-lg:flex-col'>
        <div className='flex flex-row items-center gap-1 max-lg:flex-col '>
          <img className='px-9 max-lg:px-0 ' src="../img/image 15.png" alt="" />
            <div className='max-lg:text-sm max-lg:text-center'>
              <p><strong>Apple iPhone 13 Pro Max -512 gb</strong></p>
              <p><strong>Estoque:</strong> Disponivel</p>
            </div>
          </div>
          <div className='flex flex-row mr-2 gap-20 px-10 max-lg:flex-col max-lg:items-center max-lg:gap-10'>
            <p><strong>R$8.900,00</strong></p>
            <div className='flex flex-row'>
              <button className='flex flex-row justify-center items-center w-10 h-10 border-2 border-search/20 rounded-l-md  '><Minus color="#EEE8E8" /></button>
              <div className='bg-ff w-14 h-10 border-t-2 border-b-2 border-search/20 flex flex-col items-center justify-center'>1</div>
              <button className='flex flex-row justify-center items-center w-10 h-10 border-2 border-search/20 rounded-r-md '><Plus color="#EEE8E8"  /></button>

            </div>
            <p  className='max-lg:opacity-0'><strong>R$8.900,00</strong></p>
            <a href='#'><Trash2 color="#eb000c" /></a>
          </div>
        </div>
        <div className='bg-bluzinho w-full flex flex-row items-baseline gap-2 p-12 justify-end max-lg:justify-center'>
        <h1 className='text-xl font-bold p-1 '>Carrinho:</h1>
          <p className='text-xl'>R$8.900,00</p>
        </div>

        {/* NOVA SECTION */}
      <div className='flex flex-row items-start justify-center w-full text-sm text-black bg-bluzinho border-t-2 border-b-2
      border-search/20 max-lg:flex-col max-lg:items-center '>
        <section className=' flex flex-row items-center justify-start border-search  w-full'>
          <div className=' w-full  p-6 flex flex-col'>
            <div className='flex flex-col items-start max-lg:items-center'>
              <h1 className='  text-xl font-bold p-1 '>Clacular Frete</h1>
              <div className='flex flex-col items-center justify-center gap-4'>
                <div className='flex flex-row items-center px-10 pt-10 ml-40 max-lg:ml-0 '>
                  <input className='text-black h-10 placeholder-black border-search decoration-inherit rounded-l-md p-4 ' type="number" name="number" id="CEP" placeholder='CEP' />
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
      <div className='bg-bluzinho flex flex-row items-center  '>
        <div className='flex flex-row items-center p-8 pt-10 ml-48 max-lg:m-auto'>
          <input className='text-black h-10 w-56 placeholder-black border-search  rounded-l-md p-4' type="text" name="text" id="CUPOM" placeholder='Cupom de desconto' />
          <button className='bg-button h-10 p-4 flex flex-row items-center rounded-r-md font-bold text-ff'>OK</button>
        </div>
      </div>
      <div className='flex flex-col justify-end items-end p-12'>
        <div className='bg-ff w-full flex flex-row items-baseline gap-2  justify-end'>
          <h1 className='text-xl font-bold p-1 '>Total:</h1>
            <p className='text-xl'>R$8.900,00</p>
        </div>
        <div className=' flex flex-col items- justify-end'>
          <p className='text-right'>Via pix ou por R$16,92 com 15% de desconto <br /> ou em até 3x de R$ 6,30 sem juros</p>
        </div>
      </div>
    </section>
    <div className='flex flex-row items-center justify-end  w-4/5 gap-20 '>
    <button className='w-boxmd h-boxsx mt-10 bg-ff rounded-md font-bold text-button '>Cadastrar</button>
    <button className='w-boxmd h-boxsx mt-10 bg-button rounded-md font-bold '>Comprar</button>
    </div>
    </div>
  </main>
  )
}