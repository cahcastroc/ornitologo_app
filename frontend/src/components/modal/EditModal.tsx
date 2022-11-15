import React from "react";
import IAnotacao from "../../interfaces/IAnotacao";
import { AnotacaoService } from "../../pages/anotacoesUsuario/AnotacaoService";
import Input from "../Input/Input";
import Save from "@mui/icons-material/SaveOutlined";
import { IconButton } from "@mui/material";

interface Props {
  anotacao: IAnotacao;
}

const EditModal = ({ anotacao }: Props) => {
  const [comentario, setComentario] = React.useState(anotacao.comentario);
  const [tamanho, setTamanho] = React.useState(anotacao.tamanho);
  const [corPredominante, setCorPredominante] = React.useState(
    anotacao.corPredominante
  );
  const [latitude, setLatitude] = React.useState(anotacao.localizacao.lat);
  const [longitude, setLongitude] = React.useState(anotacao.localizacao.longt);
  const [descricaoLocal, setDescricaoLocal] = React.useState(
    anotacao.localizacao.descricao
  );

  let service: AnotacaoService = new AnotacaoService();

  //Objeto intermediário
  const [anotacaoEditada, setAnotacaoEditada]: [
    IAnotacao,
    (anotacaoEditada: IAnotacao) => void
  ] = React.useState(anotacao);

  anotacaoEditada.comentario = comentario;
  anotacaoEditada.corPredominante = corPredominante;
  anotacaoEditada.tamanho = tamanho;
  anotacaoEditada.localizacao.lat = latitude;
  anotacaoEditada.localizacao.longt = longitude;
  anotacaoEditada.localizacao.descricao = descricaoLocal;

  const salvar = () => {
    service.editAnotacao(anotacao.id, anotacaoEditada);
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
        <label className="label">Latitude:</label>
        <Input placeholder={latitude} type={"text"} onChange={setLatitude} />
        <label className="label">Longitude:</label>
        <Input placeholder={longitude} type={"text"} onChange={setLongitude} />
        <label className="label">Descrição do local:</label>
        <Input
          placeholder={descricaoLocal}
          type={"text"}
          onChange={setDescricaoLocal}
        />
        <IconButton onClick={salvar} className="edit-save">
          <Save />
        </IconButton>
      </div>
    </div>
  );
};

export default EditModal;
