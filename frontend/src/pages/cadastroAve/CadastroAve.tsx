import React from "react";
import "./CadastroAve.css";
import Input from "../../components/Input/Input";
import tucano from "../../assets/tucano.png";
import BotaoSalvar from "../../components/botaoSalvar/BotaoSalvar";
import { CadastroAveService } from "../../services/CadastroAveServices";
import { IAve } from "../../interfaces/Ave";

const CadastroAve = () => {
  const [nomePopular, setNomePopular] = React.useState("");
  const [nomeCientifico, setNomeCientifico] = React.useState("");
  const [descricao, setDescricao] = React.useState("");
  
  let service: CadastroAveService = new CadastroAveService();

  const handleEnviar = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let ave: IAve = {
      nomePopular: nomePopular,
      nomeCientifico: nomeCientifico,
      descricao: descricao,
    };
    try {
      service.cadastrarAve(ave);
      //alert("Ave cadastrada com sucesso!");
    } catch (error) {
      // throw error;  
    }
  };

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
              <label>Nome:</label>
              <Input type="text" placeholder="" onChange={setNomePopular}/>
            </div>
            <div>
              <label>Nome Científico: </label>
              <Input type="text" placeholder="" onChange={setNomeCientifico}/>
            </div>
          </div>
          <div>
            <div>
              <label className="descricao">Descrição: </label>
              <textarea
                className="texto-area"
                value={descricao}
                onChange={(event) => setDescricao(event.target.value)}
              />
            </div>
          </div>
          <BotaoSalvar />
        </form>
      </div>
      <div></div>
    </>
  );
};

export default CadastroAve;