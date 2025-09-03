import {useState} from "react";
import axios from "axios";

function EditarProdutos({produtos, onAtualizaP, onAtualizaU}) {

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);
    
    const [produtoId, setProdutoId] = useState(0);

    const EditProduto = async (e) => {
        e.preventDefault();
              
        try {
            await axios.put(`http://localhost:3000/produtos/${produtoId}`, {nome, preco})
            
            setNome("");
            setPreco("");
            setProdutoId(0);
            onAtualizaP();
            onAtualizaU();
        } catch (error) {
            console.log("Erro ao atualizar produto: ", error);
            alert("Erro ao atualizar produto.");
        }

    }

    return (
      <div className="cadastro-container">
        <h3>Editar Produto</h3>

        <form onSubmit={EditProduto} className="cadastro-form">
            <div className="field">
                <label htmlFor="produto">Selecione o produto</label>
                <select value={produtoId} id="produto"  onChange={(e) => setProdutoId(Number(e.target.value))} required >
                <option value="">Selecione um produto</option>
                {Array.isArray(produtos) && produtos.map((p) => (
                    <option key={p.id} value={p.id}>
                        {p.nome}
                    </option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="nome">Novo nome</label>
                <input type="text" id="nome" value={nome} placeholder="Digite o novo nome" onChange={(e) => setNome(e.target.value)} required/>
            </div>

            <div>
                <label htmlFor="preco">Novo preço</label>
                <input id="preco" type="number" step="0.01" value={preco} onChange={(e) => setPreco(Number(e.target.value))} required/>    
            </div>

          <button type="submit">Editar</button>
        </form>
      </div>
    );
}

export default EditarProdutos;
