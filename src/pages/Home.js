import { useState } from "react"
import Popup from "../components/mensagem/Popup"

export default function Home() {
    const [mostarMensagem, setMostrarMensagem] = useState(false)

    const abrirPopup = () => {
        setMostrarMensagem(true)
    }

    const fecharPopup = () => {
        setMostrarMensagem(false)
    }

    return (
        <div>
            <h3>Página Inicial</h3>
            <button type="button" className="btn btn-primary" onClick={() => abrirPopup()}>Abrir</button>

            <Popup id="teste" mostrar={ mostarMensagem } fechar={ fecharPopup }>
            </Popup>
        </div>
    )
}
