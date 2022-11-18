import "./Anotacao.css";
import jaoDeBarro from "../../assets/jaodebarro.png";
import Card from "../../components/card/Card";
import { IconButton } from "@mui/material";
import btAdd from "../../assets/btadd.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnotacaoService } from "./AnotacaoService";
import IAnotacao from "../../interfaces/IAnotacao";
import { toast } from "react-toastify";

const Anotacao = () => {
    let userName = JSON.parse(localStorage.getItem("token") || "{}").nome;
    const navigate = useNavigate();
    let [data, setData] = useState<IAnotacao[]>([]);
    let service: AnotacaoService = new AnotacaoService();

    useEffect(() => {
        service
            .getAll()
            .then((x) => setData(x))
            .catch((err) => {
                if (err.response.status === 401) {
                    toast.warn("Sessão expirada, realize um novo login");
                    localStorage.removeItem("token");
                    navigate("/login");
                }
            });
    }, []);

    return (
        <div className="anotacao-container">
            <img src={jaoDeBarro} alt="" />
            <h2>Seja bem vindo(a), {userName}!</h2>
            <h3>Minhas Anotações</h3>
            <div className="anotacoes-grid-container">
                {data.map((item) => (
                    <Card key={item.id} anotacao={item}></Card>
                ))}
            </div>
            <IconButton
                aria-label="add-ave"
                size="large"
                onClick={() => navigate("/novaanotacao")}
            >
                <img className="btn" src={btAdd} alt="botao-add" />
            </IconButton>
        </div>
    );
};

export default Anotacao;
