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
import EditModal from "./EditModal";

interface Props {
  anotacao: Anotacao;
}

Modal.setAppElement("#root");

const ModalApp = ({ anotacao }: Props) => {
  // const { id, ave, comentario, dataHorarioDoAvistamento, localizacao } =
  //   anotacao;

    
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
  
  };

  const deletar = () => {
    service.deleteAnotacao(anotacao.id);
    console.log("Delete" + anotacao.id);
  };

  const MudaTela = () => {

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
          <EditModal anotacao={anotacao} />
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
