export default function PaginaAdminEvento(props: any) {
  const id = props.params.todos[0];
  const senha = props.params.todos[1];

  return(
    <div className="flex flex-col">
      <span>Id: {id}</span>
      <span>Senha: {senha}</span>
    </div>
  )
}