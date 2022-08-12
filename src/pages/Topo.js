import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

export default function Topo() {
    return (
        <div>
            <Menu />
            <Outlet />
        </div>
    )
}
