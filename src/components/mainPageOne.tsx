export const MainOne = () => {
  return (
    <main className='h-screen flex flex-row items-center justify-center gap-24 mb-mB text-white max-sm:flex-col max-sm:mt-20'>
      <section className='flex flex-col items-center justify-between border-2 w-box h-boxl rounded-md border-ff p-14 max-lg:w-full'>
        <h2 className='text-center font-bold text-lg'>Já sou Cadastrado!</h2>
        <div className='flex flex-col gap-6 max-lg:items-center'>
          <div className="max-lg:w-4/5 max-lg:flex flex-col max-lg:items-center max-lg:m-auto">
            <p className='pb-2 font-light text-sm'>Email</p>
            <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2 max-lg:w-full' />
          </div>
          <div className="max-lg:w-4/5 max-lg:flex flex-col max-lg:items-center max-lg:m-auto">
            <p className='pb-2 font-light text-sm'>Senha</p>
            <input type="password" className='w-inputmd rounded-md h-boxsx name="senha" text-black p-2 max-lg:w-full' />
          </div>
            <a href='#' className='text-right'>Esqueceu a sua senha ?</a>
        </div>
          <div className="max-lg:pt-2">
            <button className='w-boxmd h-boxsx bg-button rounded-md font-bold '>Entrar</button>
          </div>
      </section>
      <section className='flex flex-col items-center justify-between border-2 w-box h-boxl rounded-md border-ff p-14 max-lg:w-full'>
        <h2 className='text-center font-bold text-lg'>Ainda não possui cadastro ?</h2>
        <div className='text-center flex flex-col gap-1'>
          <p>Primeiro acesso?</p>
          <p>Faça seu cadastro aqui!</p>
        </div>
        <div className="max-lg:w-4/5 max-lg:flex flex-col max-lg:items-center max-lg:m-auto">
            <p className='pb-2 font-light text-sm max-lg:p-4'>Senha</p>
            <input type="password" className='w-inputmd rounded-md h-boxsx name="senha" text-black p-2 max-lg:w-full' />
          </div>
          <div className="max-lg:pt-2">
            <button className='w-boxmd h-boxsx bg-button rounded-md font-bold '>Cadastrar
            </button>
          </div>
      </section>
    </main>

  )
}