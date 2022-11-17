import cadastroImage from "../../assets/login_cadastro.png";
import Botao from "../../components/botao/Botao";
import Input from "../../components/input/Input";
import { CadastroService } from "./CadastroService";
import "./Cadastro.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces/User";

const Cadastro = () => {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    let service: CadastroService = new CadastroService();

    async function onsubmithandler(event: React.FormEvent) {
        event.preventDefault();
        let user: IUser = {
            nome: nome,
            email: email,
            senha: senha,
        };
        try{
            await service.postUser(user);
            navigate("/login");
        }catch{
            // throw exception;
        }
    }

    return (
        <main className="cadastro-container">
            <img src={cadastroImage} alt="imagem de cadastro"></img>
            <form className="form-container" >
                <h2>Cadastro</h2>
                <Input placeholder="nome" type="text" onChange={setNome} />
                <Input placeholder="email" type="email" onChange={setEmail} />
                <Input placeholder="senha" type="password" onChange={setSenha}/>
                <Input placeholder="confirmação da senha" type="password" onChange={setConfirmarSenha}/>
                <Botao text="cadastrar" enviar={onsubmithandler} parametros={[]}></Botao>
            </form>
        </main>
    );
};

export default Cadastro;
