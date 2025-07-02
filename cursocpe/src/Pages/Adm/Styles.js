import styled from "styled-components";
import { Input, Table } from "antd";

export const Container = styled.div`
  padding: 2rem;
  background-color: black;
  color: white;
  min-height: 100vh;
`;

export const Title = styled.h1`
  text-align: center;
  color: yellow;
  font-size: 2rem;
`;

export const SearchWrapper = styled.div`
  margin: 1.5rem auto;
  max-width: 600px;
  background: white;
  display: flex;
  align-items: center;
  border-radius: 999px;
  padding: 0.5rem 1rem;
`;

export const StyledInput = styled(Input)`
  border: none;
  flex: 1;
  font-weight: bold;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const ActionButton = styled.button`
  border: none;
  background: transparent;
  color: white;
  font-size: 18px;
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    color: yellow;
  }
`;

export const StyledTable = styled(Table)`
  background-color: black;

  .ant-table {
    background-color: black;
    color: white;
  }

  .ant-table-thead > tr > th {
    background-color: #1a1a1a;
    color: white;
    border-color: #333;
  }

  .ant-table-tbody > tr > td {
    background-color: #000;
    color: white;
    border-color: #333;
  }

  .ant-table-tbody > tr:hover > td {
    background-color: #111;
  }

  .ant-select-selector {
    background-color: #222 !important;
    color: white !important;
    border-color: #444 !important;
  }

  .ant-select-arrow {
    color: white;
  }
`;
