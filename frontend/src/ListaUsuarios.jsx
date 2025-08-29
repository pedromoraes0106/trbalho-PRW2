import Usuarios from './Usuarios'

function ListaUsuarios({usuarios, onRemove}) {

        if(!usuarios || usuarios.length === 0){
            return(
                <div>
                    <h3>Usuários existentes</h3>
                    <p>Nenhum usuário existente</p>
                </div>   
            )
        }

        return(
        <div className="usuarios-container">
            <h3>Usuários existentes</h3>
            <table className="usuarios-table">
                <thead>
                    <tr>
                        <th>ID</th> 
                        <th>Nome</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((u) => (
                        <Usuarios key={u.id} id={u.id} nome={u.nome} onRemove={onRemove}/>
                    ))}
                </tbody>           
            </table>
        </div>

    )
}

export default ListaUsuarios;