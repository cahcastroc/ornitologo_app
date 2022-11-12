import React from 'react'
import axios from "axios";
import { CadastrarAve } from '../../interfaces/Interfaces';

const cadastroAveDefault: CadastrarAve = { nome: "", nomeCientifico: "", descricao: "" };

const Services = () => {

    const [cadastroAve, setCadastroAve] = React.useState(cadastroAveDefault);
    const [erro, setErro] = React.useState("");

    axios.post('http://localhost:8080/aves', {
        Headers: { "Content-Type": "application/json" },
        timeout: 10000,
        cadastroAveDefault: cadastroAveDefault,
    })
        .then((response) => {
            console.log(response.data);
            setCadastroAve(response.data);
        })
        .catch((ex) => {
            let erro = ex.response.status;
            if (erro !== 201) {
                setErro(`Erro: ${erro}`);
                console.log("==> Erro: " + erro);
            }
        });
}

export default Services