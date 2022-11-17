import React, { useState, useEffect } from "react";
import "./Input.css";
import visu from "../../assets/visualizar.png";
import IInput from "../../interfaces/IInput";

interface InputProps {
    placeholder: string;
    type: string;
    required?: boolean;
    invalid?: boolean;
    onChange: (event: IInput) => void;
}

const Input = ({
    placeholder,
    type,
    required,
    invalid,
    onChange,
}: InputProps): any => {
    const [input, setInput] = React.useState("");
    const [tipoTemp, setTipoTemp] = useState(type);
    const [error, setError] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
        onChange({ value: event.target.value, invalid: error });
        if (event.target.value !== "") {
            setError(false);
        } else {
            setError(true);
        }
    };

    useEffect(() => {
        if (required) {
            if (invalid) {
                setError(true);
            } else {
                setError(false);
            }
        }
    }, [invalid]);

    const MostraBotao = () => {
        if (type === "password") {
            return (
                <button onClick={mostrarSenha} className="botao-olho">
                    <img src={visu} alt="Visualizar" className="img" />
                </button>
            );
        } else {
            return <></>;
        }
    };

    const mostrarSenha = () => {
        setTipoTemp(tipoTemp === "password" ? "text" : "password");
    };

    return (
        <>
            <div className="input-text">
                <input
                    className={
                        error ? "caixa-texto" + " required" : "caixa-texto"
                    }
                    value={input}
                    onChange={handleChange}
                    placeholder={placeholder}
                    type={tipoTemp}
                />

                <MostraBotao />
            </div>
        </>
    );
};

export default Input;
