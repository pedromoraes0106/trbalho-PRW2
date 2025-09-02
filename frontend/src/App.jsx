import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/MVP-STORE.png";
import CadUsuarios from "./CadUsuarios";
import CadProdutos from "./CadProdutos";
import ListaUsuarios from "./ListaUsuarios";
import ListaProdutos from "./ListaProdutos";
import axios from "axios";
import CadCompras from "./CadCompras";
import EditarProdutos from "./EditarProdutos";

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
        <img src={logo} alt="MVP Store" className="logo"/>
      </header>

      <main className="app-main">
        <div className="container-left">
            <section className="card">
              <CadUsuarios onCadastro={buscaUsuarios} lista={usuarios} />
            </section>

            <section className="card">
              <CadCompras onCadastro={buscaUsuarios} usuarios={usuarios} produtos={produtos}/>
            </section>

            <section className="card lista">
              <ListaUsuarios usuarios={usuarios} onRemove={buscaUsuarios} onAtualiza={buscaUsuarios}/>
            </section>
        </div>          
      
        <div className="container-right">
          <section className="card">
            <CadProdutos onCadastro={buscaProdutos} lista={produtos} />
          </section>

          <section className="card">
            <EditarProdutos produtos={produtos} onAtualizaP={buscaProdutos} onAtualizaU={buscaUsuarios}/>
          </section>

          <section className="card lista">
            <ListaProdutos produtos={produtos} onRemove={buscaProdutos} onRemoveU={buscaUsuarios}/>
          </section>
        </div>
        
      </main>
    </div>
  );
}

export default App;
