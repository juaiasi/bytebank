import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


//Conta1
const cliente1 = new Cliente("João","23423423")
//Conta 2
const cliente2 = new Cliente("Alice","45345")
// funcionava quando não havia constructor:
// cliente1.nome = "João"
// cliente1.cpf = "23423423"



const conta1 = new ContaCorrente();
conta1.agencia = "123"
conta1.cliente = cliente1
conta1.depositar(4000)
conta1.sacar(20)

const conta2 = new ContaCorrente()
conta2.cliente = cliente2
conta2.depositar(200)
conta2.transferir(100,conta1)
// cliente2.cpf = 1134234 //não permite modificar porque é privado e só tem getter
// cliente2.nome = "Teste" //permite porque não é privado

//Conta 3
//teste de instanciar o cliente direto de dentro da conta
const conta3 = new ContaCorrente()
conta3.cliente = new Cliente("Ananias","453534")



console.log(conta3.cliente.nome)
console.log(conta3)
console.log(conta1)
console.log(conta2)
console.log(cliente1)
console.log("Número de clientes: ",Cliente.numeroClientes) //acessando um atributo estático, que é tem um valor global

