import styled from "styled-components";

export const Container = styled.div`
    background-color: #000;
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 70px;
`;

export const Formulario = styled.form`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 0 15px;

    @media (max-width: 320px) {
    gap: 10px;
    }
`;

export const Titulo = styled.h1`
    color: #Fec937;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;

    @media (max-width: 320px) {
    font-size: 24px;
    text-align: center;
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px 16px;
    border-radius: 20px;
    border: none;
    outline: none;
    font-size: 14px;
    background-color: #f0f0f0;

    @media (max-width: 320px) {
    padding: 10px 14px;
    font-size: 13px;
    }
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
    width: 50%;
    padding: 12px;
    background-color: #Fec937;
    color: #000;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
        background-color: #e6c300;
    }

    @media (max-width: 320px) {
    width: 50%;
    padding: 10px;
    font-size: 14px;
    }
`;

export const TextoFinal = styled.p`
    color: #fff;
    font-size: 12px;
    a{
        color: #Fec937;
        text-decoration: none;
    }

    @media (max-width: 320px) {
    font-size: 11px;
    }
`;