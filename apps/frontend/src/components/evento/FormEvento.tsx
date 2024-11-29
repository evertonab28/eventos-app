import useEvento from '@/data/hooks/useEvento';
import Passos from '../shared/Passos';
import CampoEntrada from '../shared/CampoEntrada';
import { Alias, Data } from 'core';

export default function FormEvento() {
  const { evento, aliasValido, alterarEvento, salvarEvento } = useEvento();

  const labels = [
    'Identificação do Evento',
    'Local e Data',
    'Informações finais',
  ];

  const permiteProximoPasso: boolean[] = [
    !!evento.alias && !!evento.nome && aliasValido,
    !!evento.data && !!evento.local,
    !!evento.descricao && (evento.publicoEsperado ?? 0) > 0,
    // &&
    // !!evento.imagem &&
    // !!evento.imagemBackground,
  ];

  return (
    <div>
      <Passos
        labels={labels}
        labelAcao="Salvar"
        acao={salvarEvento}
        permiteProximoPasso={permiteProximoPasso}>
        <div className="flex flex-col gap-5">
          <CampoEntrada
            label="Identificador"
            descricao="Identificador único e exclusivo do evento (usado na URL)"
            value={Alias.formatar(evento.alias ?? '')}
            onChange={(e) =>
              alterarEvento({
                ...evento,
                alias: Alias.formatar(e.target.value),
              })
            }
            erro={aliasValido ? '' : 'O Alias já foi utilizado em outro evento'}
          />
          <CampoEntrada
            label="Nome"
            descricao='Nome do evento (ex. "Festa de Aniversário do Noah")'
            value={evento.nome ?? ''}
            onChange={(e) =>
              alterarEvento({
                ...evento,
                nome: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-5">
          <CampoEntrada
            label="Data"
            descricao="Data e hora do evento"
            value={Data.formatar(evento.data ?? new Date())}
            onChange={(e) =>
              alterarEvento({
                ...evento,
                data: Data.desformatar(e.target.value),
              })
            }
            type="datetime-local"
          />
          <CampoEntrada
            label="Local"
            descricao="Endereço do evento"
            value={evento.local ?? ''}
            onChange={(e) =>
              alterarEvento({
                ...evento,
                local: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-5">
          <CampoEntrada
            label="Descrição"
            descricao="Descrição do evento"
            value={evento.descricao ?? ''}
            onChange={(e) =>
              alterarEvento({
                ...evento,
                descricao: e.target.value,
              })
            }
          />
          <CampoEntrada
            label="Imagem"
            descricao="URL da imagem que será exibida no evento"
            value={evento.imagem ?? ''}
            onChange={(e) =>
              alterarEvento({ ...evento, imagem: e.target.value })
            }
          />
          <CampoEntrada
            label="Background"
            descricao="URL da imagem que será exibida como background"
            value={evento.imagemBackground ?? ''}
            onChange={(e) =>
              alterarEvento({ ...evento, imagemBackground: e.target.value })
            }
          />
          <CampoEntrada
            label="Público Esperado"
            descricao="Quantidade de pessoas esperadas no evento"
            value={evento.publicoEsperado ?? ''}
            onChange={(e) =>
              alterarEvento({
                ...evento,
                publicoEsperado: Number(e.target.value),
              })
            }
            type="number"
            min={1}
          />
        </div>
      </Passos>
    </div>
  );
}
