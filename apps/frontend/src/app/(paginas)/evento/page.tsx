'use client';

import Janela from '@/components/shared/Janela';
import useEvento from '@/data/hooks/useEvento';

export default function PaginaEvento() {
  const { evento } = useEvento();
  return (
    <div>
      <Janela
        label="Qual evento vamos criar?"
        titulo={evento?.nome ? evento?.nome : 'Novo evento'}
        imagem={evento?.imagem}
        background={evento?.imagemBackground}>
        <span>Evento</span>
        <span>Evento</span>
        <span>Evento</span>
        <span>Evento</span>
        <span>Evento</span>
        <span>Evento</span>
        <span>Evento</span>
        <span>Evento</span>
      </Janela>
    </div>
  );
}
