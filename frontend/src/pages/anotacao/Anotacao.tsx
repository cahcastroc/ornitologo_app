import "./Anotacao.css";
import jaoDeBarro from "../../assets/jaodebarro.png";

const Anotacao = () => {
  let userName = "Rhaisa"
  return (
    <div className="container">
      <img src={jaoDeBarro} alt="" />
      <h2>Seja bem vindo(a), {userName}!</h2>
      <div className="anotacoes-container">
        <h3>Minhas Anotações</h3>
      </div>
    </div>
  );
};

export default Anotacao;
