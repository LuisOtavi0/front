import { Container, Formulario, Titulo, Input, InputWrapper, IconeOlho, Button, TextoFinal, SpinnerAmarelo } from "./Styles";
import { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined, CodeSandboxCircleFilled } from "@ant-design/icons";
import api from "../../services/api/api";
import useAuthStore from "../../stores/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Login(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [carregando, setCarregando] = useState(false);
    const [mensagemErro, setMensagemErro] = useState("");

    const token = useAuthStore((state) => state.token);
    const usuario = useAuthStore((state) => state.usuario);
    const setToken = useAuthStore((state) => state.setToken);
    const navigate = useNavigate()
    const [MostrarSenha, setMostrarSenha] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setCarregando(true);
            setMensagemErro("");

            const res = await api.post("/login", {email, senha});
            const {token} = res.data;

            setToken(token);
            navigate("/");
        } catch (erro) {
            console.error(erro);
            setMensagemErro("Usuário ou senha inválidos");
        } finally {
            setCarregando(false);
        }
    };

    if (carregando) return (
        <Container style={{display: 'flex', justifyContent: 'center',
        alignItems: 'center', height: '100vh'}}>
            <SpinnerAmarelo size="large" />
        </Container>
    );

    return(
        <Container>
            <Formulario onSubmit={handleSubmit}>
                <Titulo>LOGIN</Titulo>
                <Input type="email" name="email" id="email" placeholder="E-mail" autoComplete="email" required onChange={(e) => setEmail(e.target.value)}/>

                <InputWrapper>
                <Input type={MostrarSenha ? "text" : "password"} name="senha" id="senha" placeholder="Senha" required onChange={(e) => setSenha(e.target.value)}
                />

                <IconeOlho onClick={() => setMostrarSenha(!MostrarSenha)}>
                    {MostrarSenha ? <EyeInvisibleOutlined/> : <EyeOutlined/>}
                </IconeOlho>
                </InputWrapper>

                {mensagemErro && (
                    <p style={{ color: "red", marginTop: "8px", marginBottom: "0" }}>
                        {mensagemErro}
                    </p>
                )}

                <TextoFinal>
                    Não tem login? Faça seu cadastro <Link to="/cadastro">aqui</Link>.
                </TextoFinal>


                <Button type="submit">ENTRAR</Button>
            </Formulario>
        </Container>
    );
}
