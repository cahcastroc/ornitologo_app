import "./Home.css";
import { Link } from "react-router-dom";
import imgHome from "../../assets/home.png";
import imgAspasBaixo from "../../assets/aspasbaixo.png";
import imgAspas from "../../assets/aspas.png";
import Input from "../Input/Input";
import Botao from "../botao/Botao";

const teste = () => {
  console.log("teste");
}

const Home = () => {
  return (
    <div className="home">
      <header className="header-home">
        <div>
          <h1>
            Somos o <span>Ornitólogo App</span>
          </h1>
          <h2>Registre seus olhares de Ornitólogo</h2>
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

      {/* 
      <p>Links abaixo somente para teste de rota</p> */}
      {/* Somente teste de rotas */}
      {/* <Link to="/cadastro">Cadastro</Link>
      <hr />
      <Link to="/anotacao">Anotação</Link>
      <hr />
      <Link to="/ave">Ave</Link>
      <hr /> */}
    </div>
  );
};

export default Home;
