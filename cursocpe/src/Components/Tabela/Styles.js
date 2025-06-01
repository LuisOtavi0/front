import styled from 'styled-components';
import { Button } from 'antd';

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