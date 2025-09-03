import Produto from "./Produto";

function ListaProdutos({ produtos, onRemove, onRemoveU }) {
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
          {produtos.map((p) => (
            <Produto key={p.id} id={p.id} nome={p.nome} preco={p.preco} onRemove={onRemove} onRemoveU={onRemoveU} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaProdutos;
