import {useState} from "react";
import axios from "axios";

function CadUsuario({onCadastro, usuarios}) {

    const [nome, setNome] = useState("");

    const cadastroUsuario = async (e) => {
        e.preventDefault();

        const usuarioExistente = Array.isArray(usuarios) && usuarios.some(u => u.nome === nome);
        if (usuarioExistente) {
            alert("Usuário já existe!");
            return;
        }

        try {
            const novoUsuario = { nome };
            await axios.post("http://localhost:3000/usuarios", novoUsuario);

            setNome("");
            onCadastro(); 
        } catch (error) {
            console.log("Erro ao cadastrar usuário: ", error);
            alert("Erro ao cadastrar usuário.");
        }
    };

    return(
        <div>
            <h2>Casdastrar Usuário</h2>
            <form onSubmit={cadastroUsuario}>
                <label>Nome: </label>
                <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required/>
                <br/><br/>
                <br/><br/>
                <input type="submit" value="Cadastrar" name="cadastrar"/>
            </form>
        </div>
    )
}

export default CadUsuario;