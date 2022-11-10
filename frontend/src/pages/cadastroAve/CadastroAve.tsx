import React from 'react'
import './CadastroAve.css'
import Input from '../../components/Input/Input'
import tucano from '../../assets/tucano.png'

const CadastroAve = () => {
    return (
      <>
        <div className="home-cadastro-ave">
          <header className='header-home-cadastro-ave'>
            <img src={tucano} alt="tucano" className='tucano'/>
          </header>
        

          <div className='teste1'>
            <div className='teste'>
              <Input type="text" placeholder="Nome" />
              <Input type="password" placeholder="Nome" />
            </div>
          </div>
        </div>
    </>
  )
}

export default CadastroAve