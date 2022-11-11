import React, { useState}  from 'react'
import './Input.css'
import visu from '../../assets/visualizar.png'

interface InputProps { 
  placeholder: string;
  type: string;
  onChange: (event: any) => void;
}

const Input = ({ placeholder, type, onChange}: InputProps): any => {
  const [input, setInput] = React.useState("");
  const [tipoTemp, setTipoTemp] = useState(type);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    onChange(event.target.value);
  }

  const MostraBotao = () => {
    if (type === "password") {
      return <button onClick={mostrarSenha} className="botao-olho"><img src={visu} alt="Visualizar" className="img" /></button>
    } else {
      return <></>
    }
  }


  const mostrarSenha = () => {
    setTipoTemp(tipoTemp === "password" ? "text" : "password");
  }

    return (
      <>
        <div className='input-text'>
          <input
            className='caixa-texto'
            value={input}
            onChange={handleChange}
            placeholder={placeholder}
            type={tipoTemp}
          />
          
          <MostraBotao />
          
        </div>
      </>
    )
  }

export default Input