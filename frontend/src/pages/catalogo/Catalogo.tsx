import React from "react";
import Card from "../../components/card/Card";
import IAve from "../../interfaces/IAve";
import "./Catalogo.css";
import imgCatalogo from "../../assets/catalogo.png";
import { IconButton } from "@mui/material";
import btAdd from "../../assets/btadd.png";
import { useNavigate } from "react-router-dom";
import { CatalogoService } from "./CatalogoService";

const listaDefault: Array<IAve> = [];

const Catalogo = () => {
    const [aves, setAves]: [Array<IAve>, (aves: Array<IAve>) => void] =
        React.useState(listaDefault);

    const navigate = useNavigate();

  let service: CatalogoService = new CatalogoService();

  React.useEffect(() => {    
    service.getAves().then((result) => {
      setAves(result)      
    }).catch((err) => {
      if(err.response.status === 401){
        alert("Sessão expirada, realize um novo login");
        localStorage.removeItem("token");
        navigate("/login");
      }
    });
  }, []);



  return (
    <div className="catalogo">
      <img src={imgCatalogo} alt="logo catalogo" />
      <h1>Catálogo de aves</h1>
      <div className="lista-cards">
        <ul>
          {aves.map((ave) => (
            <li key={ave.id}>
              <Card ave={ave}></Card>
            </li>
          ))}
        </ul>
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

export default Catalogo;
