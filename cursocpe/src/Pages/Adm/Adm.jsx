// Adm.jsx
import React, { useEffect, useState } from "react";
import { Table, Input, Modal, Button, Select, message } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Container,
  Title,
  SearchWrapper,
  StyledInput,
  ActionButton,
  StyledTable,
} from "./Styles";
import api from "../../services/api/api";

const { Option } = Select;

export default function Adm() {
  const [usuarios, setUsuarios] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [modalExcluir, setModalExcluir] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);

  useEffect(() => {
    buscarUsuarios();
  }, []);

  const buscarUsuarios = async () => {
    try {
      const res = await api.get("/usuarios");
      setUsuarios(res.data);
    } catch (error) {
      message.error("Erro ao buscar usuários.");
    }
  };

  const abrirModalExcluir = (usuario) => {
    setUsuarioSelecionado(usuario);
    setModalExcluir(true);
  };

  const abrirModalEditar = (usuario) => {
    setUsuarioSelecionado({ ...usuario });
    setModalEditar(true);
  };

  const excluirUsuario = async () => {
    try {
      await api.delete(`/usuarios/${usuarioSelecionado._id}`);
      message.success("Usuário excluído com sucesso.");
      buscarUsuarios();
    } catch {
      message.error("Erro ao excluir usuário.");
    } finally {
      setModalExcluir(false);
    }
  };

  const salvarEdicao = async () => {
    try {
      await api.put(`/usuarios/${usuarioSelecionado._id}`, usuarioSelecionado);
      message.success("Usuário atualizado com sucesso.");
      buscarUsuarios();
    } catch {
      message.error("Erro ao atualizar usuário.");
    } finally {
      setModalEditar(false);
    }
  };

  const colunas = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
    },
    {
      title: "Cargo",
      dataIndex: "cargo",
      key: "cargo",
    },
    {
      title: "Usuário",
      key: "isAdmin",
      render: (_, record) => (
        <Select
          value={record.isAdmin ? "Administrador" : "Comum"}
          onChange={(value) => {
            const atualizado = {
              ...record,
              isAdmin: value === "Administrador",
            };
            setUsuarioSelecionado(atualizado);
            salvarEdicao();
          }}
          style={{ width: 150 }}
        >
          <Option value="Administrador">Administrador</Option>
          <Option value="Comum">Comum</Option>
        </Select>
      ),
    },
    {
      title: "Ações",
      key: "acoes",
      render: (_, record) => (
        <>
          <ActionButton onClick={() => abrirModalEditar(record)}>
            <EditOutlined />
          </ActionButton>
          <ActionButton onClick={() => abrirModalExcluir(record)}>
            <DeleteOutlined />
          </ActionButton>
        </>
      ),
    },
  ];

  const usuariosFiltrados = usuarios.filter((u) =>
    u.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <Container>
      <Title>GERENCIAR USUÁRIOS</Title>

      <SearchWrapper>
        <SearchOutlined style={{ fontSize: 18, marginRight: 8 }} />
        <StyledInput
          placeholder="Pesquisar usuários"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
      </SearchWrapper>

      <StyledTable
        dataSource={usuariosFiltrados}
        columns={colunas}
        rowKey="_id"
        pagination={false}
      />

      <Modal
        open={modalExcluir}
        onCancel={() => setModalExcluir(false)}
        onOk={excluirUsuario}
        okText="EXCLUIR"
        cancelText="Cancelar"
      >
        <h2>Excluir Usuário</h2>
        <p>Tem certeza que você deseja excluir esse usuário?</p>
      </Modal>

      <Modal
        open={modalEditar}
        onCancel={() => setModalEditar(false)}
        onOk={salvarEdicao}
        okText="SALVAR"
        cancelText="Cancelar"
      >
        <h2>Editar Usuário</h2>
        <Input
          style={{ marginBottom: 10 }}
          placeholder="Nome"
          value={usuarioSelecionado?.nome || ""}
          onChange={(e) =>
            setUsuarioSelecionado((prev) => ({ ...prev, nome: e.target.value }))
          }
        />
        <Input
          style={{ marginBottom: 10 }}
          placeholder="E-mail"
          value={usuarioSelecionado?.email || ""}
          onChange={(e) =>
            setUsuarioSelecionado((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
        />
        <Input
          style={{ marginBottom: 10 }}
          placeholder="Cargo"
          value={usuarioSelecionado?.cargo || ""}
          onChange={(e) =>
            setUsuarioSelecionado((prev) => ({
              ...prev,
              cargo: e.target.value,
            }))
          }
        />
        <Select
          style={{ width: "100%" }}
          value={usuarioSelecionado?.isAdmin ? "Administrador" : "Comum"}
          onChange={(value) =>
            setUsuarioSelecionado((prev) => ({
              ...prev,
              isAdmin: value === "Administrador",
            }))
          }
        >
          <Option value="Administrador">Administrador</Option>
          <Option value="Comum">Comum</Option>
        </Select>
      </Modal>
    </Container>
  );
}
