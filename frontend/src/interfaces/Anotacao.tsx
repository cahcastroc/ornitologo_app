import Ave from "./Ave";

export default interface Anotacao {
    id: number;
    dataHorarioDoAvistamento: string;
    comentario: string;
    tamanho: string;
    corPredominante: string;
    criadoEm: string;
    atualizadoEm: string;
    ave: Ave
}
