import "./Login.css";
import loginImage from "../../assets/login_cadastro.png"
import Input from "../Input/Input";
import Botao from "../botao/Botao";
import { Link } from "react-router-dom";

const Login = () => {
  function onsubmit(){

  }

  return (
    <main className="login-container">
      <img src={loginImage}></img>
      <form className="form-container">
        <h2>Login</h2>
        <Input placeholder="email" type="text"></Input>
        <Input placeholder="senha" type="password"></Input>
        <Link to="/cadastro">
          <a href="">primeira vez? faça seu cadastro!</a>
        </Link>
        <Botao text="login" enviar={() => onsubmit()} parametros={[]}></Botao>
      </form>
    </main>
  );
};

export default Login;
