import axios from "axios";
import React from "react";
import Card from "../../components/card/Card";
import IAve from "../../interfaces/IAve";
import "./Catalogo.css";
import imgCatalogo from "../../assets/catalogo.png";
import { IconButton } from "@mui/material";
import BtnAdd from "@mui/icons-material/AddCircle";
import btAdd from "../../assets/btadd.png";
import { useNavigate } from "react-router-dom";

const listaDefault: Array<IAve> = [];

const Catalogo = () => {
  const [aves, setAves]: [Array<IAve>, (aves: Array<IAve>) => void] =
    React.useState(listaDefault);

  const navigate = useNavigate();

  React.useEffect(() => {
    axios
      .get<Array<IAve>>(`http://localhost:8080/aves`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setAves(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div className="catalogo">
      <img src={imgCatalogo} alt="logo catalogo" />
      <h1>Catálogo de aves</h1>
      <div className="lista-cards">
        <ul>
          {aves.map((ave) => (
            <li key={ave.nomePopular}>
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
