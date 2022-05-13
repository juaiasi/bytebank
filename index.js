import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1,"45435");
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupancaRicardo = new ContaPoupanca(1001,cliente1, "45435")

console.log(contaCorrenteRicardo);
console.log(contaPoupancaRicardo);