import {Cliente} from "./Cliente.js"
import { Conta } from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrente = new ContaCorrente(cliente1,"45435");
contaCorrente.depositar(1000);
contaCorrente.sacar(50);

const contaPoupanca = new ContaPoupanca(1000,cliente1, "45435")
contaPoupanca.sacar(50)

const teste = new Conta(0,cliente1,"45435")

console.log(contaCorrente);
console.log(contaPoupanca);
console.log(teste)