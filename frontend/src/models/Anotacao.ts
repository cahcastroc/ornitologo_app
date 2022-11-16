import IAnotacao from "../interfaces/IAnotacao";
import IAve from "../interfaces/IAve";
import { ILocalizacao } from "../interfaces/ILocalizacao";
import { IUser } from "../interfaces/User";

export class Anotacao implements IAnotacao{
    id: number;
    dataHorarioDoAvistamento: string;
    comentario: string;
    tamanho: string;
    corPredominante: string;
    criadoEm: string;
    atualizadoEm?: string;
    ave: IAve;
    localizacao: ILocalizacao;
    usuarioId: number
    
    constructor(body: IAnotacao){
        this.id = body.id;
        this.dataHorarioDoAvistamento = body.dataHorarioDoAvistamento;
        this.comentario = body.comentario;
        this.tamanho = body.tamanho;
        this.corPredominante = body.corPredominante;
        this.criadoEm = body.criadoEm;
        this.atualizadoEm = body?.atualizadoEm;
        this.ave = body.ave;
        this.localizacao = body.localizacao;
        this.usuarioId = body.usuarioId
    }
}