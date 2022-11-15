import axios from "axios";
import React from "react";
import Card from "../../components/card/Card";
import IAnotacao from "../../interfaces/IAnotacao";
import IAve from "../../interfaces/IAve";
import { IUser } from "../../interfaces/User";
import "./Usuario.css";

const Usuario = () => {

  const userDefault: IUser = {email: "", senha: "", nome: ""}

  const aveDefault: IAve ={nomePopular: "", nomeCientifico: "", descricao: ""}
  const anotaDefault: IAnotacao = {id: 1,dataHorarioDoAvistamento:"",comentario: "", tamanho: "",corPredominante:"", criadoEm:"",atualizadoEm:"", ave: aveDefault, localizacao: {lat: "", longt: "", descricao: ""}, user: userDefault}

  const[anotacao, setAnotacao]  : [IAnotacao, (anotacao:IAnotacao)=>void]= React.useState(anotaDefault)

  React.useEffect (()=>{
    axios.get<IAnotacao>(`http://localhost:8080/anotacoes/2`,{
      headers:{'Content-Type': 'application/json',"Authorization": `Bearer ${localStorage.getItem("token")}`}
    }).then((response)=>{
       setAnotacao(response.data)
        console.log(response.data)
    })
  },[]);
    
  
  return (
    <div>
       <h1>Anotações do Usuario</h1>
       {/* <ModalApp anotacao={anotacaoTeste}></ModalApp> */}
       <Card anotacao={anotacao}></Card>
        <Card ave={aveDefault}></Card>
        {/* <Card anotacao={service.getAnotacao}></Card> */}
     
    </div>
  );
};

export default Usuario;
