import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;

    flex-direction: column;
    gap: 10px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 25px;
  width: 90%;
  max-width: 400px;
  position: relative;
  box-shadow: 0px 0px 10px #000;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 180px) {
    padding: 15px;
  }
`;

export const TituloModal = styled.h2`
  margin: 0;
  font-size: 18px;
  text-align: center;
`;

export const InputField = styled.input`
  padding: 10px 15px;
  border-radius: 999px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 14px;

  &::placeholder {
    color: #aaa;
  }
`;

export const BotaoEditar = styled.button`
  background-color: #FFD700;
  color: black;
  border: none;
  padding: 8px 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  margin-top: -20px;
`;

export const BotaoSalvar = styled.button`
  background-color: transparent;
  border: 2px solid #FFD700;
  color: #FFD700;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 12px;
  margin-top: 10px;
  cursor: pointer;
`;

export const BotaoCancelar = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
`;