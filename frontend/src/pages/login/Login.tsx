import "./Login.css";
import loginImage from "../../assets/login_cadastro.png";
import Input from "../../components/input/Input";
import Botao from "../../components/botao/Botao";
import { useState } from "react";
import { LoginService } from "./LoginService";
import { Link, useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces/IUser";

const Login = () => {
    let service: LoginService = new LoginService();
    let navigate = useNavigate();

    async function onsubmithandler(event: React.FormEvent) {
        event.preventDefault();
        let user: IUser = {
            email: email,
            senha: senha,
        };

        try {
            await service.login(user);
            navigate("/minhasanotacoes");
        } catch {
            // throw exception;
        }
    }

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <main className="login-container">
            <img src={loginImage} alt="imagem do login"></img>
            <form className="form-container">
                <h2>Login</h2>
                <Input placeholder="email" type="text" onChange={setEmail} />
                <Input
                    placeholder="senha"
                    type="password"
                    onChange={setSenha}
                />
                <Link to="/cadastro">
                    <a href="">primeira vez? faça seu cadastro!</a>
                </Link>
                <Botao text="login" enviar={onsubmithandler} parametros={[]} />
            </form>
        </main>
    );
};

export default Login;
