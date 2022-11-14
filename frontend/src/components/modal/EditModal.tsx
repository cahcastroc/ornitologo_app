import React from 'react'
import IAnotacao from '../../interfaces/IAnotacao';
import Input from '../Input/Input';

interface Props {
  anotacao: IAnotacao;
}

const EditModal = ({anotacao}: Props) => {



  // const [nome, setNomePopular] = React.useState(ave.nomePopular);
  //   const [nomeCientifico, setNomeCientifico] = React.useState(
  //     ave.nomeCientifico
  //   );
  //   const [comentario, setComentario] = React.useState(anotacao.comentario);
  //   const [dataAvistamento, setDataAvistamento] = React.useState(
  //     anotacao.dataHorarioDoAvistamento
  //   );
  //   const [latitude, setLatitude] = React.useState(
  //     anotacao.localizacao.latitude
  //   );
  //   const [longitude, setLongitude] = React.useState(
  //     anotacao.localizacao.longitude
  //   );


  return (
    <>
      {/* <Input
            placeholder={nomePopular}
            type={"text"}
            onChange={setNomePopular}
          />
          <Input
            placeholder={nomeCientifico}
            type={"text"}
            onChange={setNomeCientifico}
          />
          <Input
            placeholder={comentario}
            type={"text"}
            onChange={setComentario}
          />
          <Input
            placeholder={dataAvistamento}
            type={"text"}
            onChange={setDataAvistamento}
          />
          <Input placeholder={latitude} type={"text"} onChange={setLatitude} />
          <Input
            placeholder={longitude}
            type={"text"}
            onChange={setLongitude}
          />

          <button onClick={salvar}>Salvar</button> */}

    </>
  )
}

export default EditModal