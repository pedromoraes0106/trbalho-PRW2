import { useState } from "react";
import axios from "axios";

function CadProdutos({ onCadastro, produtos }) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  const cadastroProdutos = async (e) => {
    e.preventDefault();

    const ProdutoExistente =
      Array.isArray(produtos) && produtos.some((u) => u.nome === nome);
    if (ProdutoExistente) {
      alert("Produto já existe!");
      return;
    }

    try {
      const novoProduto = { nome, preco: parseFloat(preco) };
      await axios.post("http://localhost:3000/produtos", novoProduto);

      setNome("");
      setPreco("");
      onCadastro();
    } catch (error) {
      console.log("Erro ao cadastrar produto: ", error);
      alert("Erro ao cadastrar produto.");
    }
  };

  return (
    <div className="cadastro-container">
      <h3>Cadastrar Produto</h3>

      <form onSubmit={cadastroProdutos} className="cadastro-form">
        <div className="field">
          <label htmlFor="nome" className="label">Nome do Produto</label>
          <input id="nome" type="text" placeholder="Digite o nome do produto" value={nome} onChange={(e) => setNome(e.target.value)} required/>
        </div>

        <div className="field">
          <label htmlFor="preco" className="label">Preço</label>
          <input id="preco" type="number" step="0.01" placeholder="Digite o preço" value={preco} onChange={(e) => setPreco(e.target.value)} required/>
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadProdutos;
