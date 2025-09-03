import axios from 'axios';

function Produto({id, nome, preco, onRemove, onRemoveU}) {

    const removeProduto = async () => {        
        try {
            await axios.delete('http://localhost:3000/produtos/' + id);
            onRemove();
            onRemoveU();
            
        } catch (error) {
            console.log("Erro ao remover produto: ", error);
            alert("Erro ao remover produto.");
        }
    }
    return(
        <tr>
            <td>{id}</td>
            <td>{nome}</td>
            <td>R$ {preco.toFixed(2)}</td>
            <td><button onClick={removeProduto}>Deletar</button></td>
        </tr>
    )
}

export default Produto;