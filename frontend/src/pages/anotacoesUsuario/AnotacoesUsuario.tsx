import "./AnotacoesUsuario.css";
import React, {useState, useEffect} from "react";
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

const NovaAnotacao = () => {
    let user = JSON.parse(localStorage.getItem("token") || "{}");
    let [descricao, setDescricao] = useState("");
    let [cor, setCor] = useState("");
    let [tamanho, setTamanho] = useState("");
    let [latitude, setLatitude] = useState("");
    let [longitude, setLongitude] = useState("");
    let [comentario, setComentario] = useState("");
    let [options, setOptions] = useState<IAve[]>([]);
    let [aveId, setAveId] = useState<number>(0);

    const navigate = useNavigate();
    const service: AnotacaoService = new AnotacaoService();
    const optionsService: CatalogoService = new CatalogoService();

    useEffect(() => {
        optionsService.getAves().then((arr) => {
            arr.push({ id: 0, nomePopular: "selecione uma ave"});
            setOptions(arr);
        });
    }, []);

    function onSubmitHandler(event: React.FormEvent) {
        event.preventDefault();
        let localizacao: ILocalizacao = new Localizacao({
            lat: latitude,
            longt: longitude,
            descricao: "",
        });

    let body: Anotacao = new Anotacao({
      ave: {
        id: aveId
      },
      comentario: comentario,
      corPredominante: cor,
      localizacao: localizacao,
      tamanho: tamanho,
      usuarioId: user.id,
      id: 0,
      dataHorarioDoAvistamento: "",
      criadoEm: ""
    });
    service.create(body).then(()=>{
      navigate("/minhasanotacoes");
      window.location.reload();
    });
  }

    function handleSelectChange(e: any) {
        setAveId(e.target.value);
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
                    <select value={0} onChange={handleSelectChange}>
                        {options.map((item) => {
                            return (
                                <option key={item.id} value={item.id}>
                                    {item.nomePopular}
                                </option>
                            );
                        })}
                    </select>
                    <Input
                        placeholder="cor"
                        type="text"
                        onChange={setCor}
                    ></Input>
                    <Input
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
                </div>
                <div className="text-area-container">
                    <label className="descricao">Descrição: </label>
                    <textarea
                        className="texto-area"
                        value={comentario}
                        onChange={(event) => setComentario(event.target.value)}
                    />
                </div>
                <BotaoSalvar />
            </form>
        </div>
    );
};

export default NovaAnotacao;
