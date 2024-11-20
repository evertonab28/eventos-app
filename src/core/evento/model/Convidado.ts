export default interface Convidado {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  confirmado: boolean;
  possuiAcompanhante: boolean;
  qtdeAcompanhantes: number;
}