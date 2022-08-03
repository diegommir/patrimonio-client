import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav>
            <Link to="/">Home</Link><br />
            <Link to="/teste">Teste</Link><br />
        </nav>
    )
}
