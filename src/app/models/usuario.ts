export class Usuario {
    _id?: number;
    nome: string;
    email: string;
    senha: string;

    constructor(nome: string, email: string, senha: string) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}