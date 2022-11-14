import cadastroImage from "../../assets/login_cadastro.png";
import Botao from "../../components/botao/Botao";
import Input from "../../components/Input/Input";
import { User } from "../../models/User";
import { CadastroService } from "../../services/CadastroService";
import "./Cadastro.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    
    let service: CadastroService = new CadastroService();

    async function onsubmithandler(event: React.FormEvent) {
        event.preventDefault();
        let user: User = {
            nome: nome,
            email: email,
            senha: senha,
        };
        try{
            await service.postUser(user);
            navigate("/login");
        }catch{
            // throw exception
        }
    }

    return (
        <main className="cadastro-container">
            <img src={cadastroImage}></img>
            <form
                className="form-container"
                onSubmit={(event) => onsubmithandler(event)}
            >
                <h2>Cadastro</h2>
                <Input
                    placeholder="nome"
                    type="text"
                    onChange={setNome}
                ></Input>
                <Input
                    placeholder="email"
                    type="email"
                    onChange={setEmail}
                ></Input>
                <Input
                    placeholder="senha"
                    type="password"
                    onChange={setSenha}
                ></Input>
                <Input
                    placeholder="confirmação da senha"
                    type="password"
                    onChange={setConfirmarSenha}
                ></Input>
                {/* <Botao text="cadastrar" enviar={() => onsubmit()} parametros={[]}></Botao> */}
                <button type="submit">cadastra</button>
            </form>
        </main>
    );
};

export default Cadastro;
