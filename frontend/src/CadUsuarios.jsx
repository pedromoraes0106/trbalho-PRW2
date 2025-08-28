import {useEffect, useState} from "react";
import axios from "axios";

function CadUsuario(props) {
    const [usuarios, setUsuarios] = useState([]);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

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

    const cadastroUsuario = async () => {
        if(usuarios.some(u => u.email === email)){
            alert("Este E-mail já está cadastrado!");
            return;
        }

        try {
            const novoUsuario = {nome, email};
            const response = await axios.post("http://localhost:5173/backend/usuario.php", novoUsuario);
            setUsuarios([...usuarios, response.data]);
            setNome("");
            setEmail("");
        } catch (error) {
            console.log("Erro ao casdastrar usuario: ", erro);
        }
    };

    return(
        <div>
            <h2>Casdastrar Usuário</h2>

            <label>Nome: </label>
            <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
            <br /><br />
            <label>Email: </label>
            <input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br /><br />
            <button onClick={cadastroUsuario}>Cadastrar</button>
        </div>
    )
}

export default CadUsuario;