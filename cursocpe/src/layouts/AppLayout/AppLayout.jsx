import { Outlet } from "react-router-dom";
import { Container } from "./Styles";
import {Header, Footer} from "../../Components";

export default function AppLayout() {
    return (
        <Container>
            <Header></Header>
            <Outlet />
            <p></p>
        </Container>
    )
}