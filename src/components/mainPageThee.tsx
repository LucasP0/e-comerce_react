import { UserPlus, Smartphone, Plus } from 'lucide-react';
export const MainPageThee = () => {
  return (
        <main className='flex flex-col items-center   h-screen mb-mlg max-sm:mb-mbMax text-white  '>
        <div className='flex flex-col items-start justify-start mt-20'>
        </div>
          {/****** SEUS DADOS PARA ACESSO********* * */}
          <div className='bg-blue-300 max-lg:w-full'>
            <h1 className='font-bold text-xl '>Venda o seu Usado</h1>
            <div className='flex flex-col items-center justify-center w- border-2 border-ff rounded-md  mt-10 p-8 max-lg:w-full'>
              {/* aqui */}
              <div className='flex flex-row items-end  gap-28 max-sm:flex-col max-lg:w-full max-lg:items-center max-lg:gap-2'>
                <section className='flex flex-col gap-4 '>
                  <h2 className='font-bold text-lg py-2 mt-8 flex flex-row items-center gap-4 '> <UserPlus /> Seus dados para acesso</h2>
                  {/* aqio */}
                  <div className='w-full flex flex-col max-lg:items-center'>
                    <p className='pb-2 font-light text-sm'>Name</p>
                    <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2 max-lg:w-full' />
                    {/* aqio */}
                  </div>
                </section>
                <section className='flex flex-col gap-4'>
                  <div className='w-full flex flex-col max-lg:items-center'>
                    <p className='pb-2 font-light text-sm'>Whatsapp</p>
                    <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2 max-lg:w-full' />
                  </div>
                </section>
              </div>
              <div className='mt-8 w-full flex flex-col max-lg:items-center'>
                    <p className='pb-2 font-light text-sm'>Email</p>
                    <input type="text" name="email"  className='w-inputl  rounded-md h-boxsx text-black p-2 max-lg:w-4/5' />
                  </div>
              {/****** SECTION DADOS DO APARELHO ********* **/}
              <div className='flex flex-row items-end  gap-28 max-sm:flex-col '>
                <section className='flex flex-col gap-4'>
                  <h2 className='font-bold text-lg py-2 mt-8 flex flex-row items-center gap-4 '> <Smartphone /> Dados do Aparelho </h2>
                  <div >
                    <p className='pb-2 font-light text-sm'>Produto
                    </p>
                    <div>
                      <input type="text" placeholder='Selecionar -' name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2max-lg:w-full' />
                    </div>
                  </div>
                  <div >
                    <p className='pb-2 font-light text-sm'>Memória Ram</p>
                    <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2max-lg:w-full' />
                  </div>
                  <div>
                    <p className='pb-2 font-light text-sm'>Tempo de uso</p>
                    <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2max-lg:w-full' />
                  </div>
                  <div>
                    <p className='pb-2 font-light text-sm'>Tem acessórios?</p>
                    <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2max-lg:w-full' />
                  </div>
                  <div>
                    <p className='pb-2 font-light text-sm'>Informar MEI do Aparelho</p>
                    <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2max-lg:w-full' />
                  </div>
                  <div>
                    <p className='pb-2 font-light text-sm'>Possui Nota Fiscal?</p>
                    <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2max-lg:w-full' />
                  </div>
                </section>
                {/* DADOS DO APARELHO SECOUND COLUMN  */}
                <section className='flex flex-col gap-4'>
                  <div >
                    <p className='pb-2 font-light text-sm'>Modelo</p>
                    <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2max-lg:w-full' />
                  </div>
                  <div >
                    <p className='pb-2 font-light text-sm'>Memória ROM</p>
                    <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2max-lg:w-full' />
                  </div>
                  <div >
                    <p className='pb-2 font-light text-sm'>Saúde da Bateria</p>
                    <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2max-lg:w-full' />
                  </div>
                  <div >
                    <p className='pb-2 font-light text-sm'>Possui Avaria? Se sim, qual ?</p>
                    <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2max-lg:w-full' />
                  </div>
                  <div >
                    <p className='pb-2 font-light text-sm'>Onde o Aparelho foi comprado?</p>
                    <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2max-lg:w-full' />
                  </div>
                  <div >
                    <p className='pb-2 font-light text-sm'>Qual valor estipulado</p>
                    <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2max-lg:w-full' />
                  </div>
                </section>
              </div>
              <div className='
              flex flex-col gap-9 mt-8 w-4/5
              ml-mxs py-10
              items-start justify-start  '>
                <p className='font-light text-sm'>Anexar Fotos do Produto</p>
                <section className='flex flex-row gap-4'>
                  <div className='border-2 border-ff rounded-md w-boximg h-boximg flex flex-row justify-center items-center '>
                  <Plus className=' text-search opacity-40' size={50} />
                  </div>
                  <div className='border-2 border-ff rounded-md w-boximg h-boximg flex flex-row justify-center items-center '>
                  <Plus className=' text-search opacity-40' size={50} />
                  </div>
                  <div className='border-2 border-ff rounded-md w-boximg h-boximg flex flex-row justify-center items-center'>
                  <Plus className=' text-search opacity-40' size={50} />
                  </div>
                  <div className='border-2 border-ff rounded-md w-boximg h-boximg flex flex-row justify-center items-center'>
                  <Plus className=' text-search opacity-40' size={50} />
                  </div>
                </section>
              </div>
              <div className='flex flex-col gap-8 items-center'>
                <button className='w-boxmd h-boxsx mt-24 bg-button rounded-md font-bold '>Cadastrar</button>
                <a href="#" className='font-light text-sm'>Cancelar</a>
              </div>
            </div>
          </div>
        </main>
  )
}