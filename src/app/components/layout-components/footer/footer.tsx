import { roboto } from '@/app/fonts';
import { LuFacebook, LuInstagram, LuMail, LuPhone, LuYoutube } from 'react-icons/lu';

export default function Footer() {
  return (
    <>
      <footer className='footer sm:footer-horizontal bg-[#4C4D4C] text-base-100 md:px-20 p-10  md:grid md:grid-cols-6 md:gap-x-4 text-base'>
        <aside className='pl-10  md:col-start-1'>
          <p className=' tracking-widest text-4xl'>LOGO</p>
        </aside>
        <nav className={`${roboto.className}, md:col-start-3 `}>
          <h6 className='font-bold normal-case '>Institucional</h6>
          <a className='link link-hover'>Sobre nós</a>
          <a className='link link-hover'>Trabalhe conosco</a>
        </nav>
        <nav className={`${roboto.className}, md:col-start-4`}>
          <h6 className='font-bold normal-case'>Download de Catálogos</h6>
          <a className='link link-hover'>Catálogo geral</a>
          <a className='link link-hover'>Linha Orthopedic</a>
          <a className='link link-hover'>Linha Sports</a>
          <a className='link link-hover'>Linha Special Cares</a>
          <a className='link link-hover'>Catálogo Foot Care</a>
          <a className='link link-hover'>Catálogo Acessibilidade</a>
        </nav>
        <nav className={`${roboto.className}, md:col-start-5`}>
          <h6 className='font-bold normal-case'>Linha de Produtos</h6>
          <a className='link link-hover'>Orthopedic</a>
          <a className='link link-hover'>Sports</a>
          <a className='link link-hover'>Special Cares</a>
        </nav>
        <nav className={`${roboto.className}, md:col-start-6`}>
          <h6 className='font-bold normal-case'>Entre em contato e tire suas dúvidas</h6>
          <a className='link link-hover flex items-center justify-center space-x-2'>
            <LuPhone className='w-12 btn-circle border-amber-500 border-2 p-2 text-[#E57200]' />
            <p>+55 48 3333 3333 </p>
          </a>
          <a className='link link-hover flex items-center justify-center space-x-2'>
            <LuMail className='w-15 btn-circle border-amber-500 border-2 p-2 text-[#E57200]' />
            <p>sac@loremipsum.com.br ou rp@loremipsum.com.br </p>
          </a>
          <nav className='mt-4'>
            <h6 className='font-bold normal-case'>Nos acompanhe também nas redes sociais</h6>
            <div className='flex space-x-3 mt-2'>
              <a className='link link-hover'>
                <LuInstagram className='w-11 btn-circle border-amber-500 border-2 p-2 text-[#E57200]' />
              </a>
              <a className='link link-hover'>
                <LuYoutube className='w-11 btn-circle border-amber-500 border-2 p-2 text-[#E57200]' />
              </a>
              <a className='link link-hover'>
                <LuFacebook className='w-11 btn-circle border-amber-500 border-2 p-2 text-[#E57200]' />
              </a>
            </div>
          </nav>
        </nav>
      </footer>

      <footer
        className={`footer sm:footer-horizontal bg-[#4C4D4C] items-center p-10 md:px-20 border-t border-base-300 text-base-100 ${roboto.className}`}
      >
        <aside className='grid-flow-col items-center'>
          <select defaultValue='Escolha um País' className='select select-ghost w-52'>
            <option hidden>Selecionar País</option>
            <option>Brasil</option>
            <option>Brasil</option>
            <option>Brasil</option>
          </select>
        </aside>
        <nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
          <div>
            <p>&copy; 2023 Lorem Ipsum. Todos os direitos reservados.</p>
            <p className='text-right'>Av dos Butiá, 150 - Florianópolis - SC - Brasil</p>
          </div>
        </nav>
      </footer>
    </>
  );
}
