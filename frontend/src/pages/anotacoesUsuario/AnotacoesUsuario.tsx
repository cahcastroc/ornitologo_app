import "./AnotacoesUsuario.css";
import React, { useState, useEffect } from "react";
import binoculo from "../../assets/binoculo.png";
import Input from "../../components/Input/Input";
import IAve from "../../interfaces/IAve";
import BotaoSalvar from "../../components/botaoSalvar/BotaoSalvar";
import { AnotacaoService } from "./AnotacaoService";
import { Anotacao } from "../../models/Anotacao";
import { ILocalizacao } from "../../interfaces/ILocalizacao";
import { Localizacao } from "../../models/Localizacao";
import { useNavigate } from "react-router-dom";
import { CatalogoService } from "../catalogo/CatalogoService";
import IInput from "../../interfaces/IInput";

const NovaAnotacao = () => {
    let user = JSON.parse(localStorage.getItem("token") || "{}");
    let [descricao, setDescricao] = useState<IInput>({ value: "" });
    // obrigatorio
    let [cor, setCor] = useState<IInput>({ value: "" });
    // obrigatorio
    let [tamanho, setTamanho] = useState<IInput>({ value: "" });
    let [latitude, setLatitude] = useState<IInput>({ value: "" });
    let [longitude, setLongitude] = useState<IInput>({ value: "" });
    // obrigatorio
    let [comentario, setComentario] = useState<IInput>({
        value: "",
        invalid: false,
    });
    let [options, setOptions] = useState<IAve[]>([]);
    // obrigatorio
    let [aveId, setAveId] = useState<IInput>({ value: 0, invalid: false });

    const navigate = useNavigate();
    const service: AnotacaoService = new AnotacaoService();
    const optionsService: CatalogoService = new CatalogoService();

    useEffect(() => {
        optionsService.getAves().then((arr) => {
            arr.push({ id: 0, nomePopular: "selecione uma ave" });
            setOptions(arr);
        });
    }, []);

    const validarCadastro = () => {
        let valid = true;
        if (aveId.value === 0) {
            valid = false;
            setAveId({ value: aveId.value, invalid: true });
        }
        if (comentario.value === "") {
            valid = false;
            setComentario({ value: comentario.value, invalid: true });
        }
        if (cor.value === "") {
            valid = false;
            setCor({ value: cor.value, invalid: true });
        }
        if (tamanho.value === "") {
            valid = false;
            setTamanho({ value: tamanho.value, invalid: true });
        }
        return valid;
    };

    function onSubmitHandler(event: React.FormEvent) {
        event.preventDefault();
        let localizacao: ILocalizacao = new Localizacao({
            lat: latitude.value,
            longt: longitude.value,
            descricao: descricao.value,
        });

        let body: Anotacao = new Anotacao({
            ave: {
                id: aveId.value,
            },
            comentario: comentario.value,
            corPredominante: cor.value,
            localizacao: localizacao,
            tamanho: tamanho.value,
            usuarioId: user.id,
            id: 0,
            dataHorarioDoAvistamento: "",
            criadoEm: "",
        });
        if (validarCadastro()) {
            service
                .create(body)
                .then(() => {
                    navigate("/minhasanotacoes");
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    function handleSelectChange(e: any) {
        let valor = Number.parseInt(e.target.value);
        setAveId({ value: valor });
    }

    function handleTextAreaChange(e: any) {
        setComentario({ value: e.target.value });
    }

    return (
        <div className="nova-anotacao-container">
            <img src={binoculo} />
            <h2>Nova anotação</h2>
            <form
                className="nova-anotacao-form"
                onSubmit={(event) => onSubmitHandler(event)}
            >
                <div className="inputs-container">
                    <select
                        value={aveId.value}
                        onChange={handleSelectChange}
                        className={aveId.invalid ? "required" : ""}
                    >
                        {options.map((item) => {
                            return (
                                <option key={item.id} value={item.id}>
                                    {item.nomePopular}
                                </option>
                            );
                        })}
                    </select>
                    <Input
                        required={true}
                        invalid={cor.invalid}
                        placeholder="cor"
                        type="text"
                        onChange={setCor}
                    ></Input>
                    <Input
                        required={true}
                        invalid={tamanho.invalid}
                        placeholder="tamanho"
                        type="text"
                        onChange={setTamanho}
                    ></Input>
                    <Input
                        placeholder="latitude"
                        type="text"
                        onChange={setLatitude}
                    ></Input>
                    <Input
                        placeholder="longitude"
                        type="text"
                        onChange={setLongitude}
                    ></Input>
                    <Input
                        placeholder="Descrição local"
                        type="text"
                        onChange={setDescricao}
                    ></Input>
                </div>
                <div className="text-area-container">
                    <label className="descricao">Comentario: </label>
                    <textarea
                        value={comentario.value}
                        className={
                            comentario.invalid
                                ? "texto-area" + " required"
                                : "texto-area"
                        }
                        onChange={handleTextAreaChange}
                    />
                </div>
                <BotaoSalvar />
            </form>
        </div>
    );
};

export default NovaAnotacao;
