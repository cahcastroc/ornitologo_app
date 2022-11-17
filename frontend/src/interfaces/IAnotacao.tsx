import { IAve } from "./IAve";
import { ILocalizacao } from "./ILocalizacao";

export default interface IAnotacao {
    id: number;
    dataHorarioDoAvistamento: string;
    comentario: string;
    tamanho: string;
    corPredominante: string;
    criadoEm: string;
    atualizadoEm?: string;
    ave: IAve;
    localizacao: ILocalizacao;
    usuarioId: number;
}
