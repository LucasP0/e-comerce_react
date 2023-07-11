import { Facebook, Instagram, Smartphone  } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className='max-md:flex max-md:flex-col max-md:items-center '>
      <div className='flex flex-row items-start justify-center w-full text-sm text-white max-md:flex-col max-md:items-center'>
        <section className=' flex flex-row justify-end gap-14 border-r-2 border-search max-md:flex-col max-md:gap-2 max-lg:border-none'>
        <div className=' p-6 flex flex-col gap-14'>
          <div className='flex flex-col'>
            <p><strong>FORTE CELULARES - 41.468.809/0001-20</strong></p><br/>
            <p>Rua Vinte e um de Abril, 61, Centro,<br/>Marituba, PA, 67214-215</p>
            </div>
            <div className='border-2 h-14 border-border rounded-md flex flex-row items-center justify-center gap-2 p-2'><Facebook />facebook <Instagram /> instagram <Smartphone /> whatsapp</div>
        </div>
        <div className='pt-56 p-4 text-end flex flex-col gap-2 max-lg:pt-4'>
          <p>Atendimento </p>
          <p>(91)  98295-1232</p>
          <p>Segunda à Sexta de 8:00-18:00</p>
        </div>
          </section>
          {/* section 2 */}
        <section  className=' max-sm:border-t-2 max-sm:border-button/30 max-sm:mt-10 '>
        <div className='flex flex-col gap-10 w-box p-4 max-sm:w-full max-sm:p-6 '>
          <p className='p-2'>Sobre Nós</p>

          A Forte Celulares foi fundada em fevereiro de 2020 como uma loja de celulares e acessórios, mas hoje estamos além de apenas uma loja de celulares. Decidimos aumentar nosso mix de produtos, investir em tecnologia e na capacitação dos nossos colaboradores para levar até você, de de maneira ainda mais simples, dinâmica e acessível todos os nossos produtos.
          Hoje contamos com experiência e conhecimento de causa para atender com propriedade toda região metropolitana de Belém, visando uma expansão territorial que irá, nos próximos 6 meses, além de das fronteiras do nosso estado.
        </div>

        </section>
      </div>

      <div className='p-14 ml-20 pt-36 pb-3 flex flex-row justify-between items-end max-sm:p-10 max-lg:ml-0 max-sm:flex-col max-sm:items-center'>
        <div>
          <img src="../img/LOGO_1080x1080 - VERSÃO HORIZONTAL 02_SEM FUNDO 1.png" alt="" />
          <p className='text-white text-xs max-w-xl pt-12 '> © ForteEletrôncios 2023 - Todos os direitos reservados. Eventuais promoções, descontos e prazos de pagamento expostos aqui são válidos  para compras via instagram, Site e Whatsapp </p>
          <p className='text-white text-xs pb-2' >Termos de uso e Política de Privacidade.</p>
        </div>
        <div className='flex flex-row items-center gap-2'>
          <img src="../img/Shape.png" alt="logo_de_segurança" />
        <p className='text-white text-xs'>
          COMPRA SEGURA <br/>
          <strong>SITE PROTEGIDO</strong><br/>
          CERTIFICADO SLL
        </p>
        </div>
      </div>
    </footer>
  )
}