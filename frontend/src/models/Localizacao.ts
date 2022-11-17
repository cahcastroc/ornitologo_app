import { ILocalizacao } from "../interfaces/ILocalizacao";

export class Localizacao implements ILocalizacao{
    lat: string;
    longt: string;
    descricao: string;

    constructor(body: ILocalizacao){
        this.lat = body.lat;
        this.longt = body.longt;
        this.descricao = body.descricao? body.descricao: "";
    }
}