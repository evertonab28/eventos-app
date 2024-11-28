import { createContext, useState } from 'react';
import { Evento } from 'core';

interface ContextoEventosProps {
  evento: Evento | null;
  eventos: Evento[];

  selecionarEvento(id: string): void;
  excluirEvento(id: string): void;
  adicionarEventoViaQrCode(qrcode: string): void;
}

const ContextoEventos = createContext<ContextoEventosProps>({} as any);

export function ProvedorEventos(props: any) {
  const [evento, setEvento] = useState<Evento | null>(null);
  const [eventos, setEventos] = useState<Evento[]>([]);

  function selecionarEvento(id: string) {
    const evento = eventos.find((e) => e.id === id);
    setEvento(evento || null);
  }

  function adicionarEventoViaQrCode(qrcode: string) {}

  function excluirEvento(id: string) {
    const novosEventos = eventos.filter((e) => e.id !== id);
    setEventos(novosEventos);
  }

  return (
    <ContextoEventos.Provider
      value={{
        evento,
        eventos,
        selecionarEvento,
        adicionarEventoViaQrCode,
        excluirEvento,
      }}>
      {props.children}
    </ContextoEventos.Provider>
  );
}

export default ContextoEventos;
