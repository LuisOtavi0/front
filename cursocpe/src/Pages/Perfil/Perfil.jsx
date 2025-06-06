import React, { useState } from "react";
import {Container, ModalOverlay, ModalContent, InputField, BotaoEditar, BotaoSalvar, BotaoCancelar, TituloModal } from "./Styles";
import useAuthStore from "../../stores/auth";
import { Usuario } from "../../Components";

export default function Perfil() {
    const usuario = useAuthStore((state) => state.usuario);
    const [modalAberto, setModalAberto] = useState(false);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cargo, setCargo] = useState("")

    return (
        <Container>
            <Usuario usuario={usuario} />
            <BotaoEditar onClick={() => setModalAberto(true)}>Editar</BotaoEditar>

            {modalAberto && (
                <ModalOverlay>
                    <ModalContent>
                        <TituloModal>Editar usuário</TituloModal>
                        <InputField placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                        <InputField placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <InputField placeholder="Cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} />
                        <BotaoSalvar>SALVAR</BotaoSalvar>
                        <BotaoCancelar onClick={() => setModalAberto(false)}>✕</BotaoCancelar>
                    </ModalContent>
                </ModalOverlay>
            )}
        </Container>
    );
}