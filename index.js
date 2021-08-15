import {Cliente} from "./Cliente.js";
import { Gerente } from "./funcionarios/gerente.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./funcionarios/SistemaAutenticacao.js";

const diretor = new Diretor("Vitor", 10000, 12345678900);
diretor.cadastrarSenha("12345678900");
const gerente = new Gerente("Eduardo", 5000, 12345678911);
gerente.cadastrarSenha("12345678911")
const cliente = new Cliente ("Laura", 78945612331, "456");

const GerenteEstaLogado = SistemaAutenticacao.login(gerente, "12345678911");
const DiretotEstaLogado = SistemaAutenticacao.login(diretor, "12345678900");

const ClienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(GerenteEstaLogado, DiretotEstaLogado, ClienteEstaLogado);