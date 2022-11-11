import React from 'react'
import botaoSalvar from '../../assets/botaoSalvar.svg'
import './BotaoSalvar.css'


const BotaoSalvar = () => {
    return (
        <button type='submit' className='botao-salvar'>
            <img src={botaoSalvar} alt="botaoCadAve" className='botaoCadAve' />  
        </button>
    )
}

export default BotaoSalvar