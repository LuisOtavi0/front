import { Container, Formulario, Titulo, Input, InputWrapper, IconeOlho, Button, TextoFinal } from "./Styles";
import { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

export default function Cadastro(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [MostrarSenha, setMostrarSenha] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, senha);
    };
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

                <TextoFinal>
                    Não tem login? Faça seu cadastro <a href='#'>aqui</a>.
                </TextoFinal>


                <Button type="submit">ENTRAR</Button>
            </Formulario>
        </Container>
    );
}
