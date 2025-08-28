function ListaUsuarios(props) {
    return(
        <div>
            <h3>Usuários existentes</h3>
            <ul>
                {props.listaUsuarios && props.listaUsuarios.length > 0 ? (props.listaUsuarios.map((u) => (<li key={u.id}>Nome: {u.nome}</li>))) : (<li>Nenhum usuario encontrado</li>)}               
            </ul>
        </div>
    )
}

export default ListaUsuarios;