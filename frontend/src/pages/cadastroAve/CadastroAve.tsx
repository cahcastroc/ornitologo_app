import React from "react";
import "./CadastroAve.css";
import Input from "../../components/Input/Input";
import tucano from "../../assets/tucano.png";
import BotaoSalvar from "../../components/botaoSalvar/BotaoSalvar";

const CadastroAve = () => {
  const [nome, setNome] = React.useState("");
  const [nomeCientifico, setNomeCientifico] = React.useState("");
  const [descricao, setDescricao] = React.useState("");

  const handleEnviar = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(nome, nomeCientifico, descricao);
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
              <Input type="text" placeholder="" onChange={setNome}/>
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