import {Cliente} from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Conta } from "./Conta/Conta.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrente = new ContaCorrente(cliente1,"45435");
contaCorrente.depositar(1000);
contaCorrente.sacar(50);

const contaPoupanca = new ContaPoupanca(1000,cliente1, "45435")
contaPoupanca.sacar(50)

// const teste = new Conta(0,cliente1,"45435") //dá erro

////////////

const gerente = new Gerente("Tadeu",10000,45765675)
const diretor = new Diretor("Jonas",10000,23423423)
diretor.cadastrarSenha("123123123")

const estaLogado = SistemaAutenticacao.login(diretor,"123123123")
console.log(estaLogado)