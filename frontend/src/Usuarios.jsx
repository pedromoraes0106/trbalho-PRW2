import './Usuarios.css'
import axios from 'axios';

function Usuarios({id, nome, onRemove}) {

    const removeUsuario = async () => {        
        try {
            await axios.delete('http://localhost:3000/usuarios/' + id);
            onRemove();
            
        } catch (error) {
            console.log("Erro ao remover usuário: ", error);
            alert("Erro ao remover usuário.");
        }
    }
    return(
        <tr>
            <td>{id}</td>
            <td>{nome}</td>
            <td><button onClick={removeUsuario}>Deletar</button></td>
        </tr>
    )
}

export default Usuarios