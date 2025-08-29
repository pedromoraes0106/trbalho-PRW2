import { useEffect, useState } from "react";
import "./App.css";
import CadUsuarios from "./CadUsuarios";
import CadProdutos from "./CadProdutos";
import ListaUsuarios from "./ListaUsuarios";
import ListaProdutos from "./ListaProdutos";
import axios from "axios";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  const buscaUsuarios = async () => {
    try {
      const response = await axios.get("http://localhost:3000/usuarios");
      setUsuarios(response.data);
    } catch (error) {
      console.error("Erro ao buscar usuários: ", error);
    }
  };

  const [produtos, setProdutos] = useState([]);

  const buscaProdutos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/produtos");
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos: ", error);
    }
  };

  useEffect(() => {
    buscaUsuarios();
    buscaProdutos();
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>
          Seja bem vindo! <span className="brand">MVP Store</span>
        </h1>
      </header>

      <main className="app-main">
        <section className="card">
          <CadUsuarios onCadastro={buscaUsuarios} lista={usuarios} />
        </section>

        <section className="card">
          <ListaUsuarios usuarios={usuarios} onRemove={buscaUsuarios} />
        </section>

        <section className="card">
          <CadProdutos onCadastro={buscaProdutos} lista={produtos} />
        </section>

        <section className="card">
          <ListaProdutos produtos={produtos} onRemove={buscaProdutos}></ListaProdutos>
        </section>
      </main>
    </div>
  );
}

export default App;
