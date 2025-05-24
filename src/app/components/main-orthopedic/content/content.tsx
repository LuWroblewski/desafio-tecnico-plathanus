import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import data from '../../../../data.json';
import Link from 'next/link';

export default function Content() {
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:p-4'>
        {data.produtos.map((produto, index) => (
          <Link href={'/product'}>
            <div key={index} className='p-4 shadow hover:shadow-md transition duration-300 relative'>
              <div className='indicator w-auto'>
                {produto.lancamento && (
                  <span className='indicator-item indicator-start ml-15 badge-xl badge bg-[#9A1A8099] text-white'>
                    Lançamento
                  </span>
                )}
                <img src={produto.imagem} alt={produto.nome} className='w-full h-auto object-cover rounded' />
              </div>
              <h2 className='mt-2 text-lg font-semibold'>{produto.nome}</h2>
              <p className='text-gray-600'>Código: {produto.codigo}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className='join justify-center items-center w-11/12'>
        <button className='join-item btn'>
          <LuChevronLeft />
        </button>
        <button className='join-item btn'>1</button>
        <button className='join-item btn btn-active'>2</button>
        <button className='join-item btn'>3</button>
        <button className='join-item btn'>4</button>
        <button className='join-item btn'>5</button>
        <button className='join-item btn btn-disabled'>...</button>
        <button className='join-item btn'>10</button>
        <button className='join-item btn'>
          <LuChevronRight />
        </button>
      </div>
    </div>
  );
}
