import React from "react";
import "./Botao.css";

interface BotaoProps {
    text: string;
    enviar: (...args: any) => any;
    parametros: any[];
}

//se o paramentro for passado será utilizado o evento e o paramentro, caso nao seja somente será utilizado o Event.
//o evento sempre será enviado na função.

const Botao = ({ text, enviar, parametros }: BotaoProps): any => {
  return (
    <>
      <button type="submit" className="botao" onClick={(e) => enviar(e, ...parametros)}>{text}</button>
    </>
  );
};
export default Botao;
