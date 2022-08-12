export default function ListaLocais(props) {
    let locais = props.locais ? props.locais : []
    let list = []

    for (let local of locais) {
        list.push(<tr key={ local.id }>
            <td>{ local.nome }</td>
            <td>{ local.usuario }</td>
            <td>
                <button type="button" className="btn btn-primary btn-sm" onClick={() => props.setLocal(local)}>Alterar</button>
            </td>
            </tr>)
    }

    return (
        <table className="table table-sm table-striped">
            <thead>
                <tr>
                    <th>Nome do Local</th>
                    <th>Usuário de Cadastro</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                { list }
            </tbody>
        </table>
    )
}
