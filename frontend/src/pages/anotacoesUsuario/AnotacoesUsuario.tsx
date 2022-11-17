import "./AnotacoesUsuario.css"
import React from 'react'
import binoculo from "../../assets/binoculo.png";
import Input from "../../components/Input/Input";
import IAve from "../../interfaces/IAve";
import { useState, useEffect } from "react";
import { AnotacaoService } from "./AnotacaoService";
import BotaoSalvar from "../../components/botaoSalvar/BotaoSalvar";

const NovaAnotacao = () => {
  let [descricao, setDescricao] = useState("");
  let [cor, setCor] = useState("");
  let [tamanho, setTamanho] = useState("");
  let [latitude, setLatitude] = useState("");
  let [logitude, setLongitude] = useState("");
  let options: IAve[] = [];
  const service: AnotacaoService = new AnotacaoService();

  useEffect(()=>{
  })
   
  return (
    <div className="nova-anotacao-container" >
      <img src={binoculo}/>
      <h2>Nova anotação</h2>
      <form>
        <select name="" id="">
          <option value="id">Joao de Barro</option>
        </select>
        <Input placeholder="cor" type="text" onChange={setCor}></Input>
        <Input placeholder="tamanho" type="text" onChange={setTamanho}></Input>
        <Input placeholder="latitude" type="text" onChange={setLatitude}></Input>
        <Input placeholder="longitude" type="text" onChange={setLongitude}></Input>
        <div>
          <label className="descricao">Descrição: </label>
          <textarea
            className="texto-area"
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}/>
        </div>
        <BotaoSalvar />
      </form>
    </div>
  )
}

export default NovaAnotacao