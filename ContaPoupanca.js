import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    static numeroDeContas = 0;
    //saldo poupanca precisa de um saldo inicial
    constructor(saldoInicial,cliente,agencia){
        super(saldoInicial,cliente,agencia); //como está dentro do construtor, puxa o construtor do Conta. funciona como new Conta()
        ContaPoupanca.numeroDeContas += 1;
    }
}