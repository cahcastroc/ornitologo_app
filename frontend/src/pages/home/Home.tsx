import "./Home.css";
import { useNavigate } from "react-router-dom";
import imgHome from "../../assets/home.png";
import imgAspasBaixo from "../../assets/aspasbaixo.png";
import imgAspas from "../../assets/aspas.png";
import Botao from "../../components/botao/Botao";
import ModalApp from "../../components/modal/ModalApp";
import Anotacao from "../../interfaces/IAnotacao";
import React from "react";
import Ave from "../../interfaces/IAve";
import Card from "../../components/card/Card";
import { AnotacaoService } from "../anotacoesUsuario/AnotacaoService";
import IAnotacao from "../../interfaces/IAnotacao";
import { IUser } from "../../interfaces/User";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <header className="header-home">
        <div>
          <h1>
            Somos o<span>Ornitólogo App</span>
          </h1>
          <h2>Registre seus olhares de Ornitólogo</h2>
          <Botao
            text="Criar conta"
            enviar={() => {
              navigate("/cadastro");
            }}
            parametros={[]}
          />
        </div>
        <img src={imgHome} alt="imagem home"></img>
      </header>
      <main>
        <div className="container">
          <div className="quote">
            <p>
              Ornitologia é a ciência dedicada ao estudo das aves. É o ramo da
              biologia e da zoologia dedicado ao estudo das aves a partir de sua
              distribuição na superfície do globo, das condições e
              peculiaridades de seu meio, costumes e modo de vida, de sua
              organização e dos caracteres que as distinguem umas das outras,
              para classificá-las em espécies, gêneros e famílias.
            </p>
          </div>
          <img
            src={imgAspasBaixo}
            className="aspas-baixo"
            alt="imagem aspas"
          ></img>
          <a
            className="link-profissao"
            target="_blank"
            href="https://pt.wikipedia.org/wiki/Ornitologia"
            rel="noreferrer"
          >
            Saiba mais sobre a profissão
          </a>
          <div className="depoimento">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <img src={imgAspas} className="aspas-cima" alt="imagem aspas"></img>

          <a
            className="catalogo-a"
            target="_blank"
            href="https://www.pucrs.br/mct/wp-content/uploads/sites/223/2020/04/GuiaAves.pdf"
            rel="noreferrer"
          >
            Ornitológo, conheça o nosso catálogo de referência
          </a>

          <p className="catalogo-p">
            Nosso guia de referência é uma publicação eletrônica pertecente à
            Rede de Pesquisa em Biodiversidade dos Campos Sulinos e realizada
            pelo projeto associado "Comunidades de aves campestres do Sul do
            Brasil: mapeando a riqueza e estimando parâmetros demográficos".
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
