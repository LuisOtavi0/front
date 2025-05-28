import {
    RouterProvider,
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    Navigate,
    Outlet
} from "react-router-dom";

import { Login, Cadastro, Home, Perfil} from "./Pages";
import { AppLayout } from "./layouts";
import useAuthStore from "./stores/auth";

function RotasPrivadas() {
    const token = useAuthStore((state) => state.token);

    if (token) return <Outlet />;

    return <Navigate to="/login" replace />
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<AppLayout />}>
                <Route element={<RotasPrivadas />}>
                    <Route path="perfil" element={<Perfil/>}/>
                    <Route index element={<Home/>}/>
                </Route>
                <Route path="login" element={<Login/>}/>
                <Route path="Cadastro" element={<Cadastro/>}/>
            </Route>
        </Route>
    )
)

export default function Routes() {
    return <RouterProvider router={router} />
}