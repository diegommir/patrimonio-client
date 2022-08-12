export default function Alerta(props) {
    return (
        <div id={ props.id } className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{ props.titulo ? props.titulo : 'Mensagem' }</h5>
                    </div>
                    <div className="modal-body">
                        <p>{ props.mensagem }</p>
                    </div>
                </div>
            </div>
        </div> 
    )
}
