import { useEffect, useState } from 'react'
import ListaLocais from '../components/local/ListaLocais'
import SalvaLocais from '../components/local/SalvaLocais'
import SelecionaLocal from '../components/local/SelecionaLocal'
import Popup from '../components/mensagem/Popup'

export default function Local() {
    const [locais, setLocais] = useState([])
    const [local, setLocal] = useState({})
    const [pai, setPai] = useState({})

    const [mostrarAguarde, setMostrarAguarde] = useState(false)
    const [mostrarSelecionaLocal, setMostrarSelecionaLocal] = useState(false)

    const consultarLocais = (pai) => {
        setMostrarAguarde(true)

        setPai(pai)

        let uri = '/local'
        uri += pai ? `/pai/${pai.id}` : ''

        fetch(process.env.REACT_APP_API_URI + uri)
        .then(res => res.json())
        .then((result) => {
            setLocais(result.locais)
        })
        .catch((err) => {
            console.error(err)
            alert('Ocorreu um erro ao executar esta consulta.')
        }).finally(() => {
            setMostrarAguarde(false)
        })
    }

    const salvarCallBack = () => {
        setLocal({})
        consultarLocais(pai)
    }

    const selecionarLocal = (local) => {
        consultarLocais(local)
        setMostrarSelecionaLocal(false)
    }

    useEffect(() => {
        consultarLocais()
    }, [])

    return (
        <div>
            <Popup id="aguarde" mostrar={ mostrarAguarde } fechar={ () => setMostrarAguarde(false) } titulo="Aguarde...">Por favor aguarde...</Popup>
            <Popup id="selecionaLocal" mostrar={ mostrarSelecionaLocal } fechar={ () => setMostrarSelecionaLocal(false) } titulo="Selecione um Local para Listar:">
                <SelecionaLocal selecionarCallBack={ selecionarLocal } />
            </Popup>

            <h3>Locais</h3>
            <h5>
                Listando os Locais em "{ pai ? pai.nome : 'Raiz' }"
            </h5>
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => setMostrarSelecionaLocal(true)}>Mudar</button>
            
            <hr />
            <SalvaLocais key={ local.id } local={ local } pai={ pai } salvarCallBack={ salvarCallBack } />
            <hr />
            <ListaLocais locais={ locais } setLocal={ setLocal } />
        </div>
    )
}
