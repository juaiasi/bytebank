import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    //saldo conta corrente não precisa de um saldo inicial
    constructor(cliente,agencia){
        super(0,cliente,agencia); //como está dentro do construtor, puxa o construtor do Conta. funciona como new Conta()
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        // super.sacar() //permite adicionar coisas com a função da super classe já existente
        // sem isso, sobrescreve o comportamento da classe mãe (funciona no lugar), como abaixo:
        let taxa = 1.1
        return this._sacar(valor,taxa)
    }
    
}
