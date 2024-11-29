import Image from 'next/image';

export default function PaginaObrigado() {
  return (
    <div className="flex flex-col items-center gap-5">
      <Image src="/mascote.png" alt="Mascote" width={200} height={200} />
      <span className="text-3xl font-black">Muito obrigado!</span>
      <span className="text-zinc-400 -mt-5">
        Sua confirmação é importante para nós!
      </span>
    </div>
  );
}
