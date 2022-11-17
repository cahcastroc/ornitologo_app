import IAnotacao from "../interfaces/IAnotacao";
import { IAve } from "../interfaces/IAve";
import { ILocalizacao } from "../interfaces/ILocalizacao";
import { IUser } from "../interfaces/IUser";

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
        this.id = body.id? body.id : 0;
        this.dataHorarioDoAvistamento = body.dataHorarioDoAvistamento? body.dataHorarioDoAvistamento: "";
        this.criadoEm = body.criadoEm? body.criadoEm : "";
        this.comentario = body.comentario;
        this.tamanho = body.tamanho;
        this.corPredominante = body.corPredominante;
        this.atualizadoEm = body?.atualizadoEm;
        this.ave = body.ave;
        this.localizacao = body.localizacao;
        this.usuarioId = body.usuarioId
    }
}