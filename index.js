import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1,"45435");
contaCorrenteRicardo.depositar(1000);
contaCorrenteRicardo.sacar(50);

const contaPoupancaRicardo = new ContaPoupanca(1000,cliente1, "45435")
contaPoupancaRicardo.sacar(50)

console.log(contaCorrenteRicardo);
console.log(contaPoupancaRicardo);
