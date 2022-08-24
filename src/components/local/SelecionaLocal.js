import { useEffect, useState } from "react"
import Popup from "../mensagem/Popup"

export default function SelecionaLocal(props) {
    const [lista, setLista] = useState([])
    const [pai, setPai] = useState(undefined)
    
    const [mostrarAguarde, setMostrarAguarde] = useState(false)

    const consultarLocais = (pai) => {
        setMostrarAguarde(true)

        setPai(pai)

        let uri = '/local'
        uri += pai ? `/pai/${pai.id}` : ''

        fetch(process.env.REACT_APP_API_URI + uri)
        .then(res => res.json())
        .then((result) => {
            const locais = result.locais
            const listaTemp = []
        
            for (let local of locais) {
                listaTemp.push(<tr key={ local.id }>
                    <td>
                        { local.nome }
                    </td>
                    <td>
                        <button type="button" className="btn btn-secondary btn-sm m-1" onClick={() => consultarLocais(local)}>Expandir</button>
                        <button type="button" className="btn btn-primary btn-sm" onClick={() => props.selecionarCallBack(local)}>Selecionar</button>
                    </td>
                    </tr>)
            }

            if (listaTemp.length > 0) {
                setLista(listaTemp)
            }
        })
        .catch((err) => {
            console.error(err)
            alert('Ocorreu um erro ao executar esta consulta.')
        }).finally(() => {
            setMostrarAguarde(false)
        })
    }

    useEffect(() => {
        consultarLocais()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Popup id="aguarde" mostrar={ mostrarAguarde } fechar={ () => setMostrarAguarde(false) } titulo="Aguarde...">Por favor aguarde...</Popup>
            <p>Locais em <strong>"{ pai ? pai.nome : 'Raiz' }"</strong></p>
            <hr />
            <table className="table table-sm table-striped">
                <thead>
                    <tr>
                        <th>Nome do Local</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    { lista }
                </tbody>
            </table>
            { pai ? 
                <button type="button" className="btn btn-secondary btn-sm" onClick={() => consultarLocais(pai.pai)}>Voltar</button> : 
                <button type="button" className="btn btn-primary btn-sm" onClick={() => props.selecionarCallBack()}>Selecionar Raiz</button>}
        </div>
    )
}
