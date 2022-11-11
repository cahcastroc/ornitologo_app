import cadastroImage from "../../assets/login_cadastro.png"
import Botao from "../../components/botao/Botao";
import Input from "../../components/Input/Input";
import { User } from "../../models/User";
import { CadastroService } from "../../services/CadastroService";
import "./Cadastro.css";

const Cadastro = () => {
  let service: CadastroService = new CadastroService();

  function onsubmit(){
    let user: User = {
      nome: "amogus",
      email: "sugoma",
      senha: "sus"
    }
    service.postUser(user);
  }
  
  return (
    <main className="cadastro-container">
      <img src={cadastroImage}></img>
      <form className="form-container">
        <h2>Cadastro</h2>
        <Input placeholder="nome" type="text"></Input>
        <Input placeholder="email" type="email"></Input>
        <Input placeholder="senha" type="password"></Input>
        <Input placeholder="confirmação da senha" type="password"></Input>
        <Botao text="cadastrar" enviar={() => onsubmit()} parametros={[]}></Botao>
      </form>
    </main>
  );
};

export default Cadastro;
