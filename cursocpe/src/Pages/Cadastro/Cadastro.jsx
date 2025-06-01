import { Container, Formulario, Titulo, Input, InputWrapper, IconeOlho, Button, TextoFinal } from "./Styles";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useCreateUser, useGetUsers, useLogin } from "../../hooks/user";
import { useNavigate, Link } from "react-router-dom";
import useAuthStore from "../../stores/auth";

export default function Cadastro(){
    const {handleSubmit, register, watch, formState: {errors},} = useForm({});
    const senha = watch("senha");
    const navigate = useNavigate();

    const setToken = useAuthStore((state) => state.setToken);

    const [MostrarSenha, setMostrarSenha] = useState(false);

    const{mutate: postUser, isLoading: loadingCadastro} = useCreateUser();

    const { mutateAsync: loginUser, isLoading: loadingLogin } = useLogin({
        onSuccess: (data) => {
            setToken(data.token);
            navigate("/");
        },
        onError: (error) => {
            alert("Erro no login automático: " + error.message);
        }
    });


    function response(data){
        // Remove o campo confirmarSenha antes de enviar
        const { confirmarSenha, ...dadosValidos } = data;

        // Acrescenta status fixo
        const dadosComStatus = {
            ...dadosValidos,
            status: "ativo" // valor padrão
        };

        postUser(dadosComStatus, {
            onSuccess: async () => {
                try {
                    await loginUser({
                        email: dadosComStatus.email,
                        senha: dadosComStatus.senha,
                    });
                    navigate("/");
                } catch (err) {
                    console.error("Erro no login automático:", err);
                }
            },
            onError: (err) => {
                console.error("Erro ao cadastrar:", err.response?.data || err.message || err);
            },
            });
    }

    return(
        <Container>
            <Formulario onSubmit={handleSubmit(response)}>
                <Titulo>CADASTRO</Titulo>
                <Input {...register("nome")} type="text" placeholder="Nome" autoComplete="name"/>
                <Input {...register("email")} type="email" placeholder="E-mail" autoComplete="email"/>
                <Input {...register("cargo")} type="text" placeholder="Cargo" autoComplete="organization-title"/>
                

                <InputWrapper>
                <Input {...register("senha")} type={MostrarSenha ? "text" : "password"}
                placeholder="Senha" autoComplete="new-password"/>

                <IconeOlho onClick={() => setMostrarSenha(!MostrarSenha)}>
                    {MostrarSenha ? <EyeInvisibleOutlined/> : <EyeOutlined/>}
                </IconeOlho>
                </InputWrapper>

                <Input 
                    {...register("confirmarSenha", {
                        validate: value => value === senha || "As senhas não coincidem"
                    })} 
                    type="password" 
                    placeholder="Confirme sua senha" 
                    autoComplete="new-password"
                />
                {errors.confirmarSenha && <p>{errors.confirmarSenha.message}</p>}

                <TextoFinal>
                    Já tem uma conta? Faça o login <Link to="/login">aqui</Link>.
                </TextoFinal>


                <Button type="submit" disabled={loadingCadastro || loadingLogin}>{loadingCadastro || loadingLogin ? "Carregando..." : "CRIAR CONTA"}</Button>
            </Formulario>

            
            
        </Container>
    );
}
