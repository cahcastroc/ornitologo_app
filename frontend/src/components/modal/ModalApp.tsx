import React, { useState } from "react";
import Modal from "react-modal";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/CancelPresentationRounded";
import { Button, IconButton } from "@mui/material";
import LocationIcon from "@mui/icons-material/LocationOnRounded";
import DataIcon from "@mui/icons-material/CalendarMonthRounded";
import EditIcon from "@mui/icons-material/Edit";
import "./Modal.css";
import Anotacao from "../../interfaces/IAnotacao";
import { AnotacaoService } from "../../services/AnotacaoService";
import Botao from "../botao/Botao";
import Info from "@mui/icons-material/InfoOutlined";
import Input from "../Input/Input";
import BotaoSalvar from "../botaoSalvar/BotaoSalvar";
import InfoModal from "./InfoModal";

interface Props {
  anotacao: Anotacao;
}

Modal.setAppElement("#root");

const ModalApp = ({ anotacao }: Props) => {
  const { id, ave, comentario, dataHorarioDoAvistamento, localizacao } =
    anotacao;

  const [modalAberto, setModalAberto] = useState<boolean>(false);

  const [edit, setEdit] = useState<boolean>(false);

  let service: AnotacaoService = new AnotacaoService();

  const abreModal = () => {
    setModalAberto(true);
  };

  const fechaModal = () => {
    setModalAberto(false);
    setEdit(false);
  };

  const editar = () => {
    setEdit(true);
    service.editAnotacao(anotacao.id, anotacao);

    console.log("Put" + anotacao.id);
  };

  const deletar = () => {
    service.deleteAnotacao(anotacao.id);
    console.log("Delete" + anotacao.id);
  };

  const MudaTela = () => {
    const [nomePopular, setNomePopular] = React.useState(ave.nomePopular);
    const [nomeCientifico, setNomeCientifico] = React.useState(
      ave.nomeCientifico
    );
    const [comentario, setComentario] = React.useState(anotacao.comentario);
    const [dataAvistamento, setDataAvistamento] = React.useState(
      anotacao.dataHorarioDoAvistamento
    );
    const [latitude, setLatitude] = React.useState(
      anotacao.localizacao.latitude
    );
    const [longitude, setLongitude] = React.useState(
      anotacao.localizacao.longitude
    );

    const salvar = () => {
      console.log(nomePopular);
      console.log(nomeCientifico);
      console.log(comentario);
      console.log(dataAvistamento);
      console.log(latitude);
      console.log(longitude);
      fechaModal();
      alert("Atualizado!");
    };

    if (!edit) {
      return (
        <>
          <InfoModal anotacao={anotacao} />
          <IconButton className="edit-icon" onClick={editar}>
            <EditIcon />
          </IconButton>
          <IconButton className="delete-icon" onClick={deletar}>
            <DeleteIcon />
          </IconButton>
        </>
      );
    } else {
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
          <Input
            placeholder={comentario}
            type={"text"}
            onChange={setComentario}
          />
          <Input
            placeholder={dataAvistamento}
            type={"text"}
            onChange={setDataAvistamento}
          />
          <Input placeholder={latitude} type={"text"} onChange={setLatitude} />
          <Input
            placeholder={longitude}
            type={"text"}
            onChange={setLongitude}
          />

          <button onClick={salvar}>Salvar</button>
        </>
      );
    }
  };

  return (
    <div className="main-modal">
      <IconButton onClick={abreModal}>
        <Info />
      </IconButton>

      <Modal
        isOpen={modalAberto}
        onRequestClose={fechaModal}
        contentLabel="Example Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <IconButton className="close-icon" onClick={fechaModal}>
          <CloseIcon />
        </IconButton>
        <MudaTela />
      </Modal>
    </div>
  );
};

export default ModalApp;
