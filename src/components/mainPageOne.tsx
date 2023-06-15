export const MainOne = () => {
  return (
    <main className='h-screen flex flex-row items-center justify-center gap-24 mb-mB text-white max-sm:flex-col max-sm:mt-20'>
      <section className='flex flex-col items-center justify-between border-2 w-box h-boxl rounded-md border-ff p-14'>
        <h2 className='text-center font-bold text-lg'>Já sou Cadastrado!</h2>
        <div className='flex flex-col gap-6'>
          <div >
            <p className='pb-2 font-light text-sm'>Email</p>
            <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2' />
          </div>
          <div>
            <p className='pb-2 font-light text-sm'>Senha</p>
            <input type="password" className='w-inputmd rounded-md h-boxsx name="senha" text-black p-2' />
          </div>
            <a href='#' className='text-right'>Esqueceu a sua senha ?</a>
        </div>
          <button className='w-boxmd h-boxsx bg-button rounded-md font-bold '>Entrar</button>
      </section>
      <section className='flex flex-col items-center justify-between border-2 w-box h-boxl rounded-md border-ff p-14'>
        <h2 className='text-center font-bold text-lg'>Ainda não possui cadastro ?</h2>
        <div className='text-center flex flex-col gap-1'>
          <p>Primeiro acesso?</p>
          <p>Faça seu cadastro aqui!</p>
        </div>
        <div >
          <p className='pb-2 font-light text-sm'>Email</p>
          <input type="text" name="email"  className='w-inputmd rounded-md h-boxsx text-black p-2' />
        </div>
          <button className='w-boxmd h-boxsx bg-button rounded-md font-bold '>Cadastrar</button>
      </section>
    </main>

  )
}