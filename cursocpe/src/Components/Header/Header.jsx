import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container, Logo, NavArea } from "./Styles";
import LogoImg from "../../assets/Logo.png";
import useAuthStore from "../../stores/auth";

export default function Header() {
    const usuario = useAuthStore((state) => state.usuario);
    const clearAuth = useAuthStore((state) => state.clearAuth);
    const location = useLocation();
    const navigate = useNavigate();

    const path = location.pathname;
    const isAuthPage = path === "/login" || path === "/cadastro";
    const LogoClick = () => {
        if (!isAuthPage) {
            navigate("/");
        }
    };

    return (
        <Container>
            <Logo src={LogoImg} alt="Logo CPE" onClick={LogoClick} 
            style={{ cursor: isAuthPage ? "default" : "pointer" }} />

            {!isAuthPage && usuario && (
                <NavArea>
                    <Link to="/">Home</Link>
                    <Link to="/perfil">Perfil</Link>
                    <Link to="/usuarios">Usuários</Link>
                    <span style={{ color: "black" }}>Seja bem-vindo, {usuario.nome}</span>
                    <button onClick={clearAuth}>Deslogar</button>
                </NavArea>
            )}
        </Container>
    );
}
