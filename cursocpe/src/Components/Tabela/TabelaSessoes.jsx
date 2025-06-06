import React, {useState} from 'react';
import {Table, Modal, Button} from 'antd';
import {TableWrapper, BotaoLixo, BotaoLogin, StyledModal, ModalBotaoLogin } from './styles';
import {DeleteOutlined } from '@ant-design/icons';


const sessoes = [
  { id: '1', nome: 'Luís', inicio: '11-04-2025' },
  { id: '2', nome: 'José', inicio: '10-04-2025' },
  { id: '3', nome: 'Pedro', inicio: '07-05-2025' }
];

export default function TabelaSessoes() {
  const [modalVisible, setModalVisible] = useState(false);

  const columns = [
    {
      title: 'MEMBRO', dataIndex: 'nome', key: 'nome',
      render: text => <span style={{ color: '#fff' }}>{text}</span>,
    },
    {
      title: 'CHEGADA', dataIndex: 'inicio', key: 'inicio',
      render: text => (
        <span style={{
          backgroundColor: '#000',
          color: '#FFD700',
          padding: '4px 10px',
          borderRadius: '8px',
          display: 'inline-block'
        }}>
          {text}
        </span>
      ),
    },
    {
      title: 'TEMPO',
      key: 'tempo',
      render: () => (
        <span style={{
          backgroundColor: '#000',
          color: '#FFD700',
          padding: '4px 10px',
          borderRadius: '8px',
          display: 'inline-block'
        }}>
          01:34
        </span>
      ),
    },
    {
      title: '',
      key: 'delete',
      render: () => (
        <BotaoLixo icon={<DeleteOutlined />} />
      ),
    },
  ];

  return (
    <TableWrapper>
      <BotaoLogin onClick={() => setModalVisible(true)}>
        Fazer login
      </BotaoLogin>

      <Table
        columns={columns} dataSource={sessoes} pagination={false}
        rowKey="id" scroll={{ x: true }}
      />

      <StyledModal
        open={modalVisible} footer={null} onCancel={() => setModalVisible(false)}
        closable centered
      >
        <h2>Você deseja mesmo<br />fazer login?</h2>
        <p>Tem certeza que você deseja fazer esse login?</p>
        <ModalBotaoLogin>LOGIN</ModalBotaoLogin>
      </StyledModal>
    </TableWrapper>
  );
}