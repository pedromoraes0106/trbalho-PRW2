import axios from "axios";
import "./App.css";

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
        <div className="compra-item">
          <div className="compra-info">
            <div className="compra-nome">{nome}</div>
            <div className="compra-preco">R$ {preco}</div>
          </div>
          <div className="button">
            <button className="botao-remove-compra" onClick={removeCompra}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                    >
                <path d="M3 6h18v2H3zm2 4h14v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10zm12 2v10H9V12h8zm-1-4V3h-4V2H10v1H6v1H5v2h14V6h-1z" />
                </svg>
            </button>
        </div>
        </div>
    );
}

export default Compra;