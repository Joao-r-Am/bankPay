import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("João", 11122233345);
const cliente2 = new Cliente("Vitor", 22233344456);

const ContaCorrenteJoao = new ContaCorrente(1001, cliente1);
ContaCorrenteJoao.depositar(500)

const conta2 = new ContaCorrente(1002, cliente2);

let valor = 200;
ContaCorrenteJoao.transferir(valor, conta2);

console.log(ContaCorrenteJoao);
console.log(ContaCorrente.numeroDeContas);