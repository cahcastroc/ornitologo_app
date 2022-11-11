import React from 'react'
import Anotacao from '../../interfaces/Anotacao';
import Ave from '../../interfaces/Ave';
import "./Card.css"


interface Props{
    anotacao?: Anotacao;
    ave?: Ave;
}

interface CardProps{
    nome: string,
    nomeCientifico: string,
    descricao: string,
    data: string
}

const retornoInterface = (props: Props): CardProps => {
    const { anotacao, ave } = props;
    let data: CardProps = {
        nome: anotacao?.ave.nomePopular || ave?.nomePopular || "",
        nomeCientifico: anotacao?.ave.nomeCientifico || ave?.nomeCientifico ||  "",
        descricao: anotacao?.comentario || ave?.descricao || "",
        data: anotacao?.dataHorarioDoAvistamento || "",
    };
    return data;
};


const Card = (props: Props ) => {

    const {nome, nomeCientifico, descricao,data} = retornoInterface(props)


    return (
        <div className="row">            
                <h2>{nome}</h2>
                <h3>{nomeCientifico}</h3> 
                <span>         
                    <p>{descricao}</p>                  
                </span>     
                <p id='data'>{data}</p>       
        </div>          
        )
}

export default Card