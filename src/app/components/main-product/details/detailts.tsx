interface Details {
  titulo: string;
}

export default function Details({ titulo }: Details) {
  return (
    <div tabIndex={0} className='collapse collapse-arrow bg-base-100 border-base-300 border'>
      <div className='collapse-title font-semibold'>{titulo}</div>
      <div className='collapse-content text-sm space-y-3'>
        <p>Nível 3 - Recuperação e tratamento de lesões GRAVES</p>
        <p>Nome Comercial: Órtese Splint Bilateral</p>
        <p>Linha: Orthopedic</p>
        <p>Cod. Produto (referências/SKU): OR83</p>
        <p>Família de Produtos: Hidrolight Neo</p>
        <p>Modelos do produto (esquerda/direita–bilateral): Bilateral</p>
        <p>Composição: 74% borracha de cloropreno, 16% poliamida, 9% poliestireno e 1% PVC.</p>
        <p>PRODUTO TÉRMICO</p>
      </div>
    </div>
  );
}
