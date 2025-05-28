import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    background-color: #fec937;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding: 10px;
    }
`;

export const Logo = styled.img`
    width: 150px;
    height: auto;
`;

