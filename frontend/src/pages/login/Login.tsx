import "./Login.css";
import loginImage from "../../assets/login_cadastro.png";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import Botao from "../../components/botao/Botao";
import { useState } from "react";
import { User } from "../../models/User";
import { LoginService } from "../../services/LoginService";

const Login = () => {
    let service: LoginService = new LoginService();

    async function onsubmithandler(event: React.FormEvent) {
        event.preventDefault();
        let user: User ={
            email: email,
            senha: senha
        }

        try{
            await service.login(user);
            console.log(localStorage.getItem("token"))
        }catch{

        }
    }

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <main className="login-container" onSubmit={(event) => onsubmithandler(event)}>
            <img src={loginImage}></img>
            <form className="form-container">
                <h2>Login</h2>
                <Input placeholder="email" type="text" onChange={setEmail}/>
                <Input placeholder="senha" type="password" onChange={setSenha}/>
                {/* <Botao text="login" enviar={() => onsubmit()} parametros={[]}/> */}
                <button type="submit">login</button>
            </form>
        </main>
    );
};

export default Login;
