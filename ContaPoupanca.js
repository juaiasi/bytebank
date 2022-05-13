import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    static numeroDeContas = 0;
    //saldo poupanca precisa de um saldo inicial
    constructor(saldoInicial,cliente,agencia){
        super(saldoInicial,cliente,agencia); //como está dentro do construtor, puxa o construtor do Conta. funciona como new Conta()
        ContaPoupanca.numeroDeContas += 1;
    }

    sacar(valor){
        // super.sacar() //permite adicionar coisas com a função da super classe já existente
        // sem isso, sobrescreve o comportamento da classe mãe (funciona no lugar), como abaixo:
        let taxa = 1.02
        return this._sacar(valor,taxa)
    }
}