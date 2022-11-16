import "./Anotacao.css";
import jaoDeBarro from "../../assets/jaodebarro.png";
import Card from "../../components/card/Card"
import { IconButton } from "@mui/material";
import btAdd from "../../assets/btadd.png";
import { useNavigate } from "react-router-dom";


const Anotacao = () => {
  let userName = "Rhaisa"
  const navigate = useNavigate();

  return (
    <div className="anotacao-container">
      <img src={jaoDeBarro} alt="" />
      <h2>Seja bem vindo(a), {userName}!</h2>
      <h3>Minhas Anotações</h3>
      <div className="anotacoes-grid-container">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <IconButton
        aria-label="add-ave"
        size="large"
        onClick={() => {
          navigate("/cadastroave");
        }}
      >
        <img className="btn" src={btAdd} alt="botao-add" />
      </IconButton>
    </div>
  );
};

export default Anotacao;
