import Produtos from "./Produtos";

function ListaProdutos({ produtos, onRemove }) {
  if (!produtos || produtos.length === 0) {
    return (
      <div>
        <h3>Produtos existentes</h3>
        <p>Nenhum produto existente</p>
      </div>
    );
  }

  return (
    <div className="produtos-container">
      <h3>Produtos existentes</h3>
      <table className="produtos-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((u) => (
            <Produtos key={u.id} id={u.id} nome={u.nome} preco={u.preco} onRemove={onRemove} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaProdutos;
