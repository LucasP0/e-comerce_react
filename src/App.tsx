import { Footer } from './components/Footer';
import { Sidebar } from './components/sidebar';
import { Trash2 } from 'lucide-react';



export const App = () => {

  return (
    <div className='bg-pd  flex flex-col font-inter'>
      <Sidebar />
      <main className='h-screen text-white mb-mB'>
      <div className=' flex flex-row items-start justify-center p-8 mt-28'>
            {/* INICIO SECTION TWO ^^ */}
        <div>
          <div className='flex flex-row items-baseline'>
            <h1 className='text-xl font-bold p-1 '>Carrinho</h1> <p className='font-light text-sm'>Clique em finalizar compra para efetuar o seu pedido</p>
          </div>
          <section className='border-2 border-white w-boxGGG rounded-md flex flex-col justify-start  bg-ff text-black'>
          <div className='bg-bluzinho w-full flex flex-row items-center justify-between p-2'>
            <h2 className='px-9'>Produto</h2>
            <div className='flex flex-row gap-40 px-20'>
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
            <div className='flex flex-row mr-2 gap-40 px-20'>
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
          <div className='flex flex-row items-start justify-center w-full text-sm text-white'>
        <section className=' flex flex-row justify-end gap-14 border-r-2 border-search'>
        <div className=' p-6 flex flex-col gap-14'>
          <div className='flex flex-col'>
            <p><strong>FORTE CELULARES - 41.468.809/0001-20</strong></p><br/>
            <p>Rua Vinte e um de Abril, 61, Centro,<br/>Marituba, PA, 67214-215</p>
            </div>
        </div>
        <div className='pt-56 p-4 text-end flex flex-col gap-2'>
          <p>Atendimento </p>
          <p>(91)  98295-1232</p>
          <p>Segunda à Sexta de 8:00-18:00</p>
        </div>
          </section>
          {/* section 2 */}
        <section  className='  '>
        <div className='flex flex-col gap-10 w-box p-4'>
          <p className='p-2'>Sobre Nós</p>

          A Forte Celulares foi fundada em fevereiro de 2020 como uma loja de celulares e acessórios, mas hoje estamos além de apenas uma loja de celulares. Decidimos aumentar nosso mix de produtos, investir em tecnologia e na capacitação dos nossos colaboradores para levar até você, de de maneira ainda mais simples, dinâmica e acessível todos os nossos produtos.
          Hoje contamos com experiência e conhecimento de causa para atender com propriedade toda região metropolitana de Belém, visando uma expansão territorial que irá, nos próximos 6 meses, além de das fronteiras do nosso estado.
        </div>

        </section>
      </div>

          </section>
        </div>
      </div>
    </main>
      <Footer />
    </div>
  )
};
