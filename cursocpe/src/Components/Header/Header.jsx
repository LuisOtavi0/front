import { Outlet } from "react-router-dom";
import { Container, Logo } from "./Styles";
import LogoImg from "../../assets/Logo.png";

export default function Header() {
    return (
        <Container>
            <Logo src={LogoImg} alt="Logo CPE" />
        </Container>
    );
}