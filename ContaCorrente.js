import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    //saldo conta corrente não precisa de um saldo inicial
    constructor(cliente,agencia){
        super(0,cliente,agencia); //como está dentro do construtor, puxa o construtor do Conta. funciona como new Conta()
        ContaCorrente.numeroDeContas += 1;
    }
    
}
