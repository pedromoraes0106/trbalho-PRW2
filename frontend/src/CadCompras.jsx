import { useState, useEffect } from "react";
import axios from "axios";

function CadCompras({ onCadastro, usuarios, produtos }) {
    const [usuarioId, setUsuarioId] = useState("");
    const [produtoId, setProdutoId] = useState("");

    const cadastroCompra = async (e) => {
        e.preventDefault();
        
        if (!usuarioId || !produtoId) {
            alert("Selecione usuário e produto antes de cadastrar");
            return;
        }

        try {
            const novaCompra = {
                id_usuario: Number(usuarioId),
                id_produto: Number(produtoId),
            };

            await axios.post("http://localhost:3000/compras", novaCompra);

            setUsuarioId("");
            setProdutoId("");
            onCadastro();  
        } catch (error) {
            console.log("Erro ao cadastrar compra: ", error);
            alert("Erro ao cadastrar compra.");
        }
    };

    return (
        <div className="cadastro-container">
            <h3>Cadastrar Compra</h3>

            <form onSubmit={cadastroCompra} className="cadastro-form">
                <div className="field">
                    <label htmlFor="usuario">Selecione o usuário</label>
                    <select value={usuarioId} id="usuario" onChange={(e) => setUsuarioId(e.target.value)} required>

                        <option value="">Selecione um usuário</option>
                        {Array.isArray(usuarios) && usuarios.map((u) => (
                            <option key={u.id} value={u.id}>{u.nome}</option>
                        ))}
                    </select>
                </div>


                <div className="field">
                    <label htmlFor="produto">Selecione o produto</label>
                    <select value={produtoId} id="produto" onChange={(e) => setProdutoId(e.target.value)} required>
                        <option value="">Selecione um produto</option>
                        {Array.isArray(produtos) && produtos.map((p) => (
                            <option key={p.id} value={p.id}>{p.nome}</option>
                        ))}
                    </select>
                </div>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
  );
}

export default CadCompras;