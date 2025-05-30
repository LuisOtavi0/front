import styled from "styled-components";
import { Spin } from "antd";


export const SpinnerAmarelo = styled(Spin)`
  .ant-spin-dot-item {
    background-color: yellow !important;
  }
`;

export const Container = styled.div`
    background-color: #000;
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 70px;

    flex-direction: column;
    gap: 15px;
`;
