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
import Info from '@mui/icons-material/InfoOutlined';
import Input from "../Input/Input";
import BotaoSalvar from "../botaoSalvar/BotaoSalvar";
import IAnotacao from "../../interfaces/IAnotacao";

interface Props {
    anotacao: IAnotacao;
  }

const InfoModal = ({anotacao}: Props) => {
    const { ave, comentario, dataHorarioDoAvistamento, localizacao} = anotacao;
    // const [edit, setEdit] = useState<boolean>(false);
    
    // let service: AnotacaoService = new AnotacaoService();

    // const editar = () =>{
    //     setEdit(true)
    //     service.editAnotacao(anotacao.id, anotacao)
    
    //     console.log("Put" + anotacao.id)
    //   }
    
    //   const deletar = () =>{
    //       service.deleteAnotacao(anotacao.id);
    //       console.log("Delete" + anotacao.id)          
    //   }
  return (
    <>
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
      {/* <IconButton className="edit-icon" onClick={editar}>
          <EditIcon />
        </IconButton>
        <IconButton className="delete-icon" onClick={deletar}>
          <DeleteIcon />
        </IconButton> */}
      </>
  )
}

export default InfoModal