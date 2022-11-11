export class User{
    email: string;
    senha: string;
    nome: string;

    constructor(email: string, senha: string, nome: string){
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }
}