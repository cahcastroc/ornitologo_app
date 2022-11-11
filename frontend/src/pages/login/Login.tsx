import "./Login.css";
import loginImage from "../../assets/login_cadastro.png";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import Botao from "../../components/botao/Botao";
import { useState } from "react";

const Login = () => {
    function onsubmit() {}

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <main className="login-container">
            <img src={loginImage}></img>
            <form className="form-container">
                <h2>Login</h2>
                <Input
                    placeholder="email"
                    type="text"
                    onChange={setEmail}
                ></Input>
                <Input
                    placeholder="email"
                    type="email"
                    onChange={setEmail}
                ></Input>
                <Link to="/cadastro">
                    <a href="">primeira vez? faça seu cadastro!</a>
                </Link>
                <Botao
                    text="login"
                    enviar={() => onsubmit()}
                    parametros={[]}
                ></Botao>
            </form>
        </main>
    );
};

export default Login;
