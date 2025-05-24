import { LuMoveDiagonal2, LuRuler } from 'react-icons/lu';

export default function ProductDescription() {
  return (
    <div>
      <div className='space-y-5'>
        <p>Hidrolight Neo &reg;</p>
        <h4 className='bg-[#80276C] text-white py-4 px-2 text-4xl font-bold  tracking-widest'>
          Órtese Splint Bilateral
        </h4>
        <p>Código SKU OR83 Lado direito | Código SKU OR83 Lado esquerdo</p>
        <p className='font-semibold'>Descrição</p>

        <p>
          A Órtese Splint Bilateral Hidrolight é feita de neoprene Plush, com propriedades isolantes térmicas e um
          acabamento elegante em plush. Possui ampla capacidade de ajuste devido à aderência do tecido. Em repouso, a
          órtese já está pré-ajustada, com fechamento do polegar e uma membrana elástica que funciona como um bolso,
          facilitando a colocação pelo próprio paciente. As talas internas são facilmente ajustáveis para se adaptarem à
          mão desejada. São fornecidas duas talas removíveis, uma com curvatura ideal para sustentar o punho até a palma
          da mão, e a segunda reta na parte dorsal do punho, impedindo movimentos para cima e para baixo. O elástico
          aderente envolve a articulação, proporcionando compressão de acordo com a indicação médica e a necessidade do
          paciente.
        </p>
        <div>
          <p className='font-semibold'>Nível 3</p>
          <p> Recuperação e tratamento de lesões GRAVES</p>
        </div>

        <div className='divider divider-neutral opacity-25'></div>
      </div>

      <div className='space-y-5'>
        <div className='flex  space-x-1 items-center'>
          <p className='font-semibold'>Cores disponíveis: </p>
          <div aria-label='status' className='status bg-black text-black  status-xl'></div>
          <p>Preto</p>
        </div>
        <div className='flex space-x-1'>
          <p className='font-semibold'>Modelo: </p>
          <p>Bilateral</p>
        </div>
        <div className='flex  space-x-1'>
          <p className='font-semibold '>Tamanhos disponíveis:</p>
          <p> Único Especial</p>
        </div>

        <div className='flex  space-x-4'>
          <div className='flex  space-x-1 text-[#E57200]  items-center '>
            <LuMoveDiagonal2 className='text-xl' />
            <p> Descubra o seu tamanho ideal</p>
          </div>
          <div className='flex  space-x-1  items-center '>
            <LuRuler className='text-xl' />
            <p> Tabela de medidas</p>
          </div>
        </div>

        <button className='btn text-base-100 bg-[#E57200] rounded-xl  '>Encontrar lojas online</button>

        <p> Gostou desse produto? Seja um vendedor</p>
      </div>
    </div>
  );
}
