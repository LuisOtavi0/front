import { Container, Formulario, Input, Button} from "./Styles";
import {useForm} from "react-hook-form";
import { useCreateUser } from "../../hooks/user";
    //Hooks
export default function Home(){
    const {handleSubmit, register, formState: {errors},} = useForm({});
    const {mutate: postUser, isPending} = useCreateUser({});
    //onSubmit
    function response(data) {
        postUser(data);
    };

    return(
        <Container>
            <Formulario onSubmit={handleSubmit(response)}>
                <Input {...register("name")} placeholder="nome" autoComplete="name"/>
                <Input {...register("type")} placeholder="tipo"/>
                <Input {...register("role")} placeholder="cargo"/>

                <Button>enviar</Button>
            </Formulario>
        </Container>
    );
}