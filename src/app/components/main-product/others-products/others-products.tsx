import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import data from '../../../../data.json';
import Link from 'next/link';

export default function OthersProducts() {
  return (
    <div>
      <div className='flex items-center overflow-y-auto h-auto p-10 space-x-2'>
        {data.produtos.map((produto, index) => (
          <Link href={'/product'}>
            <div key={index} className='p-4 shadow hover:shadow-md transition duration-300 relative w-44 md:w-96'>
              <div className='indicator w-auto'>
                {produto.lancamento && (
                  <span className='indicator-item indicator-start ml-15 badge-xl badge bg-[#9A1A8099] text-white'>
                    Lançamento
                  </span>
                )}
                <img src={produto.imagem} alt={produto.nome} className='w-full h-auto object-cover rounded' />
              </div>
              <h2 className='mt-2 text-lg font-semibold '>{produto.nome}</h2>
              <p className='text-gray-600'>Código: {produto.codigo}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
