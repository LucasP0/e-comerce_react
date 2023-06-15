import { UserPlus, FileSpreadsheet, BookPlus, MapPin } from 'lucide-react';

export const MainPageTwo = () => {
  return (
        <main className='h-screen mb-mlg max-sm:mb-mbMax  text-white flex flex-col items-center  '>
          {/****** SEUS DADOS PARA ACESSO********* * */}
          <div className='flex flex-col items-center justify-center w-4/5 border-2 border-ff rounded-md  mt-24 p-8 '>
            <div className='flex flex-row items-end  gap-28 max-sm:flex-col'>
              <section className='flex flex-col gap-4'>
                <h2 className='font-bold text-lg py-2 mt-8 flex flex-row items-center gap-4 '> <UserPlus /> Seus dados para acesso</h2>
                <div >
                  <p className='pb-2 font-light text-sm'>Email</p>
                  <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2' />
                </div>
                <div >
                  <p className='pb-2 font-light text-sm'>Ciar Senha</p>
                  <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2' />
                </div>
              </section>
              <section className='flex flex-col gap-4'>
                <div >
                  <p className='pb-2 font-light text-sm'>Confirmar Email</p>
                  <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2' />
                </div>
                <div >
                  <p className='pb-2 font-light text-sm'>Confirmar Senha</p>
                  <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2' />
                </div>
              </section>
            </div>
            {/***** ARTICLE DE TIPO DE CADASTRO ********* */}
            <article className=' flex flex-col gap-4 w-4/5 items-start ml-mxs justify-start'>
              <h2 className='font-bold text-lg py-2 mt-8 flex flex-row items-center gap-4 '> <FileSpreadsheet /> Tipo de cadastro</h2>
              <section className='flex flex-row items-center gap-8 p-2'>
                <div className='flex flex-row items-center gap-2'>
                  <input type="checkbox" name="check" id="check1" />
                  <p className='font-light text-sm'>Pessoa Fisica</p>
                </div>
                <div className='flex flex-row items-center gap-2'>
                  <input type="checkbox" name="check" id="check1" />
                  <p className='font-light text-sm'>Pessoa Fisica</p>
                </div>
              </section>
            </article>
            {/****** SECTION SEUS DADOS PESSOAIS ********* **/}
            <div className='flex flex-row items-end  gap-28 max-sm:flex-col '>
              <section className='flex flex-col gap-4'>
                <h2 className='font-bold text-lg py-2 mt-8 flex flex-row items-center gap-4 '> <BookPlus /> Dados Pessoais</h2>
                <div >
                  <p className='pb-2 font-light text-sm'>Nome Completo</p>
                  <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2' />
                </div>
                <div >
                  <p className='pb-2 font-light text-sm'>Telefone</p>
                  <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2' />
                </div>
                <div>
                  <p className='pb-2 font-light text-sm'>Sexo</p>
                  <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2' />
                </div>
              </section>

              <section className='flex flex-col gap-4 '>
                <div >
                  <p className='pb-2 font-light text-sm'>CPF</p>
                  <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2' />
                </div>
                <div >
                  <p className='pb-2 font-light text-sm'>Whatsapp</p>
                  <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2' />
                </div>
                <div >
                  <p className='pb-2 font-light text-sm'>Data de Nascimento</p>
                  <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2' />
                </div>
              </section>
            </div>
            {/*********SECTION ENDEREÇO ******/}
            <div className='flex flex-row items-end  gap-28 max-sm:flex-col'>
              <section className='flex flex-col gap-4'>
                <h2 className='font-bold text-lg py-2 mt-8 flex flex-row items-center gap-4 '> <MapPin />Endereço </h2>
                <div >
                  <p className='pb-2 font-light text-sm'>CEP</p>
                  <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2' />
                </div>
                <div >
                  <p className='pb-2 font-light text-sm'>Número</p>
                  <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2' />
                </div>
                <div >
                  <p className='pb-2 font-light text-sm'>Referência</p>
                  <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2' />
                </div>
                <div>
                  <p className='pb-2 font-light text-sm'>Cidade</p>
                  <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2' />
                </div>
              </section>

              <section className='flex flex-col gap-4'>
                <div >
                  <p className='pb-2 font-light text-sm'>Endereço</p>
                  <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2' />
                </div>
                <div >
                  <p className='pb-2 font-light text-sm'>Complemento</p>
                  <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2' />
                </div>
                <div >
                  <p className='pb-2 font-light text-sm'>Bairro</p>
                  <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2' />
                </div>
                <div >
                  <p className='pb-2 font-light text-sm'>Estado</p>
                  <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2' />
                </div>
              </section>
            </div>
            <div className='
            flex flex-row gap-4 w-4/5
            ml-mxs py-10
            items-center justify-start  '>
                  <input type="checkbox" name="" id="" />
                  <p className='font-light text-sm'>Li e Concordo com os termos de uso.</p>
                </div>
                <div className='flex flex-col gap-8 items-center'>
                  <button className='w-boxmd h-boxsx mt-24 bg-button rounded-md font-bold '>Cadastrar</button>
                  <a href="#" className='font-light text-sm'>Cancelar</a>
                </div>
          </div>
        </main>
  )
}