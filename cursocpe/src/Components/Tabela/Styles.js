import styled from 'styled-components';
import { Button, Modal } from 'antd';

export const TableWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #000;
  border-radius: 12px;
  overflow-x: auto;

  .ant-table {
    background-color: transparent;
  }
  .ant-table-thead > tr > th {
    background-color: #FFD700;
    color: black;
    text-align: center;
    font-weight: bold;
  }
  .ant-table-tbody > tr > td {
    background-color: #1e1e1e;
    color: white;
    text-align: center;
    border-bottom: 1px solid #333;
  }
  .ant-table-cell {
    padding: 12px 8px;
  }

  @media (max-width: 320px) {
    .ant-table-cell {
      font-size: 12px;
      padding: 6px 4px;
    }
  }
`;

export const BotaoLixo = styled(Button)`
  color: white;
  background-color: transparent;
  border: none;
  &:hover {
    color: red;
  }
`;

export const BotaoLogin = styled.button`
  top: 8px;
  right: 8px;
  background-color: transparent;
  color: #FFD700;
  border: 1px solid #FFD700;
  border-radius: 6px;
  padding: 6px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #FFD700;
    color: black;
  }

  @media (max-width: 280px) {
    font-size: 12px;
    padding: 4px 8px;
  }
`;

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 16px;
    padding: 20px;
    text-align: center;
  }

  .ant-modal-close {
    top: 12px;
    right: 12px;
  }

  h2 {
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 20px;
    color: #000;
  }

  p {
    font-size: 14px;
    color: #555;
    margin-bottom: 20px;
  }

  @media (max-width: 280px) {
    .ant-modal-content {
      padding: 16px;
    }

    h2 {
      font-size: 16px;
    }

    p {
      font-size: 12px;
    }
  }
`;

export const ModalBotaoLogin = styled.button`
  background-color: transparent;
  border: 2px solid #FFA500;
  color: #FFA500;
  padding: 8px 20px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #FFA500;
    color: white;
  }

  @media (max-width: 280px) {
    padding: 6px 16px;
    font-size: 12px;
  }
`;