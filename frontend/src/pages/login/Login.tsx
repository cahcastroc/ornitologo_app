import "./Login.css";
import loginImage from "../../assets/login_cadastro.png";
import Input from "../../components/Input/Input";
import Botao from "../../components/botao/Botao";
import { useState } from "react";
import { LoginService } from "./LoginService";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces/User";

const Login = () => {
    let service: LoginService = new LoginService();
    let navigate = useNavigate();

    async function onsubmithandler(event: React.FormEvent) {
        event.preventDefault();
        let user: IUser ={
            email: email,
            senha: senha
        }

        try{
            await service.login(user);
            console.log(localStorage.getItem("token"));
            navigate("/catalogo");
        }catch{

        }
    }

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <main className="login-container">
            <img src={loginImage}></img>
            <form className="form-container" onSubmit={(event) =>{onsubmithandler(event)}}>
                <h2>Login</h2>
                <Input placeholder="email" type="text" onChange={setEmail}/>
                <Input placeholder="senha" type="password" onChange={setSenha}/>
                {/* <Botao text="login" enviar={(event) => onsubmithandler(event)} parametros={[]}/> */}
                <button type="submit">login</button>
            </form>
        </main>
    );
};

export default Login;
