import { User, List, MapPin, Users, LogOut } from 'lucide-react';


export const MainPageFour = () => {
  return (
    <main className='text-white mb-5 '>
          <div className=' flex flex-row items-start justify-center p-8 mt-28 max-lg:flex-col w-full max-lg:p-0'>
            <div className=' max-lg:w-full'>
              <section className='flex flex-col items-start justify-center gap-6 p-10 max-lg:p-0 max-lg:pb-4'>
              <button className='w-boxmd h-boxsx  bg-button rounded-md font-bold flex flex-row justify-start items-center gap-2 p-2 max-lg:m-auto'><User /> Minha Conta</button>
              <a className='p-2 border-t-2 w-full flex flex-row items-center gap-2' href="#"> <List /> Meus Pedidos</a>
              <a className='p-2 border-t-2 w-full flex flex-row items-center gap-2' href="#"><LogOut /> Sair</a>
              </section>
            </div>
            {/* INICIO SECTION TWO ^^ */}
            <div className='max-lg:w-full max-lg:mt-12'>
              <h1 className='text-xl font-bold p-1'>Minha Conta</h1>
              <section className='border-2 border-blue w-boxGG h-boxGGG rounded-md flex flex-col items-start p-10  max-lg:w-full max-lg:p-2 max-lg:gap-2'>
                <h2 className='flex flex-row items-center gap-2 text-black'>
                <List /> Dados Cadastrais
                </h2>
                  <div className='flex flex-col items-start p-7 mt-4 w-boxG gap-1 rounded-md text-black bg-boxCin max-lg:w-full '>
                    <h2>Nome:</h2>
                    <h2>Sexo:</h2>
                    <h2>Data de Nascimento:</h2>
                    <h2>Emal:</h2>
                    <h2>Telefone celular:</h2>
                </div>
                {/* BUTTONS */}
                <div className='text-white flex flex-row gap-4 pt-4 max-lg:flex-col max-lg:items-center max-lg:w-full'>
                  <button className='w-48 h-boxsx  bg-button rounded-md font-bold '>Alterar Senha</button>
                <button className='w-48  h-boxsx  bg-button rounded-md font-bold '>Editar Dados</button></div>

                {/* inicio de OUTRA SECTION */}
                <h2 className='flex flex-row items-center gap-2 pt-4 text-black '>
                <Users /> Tipo de Cadastro
                </h2>
                <div className='flex flex-col items-start p-7 mt-5 w-boxG gap-1 rounded-md text-black bg-boxCin max-lg:w-full '>
                    <h2>Tipo de Cadastro:</h2>
                    <h2>CPF:</h2>
                </div>

                {/* OUTRA SECTION */}
                <div className='max-lg:w-full max-lg:items-center'>
                  <h2 className='flex flex-row items-center gap-2 pt-4 text-black'>
                  <MapPin /> Endereço Principal
                  </h2>
                  <div className='flex flex-col items-start p-7 mt-4 w-boxG gap-1 rounded-md text-black bg-boxCin max-lg:w-full'>
                      <h2>Endereço:</h2>
                      <h2>Bairro:</h2>
                      <h2>CEP:</h2>
                      <h2>País:</h2>
                      <h2>Cidade/UF:</h2>
                  </div>
                  <div className='text-white flex flex-row gap-4 pt-4  max-lg:flex-col '>
                    <button className='w-56 h-boxsx  bg-button rounded-md font-bold max-lg:m-auto'>Editar Endereço Principal</button>
                    <button className='w-56  h-boxsx  bg-button rounded-md font-bold max-lg:m-auto'>Cadastrar Novo Endereço</button>
                  </div>
                </div>
                </section>
            </div>
          </div>
        </main>
  )
}