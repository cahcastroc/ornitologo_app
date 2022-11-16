import IAve from "./IAve";
import { ILocalizacao } from "./ILocalizacao";
import { IUser } from "./User";

interface ILocalizazao {
    lat: string;
    longt: string;
    descricao: string;
}

export default interface IAnotacao {
    id: number;
    dataHorarioDoAvistamento: string;
    comentario: string;
    tamanho: string;
    corPredominante: string;
    criadoEm: string;
    atualizadoEm: string;
    ave: Ave;
    localizacao: ILocalizazao;
    usuarioId: number;
}
