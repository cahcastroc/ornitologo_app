import LocationIcon from "@mui/icons-material/LocationOnRounded";
import DataIcon from "@mui/icons-material/CalendarMonthRounded";
import "./Modal.css";
import IAnotacao from "../../interfaces/IAnotacao";
import DescricraoIcon from "@mui/icons-material/AssignmentOutlined";

interface Props {
  anotacao: IAnotacao; 
}

const InfoModal = ({ anotacao}: Props) => {
  const { ave, comentario, dataHorarioDoAvistamento, localizacao } = anotacao;

  return (
    <div className="info-modal">
      <h2>{ave.nomePopular}</h2>
      <h3>{ave.nomeCientifico}</h3>
      <p>{comentario}</p>
      <div className="data">
        <DataIcon />
        <h4>{dataHorarioDoAvistamento || ""}</h4>
      </div>
      <div className="latitude">
        <LocationIcon />
        <h4>{localizacao.lat || ""}</h4>
      </div>
      <div className="longitude">
        <LocationIcon />
        <h4>{localizacao.longt || ""}</h4>
      </div>
      <div className="descricao-local">
        <DescricraoIcon />
        <h5>Descrição do local: </h5>
        <p> {localizacao.descricao || " Sem descrição"}</p>
      </div>
    </div>
  );
};

export default InfoModal;
