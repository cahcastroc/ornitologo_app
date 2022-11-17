import "./AnotacoesUsuario.css"
import React from 'react'
import binoculo from "../../assets/binoculo.png";
import Input from "../../components/Input/Input";
import IAve from "../../interfaces/IAve";
import { useState, useEffect } from "react";
import { AnotacaoService } from "./AnotacaoService";
import BotaoSalvar from "../../components/botaoSalvar/BotaoSalvar";
import { Anotacao } from "../../models/Anotacao";
import { ILocalizacao } from "../../interfaces/ILocalizacao";
import { Localizacao } from "../../models/Localizacao";

const NovaAnotacao = () => {
  let user = JSON.parse(localStorage.getItem("token") || "{}");
  let [descricao, setDescricao] = useState("");
  let [cor, setCor] = useState("");
  let [tamanho, setTamanho] = useState("");
  let [latitude, setLatitude] = useState("");
  let [longitude, setLongitude] = useState("");
  let [comentario, setComentario] = useState("");
  let [ave, setAve] = useState<IAve>({id:1, descricao: "Um passaro", nomeCientifico: "Barro de Joao", nomePopular: "João de Barro"});
  let options: IAve[] = [];
  const service: AnotacaoService = new AnotacaoService();

  useEffect(()=>{
  })

  function onSubmitHandler(event: React.FormEvent){
      event.preventDefault();
      let localizacao: ILocalizacao = new Localizacao({
        lat: latitude,
        longt: longitude,
        descricao: "amogus"
      });

      let body: Anotacao = new Anotacao({
        ave: ave,
        comentario: comentario,
        corPredominante: cor,
        localizacao: localizacao,
        tamanho: tamanho,
        usuarioId: user.id,
        id: 0,
        dataHorarioDoAvistamento: "",
        criadoEm: ""
      });
      service.create(body)
  }
   
  return (
    <div className="nova-anotacao-container" >
      <img src={binoculo}/>
      <h2>Nova anotação</h2>
      <form  className="nova-anotacao-form" onSubmit={(event) => onSubmitHandler(event)}>
        <div className="inputs-container">
          <select name="" id="">
            <option value="id">Joao de Barro</option>
          </select>
          <Input placeholder="cor" type="text" onChange={setCor}></Input>
          <Input placeholder="tamanho" type="text" onChange={setTamanho}></Input>
          <Input placeholder="latitude" type="text" onChange={setLatitude}></Input>
          <Input placeholder="longitude" type="text" onChange={setLongitude}></Input>
        </div>
        <div className="text-area-container">
          <label className="descricao">Descrição: </label>
          <textarea
            className="texto-area"
            value={comentario}
            onChange={(event) => setComentario(event.target.value)}/>
        </div>
        <BotaoSalvar />
      </form>
    </div>
  )
}

export default NovaAnotacao