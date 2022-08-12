import { useEffect, useState } from 'react'
import ListaLocais from '../components/local/ListaLocais'
import SalvaLocais from '../components/local/SalvaLocais'

export default function Local() {
    const [locais, setLocais] = useState([])
    const [local, setLocal] = useState({})

    function consultarLocais() {
        fetch(process.env.REACT_APP_API_URI + '/local/pai/1')
        .then(res => res.json())
        .then((result) => {
            setLocais(result.locais)
        })
        .catch((err) => {
            console.error(err)
            alert('Ocorreu um erro ao executar esta consulta.')
        })
    }

    function salvarCallBack() {
        setLocal({})
        consultarLocais()
    }

    useEffect(() => {
        consultarLocais()
    }, [])

    return (
        <div>
            <h2>Locais</h2>
            <h3>Raiz...</h3>
            <hr />
            <SalvaLocais key={ local.id } local={ local } salvarCallBack={ salvarCallBack } />
            <hr />
            <ListaLocais locais={ locais } setLocal={ setLocal } />
        </div>
    )
}
