export class Cliente{
    nome;
    _cpf;
    static numeroClientes = 0; //atributo da classe global: modifica sempre que Cliente.numeroClientes for modificado

    get cpf(){
        return this._cpf
    }

    //permite atribuir um valor inicial para esses dois atributos na hora de instanciar, e como o cpf é privado não é possível reatribuir valor depois
    //mas depois não pode alterar, a menos que haja um setter.
    constructor(nome,cpf){
        this.nome = nome
        this._cpf = cpf
        Cliente.numeroClientes += 1
    }
}