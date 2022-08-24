import { useState } from 'react'
import Popup from '../mensagem/Popup'

export default function SalvaLocais(props) {
    const [id, setId] = useState(props.local.id ? props.local.id : '')
    const [nome, setNome] = useState(props.local.nome ? props.local.nome : '')

    const [mostrarAguarde, setMostrarAguarde] = useState(false)
    const [mostrarMsg, setMostrarMsg] = useState(false)
    const [msg, setMsg] = useState('')

    const salvar = () => {
        if (!nome) {
            setMsg('O nome do local não pode ser vazio.')
            setMostrarMsg(true)
            return
        }

        setMostrarAguarde(true)

        const local = {
            id,
            nome,
            pai: props.pai
        }

        fetch(process.env.REACT_APP_API_URI + '/local', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(local)
        }).then(() => {
            props.salvarCallBack()
        })
        .catch((err) => {
            console.error(err)
        })
        .finally(() => {
            setMostrarAguarde(false)
        })
    }

    const cancelar = () => {
        props.salvarCallBack()
    }

    return (
        <div>
            <Popup id="aguarde" mostrar={ mostrarAguarde } fechar={ () => setMostrarAguarde(false) } titulo="Aguarde...">Por favor aguarde...</Popup>
            <Popup id="msg" mostrar={ mostrarMsg } fechar={ () => setMostrarMsg(false) } titulo="Atenção:">{ msg }</Popup>

            <form className="mt-3 mb-3">
                <input type="hidden" id="id" name="id" value={ id } onChange={ (e) => setId(e.target.value) }></input>

                <div className="row mb-3">
                    <div className="col-sm-12">
                        <label className="form-label">Nome:</label>
                        <input className="form-control" id="nome" name="nome" value={ nome } onChange={ (e) => setNome(e.target.value) }></input>
                    </div>
                </div>

                <button type="button" className="btn btn-primary m-1" onClick={ salvar }>Salvar</button>
                <button type="button" className="btn btn-secondary" onClick={ cancelar }>Cancelar</button>
            </form>
        </div>
    )
}
