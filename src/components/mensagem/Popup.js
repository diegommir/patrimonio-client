import '../../css/Popup.css'

export default function Popup(props) {
    if (!props.mostrar) {
        return null
    }

    return (
        <div id={ props.id } className="popup">
            <div className="popup-window">
                <header className="modal-header">
                    <h5>{ props.titulo ? props.titulo : 'Mensagem...' }</h5>
                    <button type="button" className="btn-close" onClick={ () => props.fechar() }></button>
                </header>
                <div className="popup-content">
                    { props.children }
                </div>
            </div>
        </div> 
    )
}
