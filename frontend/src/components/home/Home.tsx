import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Links abaixo somente para teste de rota</p>
      {/* Somente teste de rotas */}
      <Link to="/cadastro">Cadastro</Link>
      <hr />
      <Link to="/anotacao">Anotação</Link>
      <hr />
      <Link to="/ave">Ave</Link>
      <hr />
    </div>
  );
};

export default Home;
