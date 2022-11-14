import Ave from "./IAve";

interface ILocalizazao{
    latitude: string,
    longitude: string
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
  localizacao: ILocalizazao
}

