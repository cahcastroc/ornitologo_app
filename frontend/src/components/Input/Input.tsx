import React, { InputHTMLAttributes }  from 'react'
import './Input.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { 
  placeholder: string;
  type: string;
}

const Input: React.FC<InputProps> = (props) => {
  const [input, setInput] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("===>" + event.target.value);
    setInput(event.target.value);
  }

  return (
      <>
      <input
        className='caixa-texto'
        value={input}
        onChange={handleChange}
        {...props}
      />
      </>
  )
}

export default Input