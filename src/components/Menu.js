import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="dropdown">
                    <button type="button" className="btn dropdown-toggle link-light" 
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="dropdown-menu text-small shadow">
                        <li className="">
                            <Link className="dropdown-item" to="/">Home</Link>
                        </li>
                        <li className="">
                            <Link className="dropdown-item" to="/local">Manutenção de Locais</Link>
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
