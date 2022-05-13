//classe abstrata. Deve dar erro ao tentar instanciar
export class Conta{
    //ao inves de declarar as variáveis fora do constructor, posso declarar direto dentro:
    constructor(saldo,cliente,agencia){
        if(this.constructor === Conta ){ //se for um constructor do tipo Conta - para não herdar para as filhas
            throw new Error("Você não pode instanciar uma classe abstrata.") //simula uma classe abstrata
        }
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

    //método abstrato - feito para ser sempre sobrescrito, por isso deixa vazio
    sacar(valor){
        throw new Error("Método sacar é abstrato, precisa ser sobrescrito para funcionar")
        // let taxa = 1 //o que pode modificar
        // return this._sacar(valor,taxa)
    }

    _sacar(valor,taxa){ //método privado, que vai se manter igual para as classes filhas - usado pelo método com mesmo nome
        const valorSacado = taxa * valor
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0
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