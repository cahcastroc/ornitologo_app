import cadastroImage from "../../assets/login_cadastro.png";
import Botao from "../../components/botao/Botao";
import Input from "../../components/Input/Input";
import { CadastroService } from "./CadastroService";
import "./Cadastro.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces/User";
import IInput from "../../interfaces/IInput";
import { toast } from "react-toastify";

const Cadastro = () => {
    const navigate = useNavigate();
    const [nome, setNome] = useState<IInput>({
        value: "",
        invalid: false,
    });
    const [email, setEmail] = useState<IInput>({
        value: "",
        invalid: false,
    });
    const [senha, setSenha] = useState<IInput>({
        value: "",
        invalid: false,
    });
    const [confirmarSenha, setConfirmarSenha] = useState<IInput>({
        value: "",
        invalid: false,
    });

    let service: CadastroService = new CadastroService();

    const validarCadastro = (): boolean => {
        let valido = true;

        if (nome.value === "") {
            setNome({ value: nome.value, invalid: true });
            toast.error("nome não pode ser vazio");
            valido = false;
        }
        if (email.value === "") {
            setEmail({ value: email.value, invalid: true });
            toast.error("email não pode ser vazio");
            valido = false;
        }
        if (senha.value === "") {
            setSenha({ value: senha.value, invalid: true });
            toast.error("senha não pode ser vazia");
            valido = false;
        }
        if (confirmarSenha.value === "") {
            setConfirmarSenha({
                value: confirmarSenha.value,
                invalid: true,
            });
            toast.error("confirmação de senha não pode ser vazia");
            valido = false;
        }
        if (senha.value !== confirmarSenha.value) {
            setSenha({ value: senha.value, invalid: true });
            setConfirmarSenha({
                value: confirmarSenha.value,
                invalid: true,
            });
            toast.error("senhas não conferem");
            valido = false;
        }
        return valido;
    };

    async function onsubmithandler(event: React.FormEvent) {
        event.preventDefault();

        let user: IUser = {
            nome: nome.value,
            email: email.value,
            senha: senha.value,
        };
        try {
            if (validarCadastro()) {
                await service.postUser(user);
                toast.success("Cadastro realizado com sucesso");
                navigate("/login");
            }
        } catch (err: any) {
            toast.error(err.message);
        }
    }

    return (
        <main className="cadastro-container">
            <img src={cadastroImage} alt="imagem de cadastro"></img>
            <form className="form-container">
                <h2>Cadastro</h2>
                <Input
                    required={true}
                    invalid={nome.invalid}
                    placeholder="nome"
                    type="text"
                    onChange={setNome}
                />
                <Input
                    required={true}
                    invalid={email.invalid}
                    placeholder="email"
                    type="email"
                    onChange={setEmail}
                />
                <Input
                    required={true}
                    invalid={senha.invalid}
                    placeholder="senha"
                    type="password"
                    onChange={setSenha}
                />
                <Input
                    required={true}
                    invalid={confirmarSenha.invalid}
                    placeholder="confirmação da senha"
                    type="password"
                    onChange={setConfirmarSenha}
                />
                <Botao
                    text="cadastrar"
                    enviar={onsubmithandler}
                    parametros={[]}
                ></Botao>
            </form>
        </main>
    );
};

export default Cadastro;
