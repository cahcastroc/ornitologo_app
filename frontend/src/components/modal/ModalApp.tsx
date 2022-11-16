import React, { useState } from "react";
import Modal from "react-modal";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/CancelPresentationRounded";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import "./Modal.css";
import Anotacao from "../../interfaces/IAnotacao";
import { AnotacaoService } from "../../pages/anotacoesUsuario/AnotacaoService";
import Info from "@mui/icons-material/InfoOutlined";
import InfoModal from "./InfoModal";
import EditModal from "./EditModal";

interface Props {
  anotacao: Anotacao;
}

Modal.setAppElement("#root");

const ModalApp = ({ anotacao }: Props) => {
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
  };

  const RenderModal = () => {
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
        <div className="itens">
          <IconButton className="close-icon" onClick={fechaModal}>
            <CloseIcon />
          </IconButton>
          <RenderModal />
        </div>
      </Modal>
    </div>
  );
};

export default ModalApp;