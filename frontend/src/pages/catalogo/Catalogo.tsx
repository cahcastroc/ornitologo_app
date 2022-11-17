import { useState, useEffect } from "react";
import Card from "../../components/card/Card";
import "./Catalogo.css";
import imgCatalogo from "../../assets/catalogo.png";
import { IconButton } from "@mui/material";
import btAdd from "../../assets/btadd.png";
import { useNavigate } from "react-router-dom";
import { CatalogoService } from "./CatalogoService";
import { IAve } from "../../interfaces/IAve";

const listaDefault: Array<IAve> = [];

const Catalogo = () => {
  const navigate = useNavigate();
  const [aves, setAves]: [Array<IAve>, (aves: Array<IAve>) => void] = useState(listaDefault);

  let service: CatalogoService = new CatalogoService();

  useEffect(() => {    
    service.getAves().then(function(result){
      setAves(result);      
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
