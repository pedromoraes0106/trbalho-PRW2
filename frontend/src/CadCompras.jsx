import { useState, useEffect } from "react";
import axios from "axios";

function CadCompras({ onCadastro, usuarios, produtos }) {
    const [usuarioId, setUsuarioId] = useState("");
    const [produtoId, setProdutoId] = useState("");
    const [quantidade, setQuantidade] = useState(1);

    const cadastroCompra = async (e) => {
        e.preventDefault();

        try {
        const novaCompra = {
            usuarioId: parseInt(usuarioId),
            produtoId: parseInt(produtoId),
            quantidade: parseInt(quantidade),
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
                <label htmlFor="usuario">Usuário</label>
                <select name="" id="">

                </select>
            </div>

            <div className="field">
                <label htmlFor="produto">Produto</label>
                <select name="" id="">
                    
                </select>
            </div>

            <div className="field">
            <label htmlFor="quantidade">Quantidade</label>
            
            </div>

            <button type="submit">Cadastrar</button>
        </form>
    </div>
  );
}