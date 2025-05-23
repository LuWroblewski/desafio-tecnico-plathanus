import { LuChevronRight, LuDownload, LuSearch } from 'react-icons/lu';
import OrthoIcon from '../../../../public/icons/orthoIcon';
import Content from './content/content';

export default function MainOrthopedic() {
  return (
    <main>
      <div className='bg-neutral-content md:bg-[url(/images/image.png)] w-full h-screen bg-cover bg-center'>
        <div className='px-10 py-5 md:px-30 md:py-15 h-full flex flex-col'>
          <div className='tabs tabs-border items-center'>
            <a className='tab text-[#4C4D4C] text-lg'>Início</a>
            <LuChevronRight className='text-xl' />
            <a className='tab tab-active text-lg'>Linha Orthopedic</a>
          </div>

          <div className='flex-grow flex flex-col justify-center '>
            <div className='flex justify-between items-center  lg:w-8/12 xl:w-5/12'>
              <p className='tracking-widest text-[#707372] text-lg'>LINHA</p>
              <OrthoIcon />
            </div>
            <h2 className='text-[#80276C] font-bold text-5xl md:text-8xl'>ORTHOPEDIC</h2>
            <p className='mt-10 md:ml-10 xl:w-5/12 text-xl'>
              Produtos desenvolvidos para auxiliar na prevenção e retorno das atividades, no tratamento e recuperação de
              pacientes com lesões ortopédicas.
            </p>
          </div>
        </div>
      </div>
      <div className='space-y-10 p-10 md:p-20'>
        <h5>Conheça as famílias exclusivas da linha Orthopedic</h5>

        <div role='tablist' className='tabs text-white'>
          <a role='tab' className='tab !text-base-100 bg-[#80276C] rounded-3xl font-bold'>
            Hidrolight Neo &reg;
          </a>
          <a role='tab' className='tab !text-[#A75897] font-semibold '>
            Comfort Air &reg;
          </a>
          <a role='tab' className='tab !text-[#A75897] font-semibold '>
            Ortho Recovery &reg;
          </a>
          <a role='tab' className='tab !text-[#A75897] font-semibold '>
            Air Flex &reg;
          </a>
          <a role='tab' className='tab !text-[#A75897] font-semibold '>
            Softline &reg;
          </a>
          <a role='tab' className='tab !text-[#A75897] font-semibold '>
            Foot Care &reg;
          </a>
          <a role='tab' className='tab !text-[#A75897] font-semibold '>
            Lean &reg;
          </a>
        </div>
        <p className='md:w-4/12'>
          Família voltada para extrair os benefícios do Neoprene. Propriedades térmicas, compressivas e elásticas: são
          essas três propriedades que fazem do Neoprene uma ferramenta eficaz no tratamento e prevenção de lesões no
          tratamento ortopédico.
        </p>
      </div>

      <div className=' p-10 md:p-20 flex flex-col md:flex-row'>
        <ul className='menu bg-base-200 rounded-box w-full md:w-56 md:h-80 border-[0.5px] border-[#D5D7D8]'>
          <li>
            <a>Filtros</a>
          </li>
          <li>
            <a>Lançamentos</a>
          </li>
          <li>
            <details>
              <summary className='flex items-center gap-2'>Famílias/Tecnologias</summary>
              <ul>
                <li>
                  <button type='button'>Produto 1</button>
                </li>
                <li>
                  <button type='button'>Produto 2</button>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className='flex items-center gap-2'>Produtos</summary>
              <ul>
                <li>
                  <button type='button'>Produto 1</button>
                </li>
                <li>
                  <button type='button'>Produto 2</button>
                </li>
              </ul>
            </details>
          </li>
        </ul>

        <div className='w-full mt-10 md:mt-0'>
          <div className='menu bg-base-200 lg:menu-horizontal rounded-box w-full flex justify-between items-center'>
            <div className='flex  items-center space-x-2'>
              <p>86 produtos</p>
              <div>
                <label className='input'>
                  <input type='search' className='grow' placeholder='Search' />
                  <LuSearch />
                </label>
              </div>
            </div>

            <button className='btn text-base-100 bg-[#E57200] rounded-xl mt-10 w-full md:w-24 md:mt-0' type='button'>
              Baixar Catálogo <LuDownload />
            </button>
          </div>
          <div className='px-10 py-2'>
            <Content />
          </div>
        </div>
      </div>
    </main>
  );
}
