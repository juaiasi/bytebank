export class Conta{
    //ao inves de declarar as variáveis fora do constructor, posso declarar direto dentro
    constructor(saldo,cliente,agencia){
        this._saldo = saldo;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    static numeroDeContas = 0;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        let taxa = 1
        const valorSacado = taxa * valor
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}