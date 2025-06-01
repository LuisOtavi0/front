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
    padding-left: 10px;
    padding-right: 10px;
`;

export const CarrosselWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 30px;

  .carousel .slide img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 320px) {
    max-width: 260px;
  }

  @media (max-width: 280px) {
    max-width: 240px;
  }
`;