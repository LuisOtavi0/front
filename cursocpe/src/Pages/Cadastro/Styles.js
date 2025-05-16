import styled from "styled-components";

export const Container = styled.div`
    background-color: #000;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 70px;
`;

export const CampoDados = styled.div`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

export const Titulo = styled.h1`
    color: #FFD100;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px 16px;
    border-radius: 20px;
    border: none;
    outline: none;
    font-size: 14px;
    background-color: #f0f0f0;
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const IconeOlho = styled.div`
    position: absolute;
    right: 16px;
    top: 30%;
    transform: translateY();
    cursor: pointer;
    font-size: 18px;
    color: #000;
`;

export const Button = styled.button`
    width: 30%;
    padding: 12px;
    background-color: #FFD100;
    color: #000;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
        background-color: #e6c300;
    }
`;

export const TextoFinal = styled.p`
    color: #fff;
    font-size: 12px;
    a{
        color: #FFD100;
        text-decoration: none;
    }
`;