import axios from "axios";

function Compra({ id, usuarioId, produtoId, quantidade, onRemove }) {

    const removeCompra = async () => {
        try {
            await axios.delete("http://localhost:3000/compras/" + id);
            onRemove();
            
        } catch (error) {
            console.log("Erro ao remover compra: ", error);
            alert("Erro ao remover compra.");
        }
    };

    return (
        <tr>
            <td>{id}</td>
            <td>{usuarioId}</td>
            <td>{produtoId}</td>
            <td>{quantidade}</td>
            <td>
                <button onClick={removeCompra}>Deletar</button>
            </td>
        </tr>
    );
}

export default Compra;