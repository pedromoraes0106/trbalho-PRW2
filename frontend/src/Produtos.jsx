import axios from 'axios';

function Produtos({id, nome, preco, onRemove}) {

    const removeProduto = async () => {        
        try {
            await axios.delete('http://localhost:3000/produtos/' + id);
            onRemove();
            
        } catch (error) {
            console.log("Erro ao remover produto: ", error);
            alert("Erro ao remover produto.");
        }
    }
    return(
        <tr>
            <td>{id}</td>
            <td>{nome}</td>
            <td>{preco}</td>
            <td><button onClick={removeProduto}>Deletar</button></td>
        </tr>
    )
}

export default Produtos;