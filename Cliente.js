export class Cliente{
    //removidos os atributos que estavam declarados aqui, o recomendado é já colocá-los dentro do constructor.
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
    
    get cpf(){
        return this._cpf;
    }
}