import BotaoPadrao from "../../Components/BotaoPadrao";
import { useNavigate } from "react-router-dom";

function Login(){

    const navigate = useNavigate();
    return(
        <div>
            Pagina LOGIN <BotaoPadrao onClick={()=> navigate("/")}>

            </BotaoPadrao>
        </div>
    )

}

export default Login;