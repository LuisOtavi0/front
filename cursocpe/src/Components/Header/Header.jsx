import { Link } from "react-router-dom";
import { Container, Logo } from "./Styles";
import LogoImg from "../../assets/Logo.png";
import useAuthStore from "../../stores/auth";

export default function Header() {
    const usuario = useAuthStore((state) => state.usuario);
    const clearAuth = useAuthStore((state) => state.clearAuth);
   

    return (
        <Container>
            <Logo src={LogoImg} alt="Logo CPE" />

                <>
                    <Link to="/login">Login</Link>
                    <Link to="/cadastro">Cadastro</Link>

                    {!!usuario && (
                        <>
                            <Link to="/">Home</Link>
                            <Link to="/perfil">Perfil</Link>
                            <h2 style={{ color: 'black' }}>Seja bem-vindo {usuario.nome}</h2>
                            <button type="button" onClick={clearAuth}>Deslogar</button>
                        </>
                    )}
                </>
           
        </Container>
    );
}
