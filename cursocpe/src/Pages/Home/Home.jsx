import { Container, SpinnerAmarelo} from "./Styles";
import {useForm} from "react-hook-form";
import { useCreateUser } from "../../hooks/user";
import { useEffect, useState } from "react";
import api from "../../services/api/api";
import {Usuario} from "../../Components";

    //Hooks
export default function Home(){
    const [usuarios, setUsuarios] = useState([]);
    const [carregando, setCarregando] = useState(false);

    console.log(usuarios);

    const getUsuarios = async () => {
        try {
            setCarregando(true);
            const res = await api.get("/usuarios");
            setUsuarios(res.data);     

        } catch (erro) {
            console.error(erro);
            alert(erro.response.data.message);
        } finally {
            setCarregando(false);
        }
    };

    useEffect(() => {
        getUsuarios();
    }, []);

    const {handleSubmit, register, formState: {errors},} = useForm({});
    const {mutate: postUser, isPending} = useCreateUser({});

    if (carregando) return (
            <Container style={{display: 'flex', justifyContent: 'center',
            alignItems: 'center', height: '100vh'}}>
                <SpinnerAmarelo size="large" />
            </Container>
        );

    function response(data) {
        postUser(data);
    };

    return(
        <Container>
            {usuarios.map((usuario) => (<Usuario usuario={usuario} />))}
        </Container>
    );
}