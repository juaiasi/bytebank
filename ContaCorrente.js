import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    agencia;
    _saldo = 0;
    //estão estudando de usar #saldo para privados
    _cliente;


    //setters
    set cliente(novoValor){
        if (novoValor instanceof Cliente){
            this._cliente = novoValor 
        }
    }

    //getters
    get cliente(){
        return this._cliente
    }

    // evita que apessoa atribua um valor tentando fazer "conta.saldo = 5000", só se tiver um setter
    get saldo(){
        return this._saldo
    }
    

    //métodos
    sacar(valor){
        if(valor <= this._saldo){
            this._saldo -= valor
            return valor
        }
    }
    depositar(valor){
        if(valor<0) return
        //early return: se estiver errado nem segue

        this._saldo += valor
    }
                //copia //referencia
    transferir(valor,conta){
        conta.ativo = true //esse parametro não existe já em conta, é criado dinamicamente quando chama essa função
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
        //se modificar o valor aqui dentro, não modifica lá fora.
        //se modificar a conta, como é referência, isso modifica fora também
    }
}
