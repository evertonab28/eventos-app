import Image from 'next/image';

export interface JanelaProps {
  label?: string;
  titulo?: string;
  imagem?: string;
  background?: string;
  children: React.ReactNode;
}

export default function Janela(props: JanelaProps) {
  return (
    <div className="relative rounded-xl overflow-hidden border border-zinc-800">
      <Image
        src={
          props.background
            ? props.background
            : 'https://www.findup.com.br/wp-content/uploads/2024/02/Prancheta-1-915x610.png'
        }
        alt="Imagem de background"
        fill
        className="-z-30 object-cover"
      />
      <div className="bg-black/80">
        <div className="flex gap-7 p-6 items-center">
          <div className="w-28 h-28 relative">
            <Image
              src={
                props.imagem
                  ? props.imagem
                  : 'https://pt-br.learn.canva.com/wp-content/uploads/sites/9/2020/01/evento-corporativo-1.jpg'
              }
              alt="Imagem do evento"
              className="rounded-full object-cover"
              fill
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-zinc-300">
              {props.label ?? 'Detalhes do Evento:'}
            </span>
            <span className="text-4xl font-bold">
              {props.titulo ?? 'Título do Evento'}
            </span>
          </div>
          <div className="flex-1">
            <Image
              src="/elementos.png"
              alt="Elementos decorativos"
              width={140}
              height={140}
            />
          </div>
        </div>
        <div className="bg-black/70 border-t-4 border-zinc-800 rounded-b-xl p-7">
          {props.children}
        </div>
      </div>
    </div>
  );
}
