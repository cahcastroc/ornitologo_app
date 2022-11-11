import React, { useState } from "react";
import Modal from "react-modal";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/CancelPresentationRounded";
import { IconButton } from "@mui/material";
import LocationIcon from "@mui/icons-material/LocationOnRounded";
import DataIcon from "@mui/icons-material/CalendarMonthRounded";
import EditIcon from "@mui/icons-material/Edit";
import "./Modal.css";


interface ModalProps {
  nome: string;
  nomeCientifico: string;
  descricao: string;
  data: string;
  latitude: string;
  longitude: string;
}

const ModalApp = ({
  nome,
  nomeCientifico,
  descricao,
  data,
  latitude,
  longitude,
}: ModalProps) => {

  const [modalAberto, setModalAberto] = useState<boolean>(false);

  const abreModal = () => {
    setModalAberto(true);
  };

  const fechaModal = () => {
    setModalAberto(false);
  };



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
        <h2>{nome}</h2>
        <h3>{nomeCientifico}</h3>
        <p>{descricao}</p>
        <div className="data">
          <DataIcon />
          <h4>{data}</h4>
        </div>
        <div className="latitude">
          <LocationIcon />
          <h4>{latitude}</h4>
        </div>
        <div className="longitude">
          <LocationIcon />
          <h4>{longitude}</h4>
        </div>
        <IconButton className="edit-icon">
          <EditIcon />
        </IconButton>
        <IconButton className="delete-icon">
          <DeleteIcon />
        </IconButton>
      </Modal>
    </div>
  );
};

export default ModalApp;
