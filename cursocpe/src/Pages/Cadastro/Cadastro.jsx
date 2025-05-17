import { Container, Formulario, Titulo, Input, InputWrapper, IconeOlho, Button, TextoFinal } from "./Styles";
import { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

    //Hooks
    //***************************************************************
export default function Cadastro(){
    const [MostrarSenha, setMostrarSenha] = useState(false);
    

    return(
        <Container>
            <Formulario>
                <Titulo>CADASTRO</Titulo>
                <Input type="text" placeholder="Nome" autoComplete="name"/>
                <Input type="email" placeholder="E-mail" autoComplete="email"/>
                <Input type="text" placeholder="Cargo" autoComplete="organization-title"/>

                <InputWrapper>
                <Input type={MostrarSenha ? "text" : "password"}
                placeholder="Senha" autoComplete="new-password"/>

                <IconeOlho onClick={() => setMostrarSenha(!MostrarSenha)}>
                    {MostrarSenha ? <EyeInvisibleOutlined/> : <EyeOutlined/>}
                </IconeOlho>
                </InputWrapper>

                <Input type="password" placeholder="Confirme sua senha" autoComplete="new-password"/>

                <TextoFinal>
                    Já tem uma conta? Faça o login <a href='#'>aqui</a>.
                </TextoFinal>


                <Button type="submit">CRIAR CONTA</Button>
            </Formulario>
        </Container>
    );
}
