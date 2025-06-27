import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Navigate,
  Outlet,
} from "react-router-dom";

import { Login, Cadastro, Home, Perfil, Adm } from "./Pages";
import { AppLayout } from "./layouts";
import useAuthStore from "./stores/auth";

function RotasPrivadas() {
  const token = useAuthStore((state) => state.token);

  if (token) return <Outlet />;

  return <Navigate to="/login" replace />;
}

function RotasAdmin() {
  const usuario = useAuthStore((state) => state.usuario);

  if (usuario?.isAdmin) return <Outlet />;

  return <Navigate to="/" replace />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route element={<RotasPrivadas />}>
        <Route index element={<Home />} />
        <Route path="perfil" element={<Perfil />} />

        {/* Protegendo rota admin */}
        <Route element={<RotasAdmin />}>
          <Route path="administrar-usuarios" element={<Adm />} />
        </Route>
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="Cadastro" element={<Cadastro />} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
