function ListaUsuarios({usuarios}) {
    return(
        <div>
            <h3>Usuários existentes</h3>
            <ul>
                {usuarios && usuarios.lenght > 0 ? (
                    usuarios.map((user) => (
                    <li key={user.id}>Nome: {user.nome}  - {user.email}</li>
                ))) : (<li>Nenhum usuario encontrado</li>) 
                }               
            </ul>
        </div>
    )
}

export default ListaUsuarios;