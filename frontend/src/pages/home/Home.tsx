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
import { AnotacaoService } from "../../services/AnotacaoService";
import IAnotacao from "../../interfaces/IAnotacao";
import  { IUser } from "../../interfaces/User";
import axios from "axios";

// interface IAnotacao{
//   anotacao: IAnotacao
// }

const Home = () => {
  const navigate = useNavigate();

  //---------------- teste GET
  const user: IUser = {email: "", senha: "", nome: ""}

  const aveTeste: Ave ={nomePopular: "Canario", nomeCientifico: "Canarius", descricao: "ave"}
  const anotacaoTeste: Anotacao = {id: 1,dataHorarioDoAvistamento:"11/11/2022",comentario: "Comentárius dentro da anotação", tamanho: "",corPredominante:"azul", criadoEm:"oie",atualizadoEm:"atualizado", ave: aveTeste, localizacao: {latitude: "52336", longitude: "556565"}, user: user}

  const[anotacao, setAnotacao]  : [IAnotacao, (anotacao:IAnotacao)=>void]= React.useState(anotacaoTeste)


  React.useEffect (()=>{
    axios.get<IAnotacao>(`http://localhost:8080/anotacoes/1`,{
      headers:{'Content-Type': 'application/json',"Authorization": `Bearer ${localStorage.getItem("token")}`}
    }).then((response)=>{
       setAnotacao(response.data)
        console.log(response.data)
    })
  },[]);
    

  //------------------


  

  // let service: AnotacaoService = new AnotacaoService();

  
// interface anotacao{
//   anotacao:IAnotacao
// }


// const xx : Array<IAnotacao> = [];
// const [anotacao1,setAnotacao1] : [Array<IAnotacao> , (anotacao: Array<IAnotacao>) => void] = React.useState(xx);
// const x = service.getAnotacao();
// console.log(x)

// x.then((values)=>{
//     console.log(values)
//     xx.push(values)    
   
// })





  return (
    <div className="home">
      <header className="header-home">
        <div>
        {/* <ModalApp anotacao={anotacaoTeste}></ModalApp> */}
        <Card anotacao={anotacao}></Card>
        <Card ave={aveTeste}></Card>
        {/* <Card anotacao={service.getAnotacao}></Card> */}
          <h1>
            Somos o <span>Ornitólogo App</span>
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
