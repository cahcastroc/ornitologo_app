import "./Login.css";
import loginImage from "../../assets/login_cadastro.png";
import Input from "../../components/Input/Input";
import Botao from "../../components/botao/Botao";
import { useState } from "react";
import { LoginService } from "./LoginService";
import { Link, useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces/User";
import IInput from "../../interfaces/IInput";
import { toast } from "react-toastify";

const Login = () => {
    let service: LoginService = new LoginService();
    let navigate = useNavigate();
    const [email, setEmail] = useState<IInput>({ value: "", invalid: false });
    const [senha, setSenha] = useState<IInput>({ value: "", invalid: false });

    const validarLogin = (): boolean => {
        let valido = true;
        if (email.value === "") {
            setEmail({ value: email.value, invalid: true });
            toast.error("Email não pode ser vazio");
            valido = false;
        }
        if (senha.value === "") {
            setSenha({ value: senha.value, invalid: true });
            toast.error("Senha não pode ser vazia");
            valido = false;
        }
        return valido;
    };

    async function onsubmithandler(event: React.FormEvent) {
        event.preventDefault();
        let user: IUser = {
            email: email.value,
            senha: senha.value,
        };

        try {
            if (validarLogin()) {
                await service.login(user);
                toast.success("Login realizado com sucesso!");
                navigate("/minhasanotacoes");
            }
        } catch {
            toast.error("Email ou senha inválidos");
        }
    }

    return (
        <main className="login-container">
            <img src={loginImage} alt="imagem do login"></img>
            <form className="form-container">
                <h2>Login</h2>
                <Input
                    required={true}
                    invalid={email.invalid}
                    placeholder="email"
                    type="text"
                    onChange={setEmail}
                />
                <Input
                    required={true}
                    invalid={senha.invalid}
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
