import React, { useState } from "react";
import IAnotacao from "../../interfaces/IAnotacao";
import { AnotacaoService } from "../../pages/anotacoesUsuario/AnotacaoService";
import Input from "../Input/Input";
import Save from "@mui/icons-material/SaveOutlined";
import { IconButton } from "@mui/material";
import IInput from "../../interfaces/IInput";

interface Props {
    anotacao: IAnotacao;
    concluirAcao: () => void;
}

const EditModal = ({ anotacao, concluirAcao }: Props) => {
    const [comentario, setComentario] = useState<IInput>({
        value: anotacao.comentario,
    });
    const [tamanho, setTamanho] = useState<IInput>({
        value: anotacao.tamanho,
    });
    const [corPredominante, setCorPredominante] = useState<IInput>({
        value: anotacao.corPredominante,
    });
    const [latitude, setLatitude] = useState<IInput>({
        value: anotacao.localizacao.lat,
    });
    const [longitude, setLongitude] = useState<IInput>({
        value: anotacao.localizacao.longt,
    });
    const [descricaoLocal, setDescricaoLocal] = useState<IInput>({
        value: anotacao.localizacao.descricao,
    });

    let service: AnotacaoService = new AnotacaoService();

    //Objeto intermediário
    const [anotacaoEditada]: [IAnotacao, (anotacaoEditada: IAnotacao) => void] =
        React.useState(anotacao);

    anotacaoEditada.comentario = comentario.value;
    anotacaoEditada.corPredominante = corPredominante.value;
    anotacaoEditada.tamanho = tamanho.value;
    anotacaoEditada.localizacao.lat = latitude.value;
    anotacaoEditada.localizacao.longt = longitude.value;
    anotacaoEditada.localizacao.descricao = descricaoLocal.value;

    const salvar = () => {
        service.editAnotacao(anotacao.id, anotacaoEditada);
        concluirAcao();
        window.location.reload();
    };

    return (
        <div className="modal-edit">
            <h3>{anotacao.ave.nomePopular}</h3>
            <h4>{anotacao.ave.nomeCientifico}</h4>
            <div className="edit-form">
                <label>Observações:</label>
                <Input
                    placeholder={comentario.value}
                    type={"text"}
                    onChange={setComentario}
                />
                <label className="label">Tamanho:</label>
                <Input
                    placeholder={tamanho.value}
                    type={"text"}
                    onChange={setTamanho}
                />
                <label className="label">Cor Predominante:</label>
                <Input
                    placeholder={corPredominante.value}
                    type={"text"}
                    onChange={setCorPredominante}
                />
                <label className="label">Latitude:</label>
                <Input
                    placeholder={latitude.value}
                    type={"text"}
                    onChange={setLatitude}
                />
                <label className="label">Longitude:</label>
                <Input
                    placeholder={longitude.value}
                    type={"text"}
                    onChange={setLongitude}
                />
                <label className="label">Descrição do local:</label>
                <Input
                    placeholder={descricaoLocal.value}
                    type={"text"}
                    onChange={setDescricaoLocal}
                />
                <IconButton onClick={salvar} className="edit-save">
                    <Save />
                </IconButton>
            </div>
        </div>
    );
};

export default EditModal;
