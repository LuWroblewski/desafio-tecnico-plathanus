import { LuChevronRight } from 'react-icons/lu';
import ProductGallery from './product-gallery/product-gallery';
import ProductDescription from './product-description/product-description';
import Image from 'next/image';
import Details from './details/detailts';
import OthersProducts from './others-products/others-products';
export default function MainProduct() {
  return (
    <div>
      <div className='px-10 py-5 md:px-30 md:py-15 h-full flex flex-col'>
        <div className='tabs tabs-border items-center'>
          <a className='tab text-[#4C4D4C] text-lg'>Início</a>
          <LuChevronRight className='text-xl' />
          <a className='tab tab-active text-lg'>Linha Orthopedic</a>
          <LuChevronRight className='text-xl' />
          <a className='tab text-lg'>Órtese Splint Bilateral</a>
        </div>
      </div>

      <div className='px-10 py-5 md:px-30 md:py-0 flex flex-col md:flex-row space-x-5'>
        <div className=' w-full md:w-5/12 h-full'>
          <ProductGallery />
        </div>
        <ProductDescription />
      </div>

      <div className='flex mt-10 w-full items-center justify-center'>
        <Image src='/images/video_thumb.png' alt='Imagem responsiva' width={1500} height={1500} className='' />
      </div>

      <div className='px-10 py-5 md:px-50 md:py-15 h-full flex flex-col'>
        <h4 className='text-4xl'>
          Fabricação <b className='text-[#E57200]'>própria</b> e nacional.
        </h4>
        <h4 className='text-4xl'>
          <b className='text-[#E57200]'>Qualidade</b> garantida!
        </h4>
        <p>Antes de utilizar o produto, leia atentamente as precauções e Instruções de uso.</p>
      </div>

      <div className='flex mt-10 w-full items-center justify-center'>
        <Image src='/images/product_details.png' alt='Imagem responsiva' width={1500} height={1500} className='' />
      </div>

      <div className='px-10 py-5 md:px-50 md:py-15 h-full flex flex-col'>
        <Details titulo='Detalhes do Produto' />
        <Details titulo='Especificações técnicas' />
        <Details titulo='Indicações e Instrução de uso' />
        <Details titulo='Garantia' />
      </div>

      <div className='px-10 py-5 md:px-50 md:py-15 h-full flex flex-col'>
        <h4 className='text-4xl'>Conheça também nossos outros produtos</h4>
        <OthersProducts />
      </div>
    </div>
  );
}
