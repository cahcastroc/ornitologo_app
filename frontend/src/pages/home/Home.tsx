import "./Home.css";
import { useNavigate } from "react-router-dom";
import imgHome from "../../assets/home.png";
import imgAspasBaixo from "../../assets/aspasbaixo.png";
import imgAspas from "../../assets/aspas.png";
import Botao from "../../components/botao/Botao";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <header className="header-home">
        <div className="header-titulo">
          <h1>
            Somos o<span> Ornitólogo App</span>
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
              Assim como os ornitólogos, ampliamos os nossos olhares, coletamos
              informações, realizamos um estudo abrangente e disseminamos
              conhecimentos uns aos outros nesse projeto. O Ornitólogo App foi
              desenvolvido como exercício prático no programa Desenvolve Tech II
              para aplicação das técnicas adquiridas através da imersão
              FullStack ministrada pelo Prof. Dr. Michael Móra (PUC/RS).
            </p>
          </div>
          <img src={imgAspas} className="aspas-cima" alt="imagem aspas"></img>
          <a
            className="catalogo-a"
            target="_blank"
            href="https://www.pucrs.br/mct/wp-content/uploads/sites/223/2020/04/GuiaAves.pdf"
            rel="noreferrer"
          >
            Conheça o nosso catálogo de referência
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
