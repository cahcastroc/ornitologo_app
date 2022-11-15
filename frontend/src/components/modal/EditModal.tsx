import React from "react";
import IAnotacao from "../../interfaces/IAnotacao";
import { AnotacaoService } from "../../services/AnotacaoService";
import Input from "../Input/Input";
import Save from "@mui/icons-material/SaveOutlined";
import { Button, IconButton } from "@mui/material";
import Anotacao from "../../pages/anotacao/Anotacao";

interface Props {
  anotacao: IAnotacao;
}

const EditModal = ({ anotacao }: Props) => {
  const [comentario, setComentario] = React.useState(anotacao.comentario);
  const [tamanho, setTamanho] = React.useState(anotacao.tamanho);
  const [corPredominante, setCorPredominante] = React.useState(
    anotacao.corPredominante
  );

  // const [latitude, setLatitude] = React.useState(anotacao.localizacao.latitude);
  // const [longitude, setLongitude] = React.useState(
  //   anotacao.localizacao.longitude
  // );

  let service: AnotacaoService = new AnotacaoService();

  const [anotacaoEditada, setAnotacaoEditada]: [
    IAnotacao,
    (anotacaoEditada: IAnotacao) => void
  ] = React.useState(anotacao);

  anotacaoEditada.comentario = comentario;
  anotacaoEditada.corPredominante = corPredominante;
  anotacaoEditada.tamanho = tamanho;

  // anotacaoEditada.localizacao.latitude = latitude;
  // anotacaoEditada.localizacao.longitude = longitude;

  const salvar = () => {
    service.editAnotacao(anotacao.id, anotacaoEditada);

    console.log("Put" + anotacaoEditada.ave.nomePopular);
  };

  return (
    <div className="modal-edit">
      <h3>{anotacao.ave.nomePopular}</h3>
      <h4>{anotacao.ave.nomeCientifico}</h4>
      <div className="edit-form">
        <label>Observações:</label>
        <Input
          placeholder={comentario}
          type={"text"}
          onChange={setComentario}
        />
        <label className="label">Tamanho:</label>
        <Input placeholder={tamanho} type={"text"} onChange={setTamanho} />
        <label className="label">Cor Predominante:</label>
        <Input
          placeholder={corPredominante}
          type={"text"}
          onChange={setCorPredominante}
        />
        {/* <Input placeholder={latitude} type={"text"} onChange={setLatitude} />
      <Input placeholder={longitude} type={"text"} onChange={setLongitude} /> */}

        <IconButton onClick={salvar} className="edit-save">
          <Save />
        </IconButton>
      </div>
    </div>
  );
};

export default EditModal;
