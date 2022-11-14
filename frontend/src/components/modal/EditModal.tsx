import React from "react";
import IAnotacao from "../../interfaces/IAnotacao";
import { AnotacaoService } from "../../services/AnotacaoService";
import Input from "../Input/Input";
import Save from "@mui/icons-material/SaveOutlined";
import { Button, IconButton } from "@mui/material";

interface Props {
  anotacao: IAnotacao;
}

const EditModal = ({ anotacao }: Props) => {


  const [nomePopular, setNomePopular] = React.useState(
    anotacao.ave.nomePopular
  );

  const [nomeCientifico, setNomeCientifico] = React.useState(
    anotacao.ave.nomeCientifico
  );

  const [comentario, setComentario] = React.useState(anotacao.comentario);
  const [dataAvistamento, setDataAvistamento] = React.useState(
    anotacao.dataHorarioDoAvistamento
  );
  const [latitude, setLatitude] = React.useState(anotacao.localizacao.latitude);
  const [longitude, setLongitude] = React.useState(
    anotacao.localizacao.longitude
  );

  let service: AnotacaoService = new AnotacaoService();

  const [anotacaoEditada, setAnotacaoEditada]: [IAnotacao, (anotacaoEditada: IAnotacao) => void] = React.useState(anotacao)
  
  anotacaoEditada.ave.nomePopular = nomePopular;
  anotacaoEditada.ave.nomeCientifico = nomeCientifico;
  anotacaoEditada.comentario = comentario;
  anotacaoEditada.dataHorarioDoAvistamento = dataAvistamento;
  anotacaoEditada.localizacao.latitude = latitude;
  anotacaoEditada.localizacao.longitude = longitude;
    
 
  const salvar = () => {
    console.log(nomePopular);
    service.editAnotacao(anotacao.id, anotacaoEditada);

    console.log("Put" + anotacaoEditada.ave.nomePopular + anotacaoEditada.id);
   
  };



  return (
    <>
      <Input
        placeholder={nomePopular}
        type={"text"}
        onChange={setNomePopular}
      />
      <Input
        placeholder={nomeCientifico}
        type={"text"}
        onChange={setNomeCientifico}
      />
      <Input placeholder={comentario} type={"text"} onChange={setComentario} />
      <Input
        placeholder={dataAvistamento}
        type={"text"}
        onChange={setDataAvistamento}
      />
      <Input placeholder={latitude} type={"text"} onChange={setLatitude} />
      <Input placeholder={longitude} type={"text"} onChange={setLongitude} />
      <IconButton onClick={salvar}>
        <Save />
      </IconButton>
    </>
  );
};

export default EditModal;
