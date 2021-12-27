// Tudo em JS é objeto
// Um objeto possui propriedades e métodos que podem ser diretos ou herdados (protótipo).
// Objeto Literal
//Um objeto possui propriedades e métodos que podem ser diretos ou herdados (protótipo).
const menu = {
  selector: '.principal',
  active() {
    const menuElement = document.querySelector(this.selector);
    menuElement.classList.add('active');
  },
};
menu.selector; // ".principal";
menu.active(); // adicionar active ao menu
menu.hasOwnProperty('class'); // método herdado

//------------------------------------------------
// Constante

const nav = {
  seletor: '.principal',
};
console.log(nav.seletor.toUpperCase());
//------------------------------------------------

// Função

function upperName(nome) {
  return nome.toUpperCase();
}
console.log(upperName('samuel'));
//------------------------------------------------

// Expressão com function

const soma = function (numero1, numero2) {
  return numero1 + numero2;
};
console.log(soma(11, 10));
//------------------------------------------------

// Arrow function
// A principal diferença para function é o contexto do this. A arrow function não cria o próprio this.

const lowerName = (name) => name.toLowerCase();

console.log(lowerName('SAMUEL'));
//------------------------------------------------

// DESESTRUTURAÇÃO
// Modo de desestruturar objetos e arrays.
// passo a passo

// const mouse = (event) =>{
//   const eixoX = event.clientX
//   const eixoY = event.clientY
// console.log(eixoX, eixoY)
// }
// document.addEventListener('click', mouse)

// const mouse = (event) =>{
//   const {clientX, clientY} = event
// console.log(clientX, clientY)
// }
// document.addEventListener('click', mouse)

const esportes = ['Corrida', 'Natação', 'handebol', 'tênis'];
const [esportes1, esportes2] = esportes;
console.log(esportes1);
console.log(esportes2);
console.log(...esportes); // utilizado Rest para retornar todos os elementos

const pRetangulo = [
  4,
  (ladoMaior, ladoMenor) => 2 * (ladoMaior + ladoMenor) + 'cm',
];
const [perimetro, lados] = pRetangulo;
console.log(perimetro);
console.log(lados(5, 3));
//------------------------------------------------
// Arrays
const frutas = ['Banana', 'Uva'];
const [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2);
// fruta1 = banana
// fruta2 = Uva
const useQuadrado = [
  4,
  function (ladoQ) {
    return 4 * ladoQ;
  },
];
const [ladosQ, area] = useQuadrado;
console.log(area(8));
//------------------------------------------------

// Rest passo a passo
// const exibicaoLista = (tipoRoupa, tamanho)=>{
//   tamanho.forEach((tamanhos) => {return console.log(tipoRoupa, tamanhos)});
// } //Sempre que houver forEach devemos utilizar uma array
// exibicaoLista('Calça', [36, 38, 40, 42, 44])

const exibicaoLista = (tipoRoupa, ...tamanho) => {
  tamanho.forEach((tamanhos) => {
    return console.log(tipoRoupa, tamanhos);
  });
}; //Sempre que houver forEach devemos utilizar uma array
exibicaoLista('Calça', 36, 38, 40, 42, 44);
//------------------------------------------------

// SPREAD passo a passo
// const menor = Math.min(99, 32, 56, 4, 6, 1, 44)
// console.log(menor)
const numeros = [99, 32, 56, 4, 6, 1, 44];
const menor = Math.min(...numeros);
console.log(menor);

const numerosContinuacao = [7, 9, ...numeros, 2, 3, 8];
console.log(numerosContinuacao);

// const veiculo = {
//   cor: 'Vermelho',
//   portas: 2
// }

// const veiculo = {
//   cor: 'Vermelho',
//   portas: 2
// }
// veiculo.ano = 2021
// console.log(veiculo)

const veiculo = {
  cor: 'Vermelho',
  portas: 2,
  rodas: 3,
};
const veiculoAtualizado = {
  ...veiculo,
  ano: 2021,
  interior: 'roxo',
  cor: 'prata', //podemos sobrescrever também os itens
};
console.log(veiculo);
console.log(veiculoAtualizado);
//------------------------------------------------

// Module
//Os módulos servem para quebrarmos o código em diferente arquivos, para facilitar a organização e compartilhamento de código comum.

// Importando duas const não um conteudo inteiro dentro de uma const ou class utilzamos a sintaxe de desestruturação e passamos o nome da função desejada
import poligono from './poligono.js';
// import { areaRetangulo} from './poligono.js'
// import {areaRetangulo, areaTriangulo} from "./poligono.js";
// console.log(areaRetangulo(3,7))
// console.log(areaTriangulo(4,7))
import sorteioNumero from './sorteioNumero.js';

console.log(poligono.areaRetangulo(3, 7));
console.log(poligono.areaTriangulo(4, 7));
console.log(sorteioNumero());
//------------------------------------------------

// Fetch
// Envia requisições assíncronas para o servidor. Serve para acessarmos/escrevermos dados em apis externas.
// passo a passo

/* fetch('https://oslogin.googleapis.com/$discovery/rest?version=v1').then((response) => response.json()).then((json) => console.log(json)); */
// url = fez requisição
// then transormou em json com uma função de callbak
// fez o consolog do json
//------------------------------------------------

// Async / Await
// Fetch retorna uma promisse. É possível criarmos funções assíncronas, que irão esperar a promisse resolver, antes de continuar com o código.

// const testApi = (url)=> {
//   const requisicao = fetch(url)
//   return requisicao
// }
// //
// const resposta = testApi('https://swapi.dev/api/planets/1/')

// console.log(resposta)

const testApi = async (url) => {
  const requisicao = await fetch(url);
  const json = await requisicao.json();
  return json;
};
/* const resposta = testApi('https://swapi.dev/api/planets/1/')
console.log(resposta)
console.log(testApi) */
//------------------------------------------------

// Arrays (Map e Filter)
// Métodos para iterarmos entre os valores de arrays.
const pagamentos = [
  'Crédito',
  'R$ 360',
  'R$ 910',
  'Contas Pagar',
  'R$ 110',
  'R$ 845',
  'Meus dados',
];

const filtrarNumeros = pagamentos.filter((valores) => valores.includes('R$'));
// Retorna uma array nova, que contem os items em que o retorno da função for verdadeiro
console.log(filtrarNumeros);

// Retorna uma nova array, modificada com o retorno de cada item da função
const transformNumberP = filtrarNumeros.map(
  (number) => +number.replace('R$ ', ''),
);
console.log(transformNumberP);

// Map e Filter retornam uma nova array, Então a array paggamentos continua a mesma
console.log(pagamentos);
//------------------------------------------------

// Expressões

const time1 = 31;
const time2 = 49;

if (time1 > time2) {
  console.log('Time 1 é campeão!');
} else if (time1 < time2) {
  console.log('Time 2 é campeão!');
} else {
  console.log('Os times empataram!');
} // if, else não é expressão

const alturaPedro = 1.89;
const alturaJoao = 1.98;

const campeao =
  alturaPedro > alturaJoao
    ? 'Pedro é mior que João!'
    : 'João é maior que Pedro';
// Operador ternário
console.log(campeao);

const modoVibrarCelular = true; // Se alterar para false o mesmo é retornado no console
const conferirModoVibrar = modoVibrarCelular && 'Modo vibrar está ativo';
console.log(conferirModoVibrar);

const numerosPares = [2, 8, 4, 10, 6];
const total = numerosPares.filter((numero) => numero > 5);
// Retorna todos os números que são maiores que 5
console.log(total);
