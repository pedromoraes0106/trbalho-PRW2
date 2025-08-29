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
        <div className="cadastro-container">

        <h3>Cadastrar Usuário</h3>

        <form onSubmit={cadastroUsuario} className="cadastro-form">
            <div className="field">
                <label htmlFor="nome" className="label">Nome</label>
                <input id="nome" type="text" placeholder="Digite o nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
            </div>

            <button type="submit">Cadastrar</button>
        </form>
    </div>
    )
}

export default CadUsuario;