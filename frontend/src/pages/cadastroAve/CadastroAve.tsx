import React from "react";
import "./CadastroAve.css";
import Input from "../../components/Input/Input";
import tucano from "../../assets/tucano.png";
import BotaoSalvar from "../../components/botaoSalvar/BotaoSalvar";
import { CadastroAveService } from "../../services/CadastroAveServices";
import { IAve } from "../../interfaces/Ave";
import { useNavigate } from "react-router-dom";
import IInput from "../../interfaces/IInput";
import { toast } from "react-toastify";

const CadastroAve = () => {
    const [nomePopular, setNomePopular] = React.useState<IInput>({
        value: "",
        invalid: false,
    });
    const [nomeCientifico, setNomeCientifico] = React.useState<IInput>({
        value: "",
        invalid: false,
    });
    const [descricao, setDescricao] = React.useState<IInput>({
        value: "",
        invalid: false,
    });

    let service: CadastroAveService = new CadastroAveService();
    let navigate = useNavigate();

    const validarCadastro = () => {
        let valido = true;
        if (nomePopular.value === "") {
            setNomePopular({ value: "", invalid: true });
            toast.error("Nome popular não pode ser vazio");
            valido = false;
        }
        if (nomeCientifico.value === "") {
            setNomeCientifico({ value: "", invalid: true });
            toast.error("Nome científico não pode ser vazio");
            valido = false;
        }
        if (descricao.value === "") {
            setDescricao({ value: "", invalid: true });
            toast.error("Descrição não pode ser vazia");
            valido = false;
        }
        return valido;
    };

    const handleEnviar = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let ave: IAve = {
            nomePopular: nomePopular.value,
            nomeCientifico: nomeCientifico.value,
            descricao: descricao.value,
        };
        try {
            if (validarCadastro()) {
                service.cadastrarAve(ave);
                toast.success("Ave cadastrada com sucesso!");
                navigate("/catalogo");
            }
        } catch (error: any) {
            toast.error(error.message);
        }
    };

    function handleTextAreaChange(e: any) {
        setDescricao({ value: e.target.value });
    }

    return (
        <>
            <div className="home-cadastro-ave">
                <header className="header-home-cadastro-ave">
                    <img src={tucano} alt="tucano" className="tucano" />
                    <h1>Cadastro de Aves</h1>
                </header>
                <form onSubmit={handleEnviar}>
                    <div>
                        <div>
                            <label className="label-input">Nome:</label>
                            <Input
                                required={true}
                                invalid={nomePopular.invalid}
                                type="text"
                                placeholder=""
                                onChange={setNomePopular}
                            />
                        </div>
                        <div>
                            <label className="label-input">
                                Nome Científico:{" "}
                            </label>
                            <Input
                                required={true}
                                invalid={nomeCientifico.invalid}
                                type="text"
                                placeholder=""
                                onChange={setNomeCientifico}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="text-area-container">
                            <label className="descricao">Descrição: </label>
                            <textarea
                                className={
                                    descricao.invalid
                                        ? "texto-area" + " required"
                                        : "texto-area"
                                }
                                value={descricao.value}
                                onChange={handleTextAreaChange}
                            />
                        </div>
                    </div>
                    <BotaoSalvar />
                </form>
            </div>
        </>
    );
};

export default CadastroAve;
