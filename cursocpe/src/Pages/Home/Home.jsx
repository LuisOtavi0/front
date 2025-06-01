import { Container, SpinnerAmarelo} from "./Styles";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imagem1 from "../../assets/img1.png";
import imagem2 from "../../assets/img2.png";
import imagem3 from "../../assets/img3.png";
import imagem4 from "../../assets/img4.png";


import {useForm} from "react-hook-form";
import { useCreateUser } from "../../hooks/user";
import { useEffect, useState } from "react";
import api from "../../services/api/api";
import {Usuario} from "../../Components";


export default function Home() {
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

    return (
        <Container>
            {/* Carrossel de imagens */}
            <div style={{ width: "80%", maxWidth: "600px", marginBottom: "30px" }}>
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    autoPlay
                    interval={3000}
                >
                    <div>
                        <img src={imagem1} alt="Imagem 1" />
                    </div>
                    <div>
                        <img src={imagem2} alt="Imagem 2" />
                    </div>
                    <div>
                        <img src={imagem3} alt="Imagem 3" />
                    </div>
                    <div>
                        <img src={imagem4} alt="Imagem 4" />
                    </div>
                </Carousel>
            </div>
        </Container>
    );
}