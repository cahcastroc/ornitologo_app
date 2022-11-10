import "./Login.css";
import loginImage from "../../assets/login_cadastro.png"
import Input from "../Input/Input";
import Botao from "../botao/Botao";

const Login = () => {
  function onsubmit(){

  }

  return (
    <main className="login-container">
      <img src={loginImage}></img>
      <form className="form-container">
        <h1>Login</h1>
        <Input placeholder="email" type="text"></Input>
        <Input placeholder="senha" type="password"></Input>
        <Botao text="login" enviar={() => onsubmit()} parametros={[]}></Botao>
      </form>
    </main>
  );
};

export default Login;
