import React, { useState } from "react";
import Modal from "react-modal";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/CancelPresentationRounded";
import { IconButton } from "@mui/material";
import LocationIcon from "@mui/icons-material/LocationOnRounded";
import DataIcon from "@mui/icons-material/CalendarMonthRounded";
import EditIcon from "@mui/icons-material/Edit";
import "./Modal.css";
import Anotacao from "../../interfaces/IAnotacao";

interface Props {
  anotacao: Anotacao;
}

Modal.setAppElement('#root')

const ModalApp = ({ anotacao }: Props) => {
  const { ave, comentario, dataHorarioDoAvistamento, localizacao} = anotacao;

  const [modalAberto, setModalAberto] = useState<boolean>(false);

  const abreModal = () => {
    setModalAberto(true);
  };

  const fechaModal = () => {
    setModalAberto(false);
  };

  const editar = () =>{
    console.log("Edit")
  }

  const deletar = () =>{
    console.log("Delete")
  }

  return (
    <div className="main-modal">
      <button onClick={abreModal}>Abre modal</button>
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
        <h2>{ave.nomePopular}</h2>
        <h3>{ave.nomeCientifico}</h3>
        <p>{comentario}</p>
        <div className="data">
          <DataIcon />
          <h4>{dataHorarioDoAvistamento}</h4>
        </div>
        <div className="latitude">
          <LocationIcon />
          <h4>{localizacao.latitude}</h4>
        </div>
        <div className="longitude">
          <LocationIcon />
          <h4>{localizacao.longitude}</h4>
        </div>
        <IconButton className="edit-icon" onClick={editar}>
          <EditIcon />
        </IconButton>
        <IconButton className="delete-icon" onClick={deletar}>
          <DeleteIcon />
        </IconButton>
      </Modal>
    </div>
  );
};

export default ModalApp;
