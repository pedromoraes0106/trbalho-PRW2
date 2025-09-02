import axios from "axios";

function Compra({usuarioId, produtoId, nome, preco, onAtualiza}) {

    const removeCompra = async () => {
        try {
            await axios.delete("http://localhost:3000/compras/" + produtoId + "/" + usuarioId);
            onAtualiza();
            
        } catch (error) {
            console.log("Erro ao remover compra: ", error);
            alert("Erro ao remover compra.");
        }
    };

    return (
        <div>
            <label id="nome">{nome}</label>
            <label id="preco">R$ {preco}</label>

            <button onClick={removeCompra}>Excluir compra</button>
        </div>
    );
}

export default Compra;