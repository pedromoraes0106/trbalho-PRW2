import Compra from "./Compra";

function ListaCompras({ compras, onRemove }) {
    if (!compras || compras.length === 0) {
        return (
        <div>
            <h3>Compras existentes</h3>
            <p>Nenhuma compra existente</p>
        </div>
        );
    }

    return (
        <div className="compras-container">
            <h3>Compras existentes</h3>
            <table className="compras-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>ID Usuário</th>
                    <th>ID Produto</th>
                    <th>Quantidade</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                {compras.map((c) => (
                    <Compra
                    key={c.id}
                    id={c.id}
                    usuarioId={c.usuarioId}
                    produtoId={c.produtoId}
                    quantidade={c.quantidade}
                    onRemove={onRemove}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListaCompras;