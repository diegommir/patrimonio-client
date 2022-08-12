import { useState } from 'react'
import { Modal } from 'bootstrap'
import Alerta from '../mensagem/Alerta'

export default function SalvaLocais(props) {
    const [id, setId] = useState(props.local.id)
    const [nome, setNome] = useState(props.local.nome)
    const [idPai, setIdPai] = useState(props.local.pai ? props.local.pai.id : '')

    const nomePai = props.local.pai ? props.local.pai.nome : ''

    const salvar = () => {
        const msg = new Modal('#aguarde', {
            keyboard: false
        })
        msg.show()

        const local = {
            id,
            nome,
            pai: {
                id: idPai
            }
        }

        console.log(local)

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
            msg.dispose()
        })
    }

    const cancelar = () => {
        props.salvarCallBack()
    }

    return (
        <form className="mt-3 mb-3">
            <Alerta id="aguarde" mensagem="Por favor aguarde..." />

            <input type="hidden" id="id" name="id" value={ id } onChange={ (e) => setId(e.target.value) }></input>
            <input type="hidden" id="paiId" name="paiId" value={ idPai } onChange={ (e) => setIdPai(e.target.value) }></input>

            <div className="row mb-3">
                <div className="col-sm-6">
                    <label className="form-label">Nome:</label>
                    <input className="form-control" id="nome" name="nome" value={ nome } onChange={ (e) => setNome(e.target.value) }></input>
                </div>
                <div className="col-sm-6">
                    <label className="form-label">Pai:</label>
                    <input className="form-control" id="nomePai" name="nomePai" value={ nomePai } readOnly></input>
                </div>
            </div>

            <button type="button" className="btn btn-primary m-1" onClick={ salvar }>Salvar</button>
            <button type="button" className="btn btn-secondary" onClick={ cancelar }>Cancelar</button>
        </form>
    )
}
