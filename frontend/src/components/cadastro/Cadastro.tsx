import Botao from "../botao/Botao";
import loginImage from "../../assets/login_cadastro.png"
import Input from "../Input/Input";
import "./Cadastro.css";

const Cadastro = () => {
  function onsubmit(){

  }
  
  return (
    <main className="login-container">
      <img src={loginImage}></img>
      <form className="form-container">
        <h2>Cadastro</h2>
        <Input placeholder="nome" type="text"></Input>
        <Input placeholder="email" type="email"></Input>
        <Input placeholder="senha" type="password"></Input>
        <Input placeholder="confirmação da senha" type="password"></Input>
        <Botao text="login" enviar={() => onsubmit()} parametros={[]}></Botao>
      </form>
    </main>
  );
};

export default Cadastro;
