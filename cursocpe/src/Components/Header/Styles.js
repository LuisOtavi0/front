import styled from "styled-components";

export const Container = styled.header`
    background-color: #fec937;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    box-sizing: border-box;

    @media (max-width: 760px) {
        flex-direction: column;
        align-items: center;
        height: auto;
        padding: 10px;
        gap: 10px;
    }
`;



export const Logo = styled.img`
    width: 150px;
    height: auto;
        @media (max-width: 280px) {
        width: 100px;
    }
`;

export const NavArea = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;

    a {
        text-decoration: none;
        color: black;
        font-weight: bold;
    }

    span {
        color: black;
        font-size: 14px;
    }

    button {
        padding: 5px 10px;
        background-color: #fff;
        border: 1px solid #000;
        border-radius: 4px;
        cursor: pointer;
    }

    @media (max-width: 280px) {
        flex-direction: column;
        align-items: center;
        gap: 8px;
        a, span, button {
            font-size: 12px;
        }
    }
`;