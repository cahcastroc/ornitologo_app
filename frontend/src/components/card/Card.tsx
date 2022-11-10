import React from 'react'
import "./Card.css"


interface CardProps{
    nome: string,
    nomeCientifico: string,
    descricao: string,
    data: string
}


const Card = ({nome, nomeCientifico,descricao,data}: CardProps) => {
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