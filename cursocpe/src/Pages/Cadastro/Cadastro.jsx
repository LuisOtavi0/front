import { Container, CampoDados, Titulo, Input, InputWrapper, IconeOlho, Button, TextoFinal } from "./Styles";
import { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

export default function Cadastro(){
    const [MostrarSenha, setMostrarSenha] = useState(false);

    return(
        <Container>
            <CampoDados>
                <Titulo>CADASTRO</Titulo>
                <Input type="text" placeholder="Nome" />
                <Input type="email" placeholder="E-mail" />
                <Input type="text" placeholder="Cargo" />

                <InputWrapper>
                <Input type={MostrarSenha ? "text" : "password"}
                placeholder="Senha"/>

                <IconeOlho onClick={() => setMostrarSenha(!MostrarSenha)}>
                    {MostrarSenha ? <EyeInvisibleOutlined/> : <EyeOutlined/>}
                </IconeOlho>
                </InputWrapper>

                <Input type="password" placeholder="Repita sua senha" />

                <TextoFinal>
                    Já tem uma conta? Faça o login <a href='#'>aqui</a>.
                </TextoFinal>


                <Button>CRIAR CONTA</Button>
            </CampoDados>
        </Container>
    );
}
