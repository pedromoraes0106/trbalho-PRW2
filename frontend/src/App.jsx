import { useEffect, useState } from 'react';
import './App.css';
import CadUsuarios from './CadUsuarios';
import ListaUsuarios from './ListaUsuarios';
import axios from "axios";

function App() {
    const [usuarios, setUsuarios] = useState([]);

    const buscaUsuarios = async () =>{
        try {
            const response = await axios.get("http://localhost:3000/usuarios");
            setUsuarios(response.data);
        } catch (error) {
            console.error("Erro ao buscar usuários: ", error);
        }
    }

    useEffect(() => {
        buscaUsuarios();
    }, []);

  return (
    <div className='app-container'>
      <header className="app-header">
        <h1>Seja bem vindo! <span className="brand">MVP Store</span></h1>
      </header>

       <main className="app-main">
        <section className="card">
          <CadUsuarios onCadastro={buscaUsuarios} lista={usuarios} />
        </section>

        <section className="card">
          <ListaUsuarios usuarios={usuarios} onRemove={buscaUsuarios}/>
        </section>

        </main>
    </div>
  )
}

export default App
