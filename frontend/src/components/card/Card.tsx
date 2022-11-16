import IAnotacao from "../../interfaces/IAnotacao";
import IAve from "../../interfaces/IAve";
import ModalApp from "../modal/ModalApp";
import "./Card.css";

interface Props {
  anotacao?: IAnotacao;
  ave?: IAve;
}

interface CardProps {
  nome: string;
  nomeCientifico: string;
  descricao: string;
  data: string;
}

const retornoData = (props: Props): CardProps => {
  const { anotacao, ave } = props;
  let data: CardProps = {
    nome: anotacao?.ave.nomePopular || ave?.nomePopular || "",
    nomeCientifico: anotacao?.ave.nomeCientifico || ave?.nomeCientifico || "",
    descricao: anotacao?.comentario || ave?.descricao || "",
    data: anotacao?.dataHorarioDoAvistamento || "",
  };
  return data;
};
export const Card = (props: Props) => {
  const { nome, nomeCientifico, descricao, data } = retornoData(props);

  return (
    <div className="row">
      <h2>{nome}</h2>
      <h3>{nomeCientifico}</h3>
      <span>
        <p>{descricao}</p>
      </span>
      <p id="data">{data}</p>
      {props.anotacao && <ModalApp anotacao={props.anotacao}></ModalApp>}
    </div>
  );
};

export default Card;
