import styled from "styled-components";

export const Container = styled.header`
    background-color: #fec937;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;

    @media (max-width: 280px) {
    justify-content: center;
    height: 100px;
    padding: 0 10px;
    }
`;

export const Logo = styled.img`
    width: 250px;
    height: auto;

    @media (max-width: 280px) {
        height: 100px;
    }
`;