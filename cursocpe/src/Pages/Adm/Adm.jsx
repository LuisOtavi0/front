import useAuthStore from "../../stores/auth";
import { Navigate } from "react-router-dom";

export default function Adm() {
  const usuario = useAuthStore((state) => state.usuario);

  if (!usuario?.isAdmin) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h1>Área de Administração</h1>
    </div>
  );
}
