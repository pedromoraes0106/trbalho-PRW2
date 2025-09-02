import axios from "axios";
import Compra from "./Compra";
import { useState } from "react";

function Usuario({id, nome, compras, onRemove, onAtualiza}) {
    
    let valorTotal = 0.0;

    if(compras.length > 0){
        compras.map((p) => (
            valorTotal += p.preco
        ))
    } 

    const removeUsuario = async () => {
        try {
            await axios.delete("http://localhost:3000/usuarios/"+ id);
            onRemove();            
        } catch (error) {
            console.log("Erro ao remover usuário: ", error);
        }
    }
    
    return (
        <tr>
            <td>{id}</td>
            <td>{nome}</td>
            <td>
                {compras && compras.length > 0 ? (
                    compras.map((p) => (
                        <Compra key={p.id} usuarioId={id} produtoId={p.id}  nome={p.nome} preco={p.preco} onAtualiza={onAtualiza}></Compra>
                        ))
                )                
                : (
                    <span>Sem compras</span>
                )}
            </td>

            <td>R$ {valorTotal.toFixed(2)}</td>

            <td>
                <button onClick={removeUsuario}>Deletar</button>
            </td>
        </tr>
    )
}

export default Usuario;
