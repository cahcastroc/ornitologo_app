import React from "react";
import "./Botao.css";

interface BotaoProps {
    text: string;
    enviar: (...args: any) => any;
    parametros: any[];
}


const Botao = ({ text, enviar, parametros }: BotaoProps): any => {
  return (
    <>
          <button className="botao" onClick={() => enviar(...parametros)}>{text}</button>
    </>
  );
};
export default Botao;
