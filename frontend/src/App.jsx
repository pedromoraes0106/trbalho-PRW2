import { useEffect, useState } from 'react';
import './App.css';
import CadUsuarios from './CadUsuarios';
import ListaUsuarios from './ListaUsuarios';
import axios from "axios";

function App() {
    const [usuarios, setUsuarios] = useState([]);

    const buscaUsuarios = async () =>{
        try {
            const response = await axios.get("http://localhost:5173/backend/usuario.php");
            setUsuarios(response.data);
        } catch (error) {
            console.error("Erro ao buscar usuários: ", error);
        }
    }

    useEffect(() => {
        buscaUsuarios();
    }, []);


    function cadastrar(){
      buscaUsuarios();
    }

  return (
    <>
      <h1>Seja bem vindo!</h1>
      <p>Desenvolva seu website usando React!</p>

      <CadUsuarios onCadastro={cadastrar}></CadUsuarios>

      <ListaUsuarios listaUsuarios={usuarios}></ListaUsuarios>
    </>
  )
}

export default App
