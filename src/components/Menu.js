import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="dropdown">
                    <button type="button" className="btn dropdown-toggle link-light" 
                        data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li>
                            <Link className="dropdown-item" to="/">Home</Link>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/local">Manutenção de Locais</Link>
                        </li>
                        <li>
                            <div className="dropend">
                                <button type="button" className="dropdown-item dropdown-toggle" 
                                    data-bs-toggle="dropdown" aria-expanded="false">Manutenção de Patrimônios</button>
                                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                    <li>
                                        <Link className="dropdown-item" to="/">Movimentar Patrimônio</Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/">Novo Patrimônio</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/">Atualizar Dados</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/">Baixar Patrimônio</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link className="nav-link link-light" to="/">Sistema de Controle de Patrimônio</Link>
                </div>
                <div>
                </div>
            </div>
        </nav>
    )
}
