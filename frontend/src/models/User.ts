import { IUser } from "../interfaces/User";

export class User{
    email: string;
    senha: string;
    nome?: string;

    constructor(body: IUser){
        this.email = body.email;
        this.senha = body.senha;
        this.nome = body.nome;
    }
}