import { Footer } from './components/Footer';
import { Sidebar } from './components/sidebar';
import { Trash2 } from 'lucide-react';



export const App = () => {

  return (
    <div className='bg-pd  flex flex-col font-inter'>
      <Sidebar />
      <main className='h-screen text-white mb-mB'>
      <div className=' flex flex-col  items-center justify-start  p-8 mt-20 w-full '>
            {/* INICIO SECTION TWO ^^ */}
            <div className='flex flex-row items-baseline  w-4/5'>
            <h1 className='text-xl font-bold p-1 '>Carrinho</h1> <p className='font-light text-sm'>Clique em finalizar compra para efetuar o seu pedido</p>
          </div>
        <section className='border-2 border-white w-4/5 rounded-md flex flex-col justify-start  bg-ff text-black'>
          <div className='bg-bluzinho w-full flex flex-row items-center justify-between p-2'>
            <h2 className='px-9'>Produto</h2>
            <div className='flex flex-row gap-20 px-10 '>
              <p>Preço uniário</p>
              <p>Quantidade</p>
              <p>Subtotal</p>
              <p>Excluir</p>
            </div>
          </div>
          {/* SECTION 2 */}
          <div className='bg-ff w-full flex flex-row items-center justify-between p-2'>
          <div className='flex flex-row items-center gap-1'>
            <img className='px-9' src="../public/img/image 15.png" alt="" />
              <div>
                <p><strong>Apple iPhone 13 Pro Max -512 gb</strong></p>
                <p><strong>Estoque:</strong> Disponivel</p>
              </div>
            </div>
            <div className='flex flex-row mr-2 w gap-20 px-10'>
              <p><strong>R$8.900,00</strong></p>
              <p>TAMANHO</p>
              <p><strong>R$8.900,00</strong></p>
              <p><Trash2 color="#eb000c" /></p>
            </div>
          </div>
          <div className='bg-bluzinho w-full flex flex-row items-baseline gap-2 p-12 justify-end'>
          <h1 className='text-xl font-bold p-1 '>Carrinho:</h1>
            <p className='text-xl'>R$8.900,00</p>
          </div>

          {/* NOVA SECTION */}
        <div className='flex flex-row items-start justify-center w-full text-sm text-black bg-bluzinho border-t-2 border-b-2
        border-search/20 '>
          <section className=' flex flex-row items-center justify-start border-search  w-full'>
            <div className=' w-full  p-6 flex flex-col  '>
              <div className='flex flex-col items-start'>
                <h1 className='  text-xl font-bold p-1 '>Clacular Frete</h1>
                <div className='flex flex-col items-center justify-center gap-4'>
                  <div className='flex flex-row items-center px-10 pt-10 ml-40'>
                    <input className='text-black h-10 placeholder-black border-search decoration-inherit rounded-l-md p-4 ' type="number" name="number" id="CEP" placeholder='CEP' />
                    <button className='bg-button h-10 p-4 flex flex-row items-center rounded-r-md font-bold text-ff'>OK</button>
                  </div>
                  <h2 className='ml-40'>Não sabe seu CEP? <a className='list-' href="#"><strong>entre aqui</strong></a>
                  </h2>
                </div>
              </div>
            </div>
          </section>
          {/* section 2 */}
          <section  className='w-full border-l-2 border-search/20 '>
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
        <div className='bg-bluzinho flex flex-row items-center '>
          <div className='flex flex-row items-center p-8 pt-10 ml-48'>
            <input className='text-black h-10 w-56 placeholder-black border-search decoration-inherit rounded-l-md p-4' type="text" name="text" id="CUPOM" placeholder='Cupom de desconto' />
            <button className='bg-button h-10 p-4 flex flex-row items-center rounded-r-md font-bold text-ff'>OK</button>
          </div>
        </div>
        <div className='bg-ff w-full flex flex-row items-baseline gap-2 p-12 justify-end'>
          <h1 className='text-xl font-bold p-1 '>Carrinho:</h1>
            <p className='text-xl'>R$8.900,00</p>
          </div>
      </section>
      </div>
    </main>
    <Footer />
  </div>
  )
};
