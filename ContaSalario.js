import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    constructor(cliente){
        super(0,cliente) //posso escolher não incluir um dos atributos por exemplo
    }

    sacar(valor){
        let taxa = 1.01
        return this._sacar(valor,taxa)
    }
}