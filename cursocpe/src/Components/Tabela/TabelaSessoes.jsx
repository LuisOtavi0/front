import React from 'react';
import {Table} from 'antd';
import {TableWrapper, BotaoLixo } from './styles';
import {DeleteOutlined } from '@ant-design/icons';


const sessoes = [
  { id: '1', nome: 'Luís', inicio: '11-04-2025' },
  { id: '2', nome: 'José', inicio: '10-04-2025' },
  { id: '3', nome: 'Pedro', inicio: '07-05-2025' }
];

const columns = [
  {
    title: 'MEMBRO',
    dataIndex: 'nome',
    key: 'nome',
    render: text => <span style={{ color: '#fff' }}>{text}</span>,
  },
  {
    title: 'CHEGADA',
    dataIndex: 'inicio',
    key: 'inicio',
    render: text => (
      <span style={{ backgroundColor: '#000', color: '#FFD700', padding: '4px 8px', borderRadius: '6px' }}>
        {text}
      </span>
    ),
  },
  {
    title: 'AÇÃO',
    key: 'action',
    render: (_, record) => (
      <BotaoLixo icon={<DeleteOutlined />} />
    ),
  },
];

export default function TabelaSessoes() {
  return (
    <TableWrapper>
      <Table
        columns={columns}
        dataSource={sessoes}
        pagination={false}
        rowKey="id"
        scroll={{ x: true }}
      />
    </TableWrapper>
  );
}