
/*1
// Tipos básicos em TypeScript

let nome: string = "João";
console.log("Nome:", nome);


let idade: number = 25;
console.log("Idade:", idade);


let isAtivo: boolean = true;
console.log("Está ativo?", isAtivo);

let numeros: number[] = [1, 2, 3, 4, 5];
console.log("Números:", numeros);

let pessoa: [string, number] = ["João", 25];
console.log("Pessoa:", pessoa);


let valorAleatorio: any = "Olá Mundo!";
console.log("Valor aleatório:", valorAleatorio);


function saudacao(): void {
  console.log("Olá, bem-vindo!");
}
saudacao();

let valorNulo: null = null;
let valorIndefinido: undefined = undefined;
console.log("Valor Nulo:", valorNulo);
console.log("Valor Indefinido:", valorIndefinido);


valorAleatorio = 42; 
function erro(): void {
  
}
*/

/*2
function somarElementos(arr: number[]): number {
    let soma: number = 0; 
  
    for (let i = 0; i < arr.length; i++) {
      soma += arr[i];
    }
  
    return soma; 
  }
  
  let numeros: number[] = [1, 2, 3, 4, 5];
  let resultado: number = somarElementos(numeros);
  
  console.log("Soma dos elementos:", resultado); 
  */

/*3
  // Definindo o enum para os dias da semana
enum DiaDaSemana {
    Domingo = "Domingo",
    Segunda = "Segunda-feira",
    Terca = "Terça-feira",
    Quarta = "Quarta-feira",
    Quinta = "Quinta-feira",
    Sexta = "Sexta-feira",
    Sabado = "Sábado"
  }
  
  
  function mensagemDoDia(dia: DiaDaSemana): void {
    switch (dia) {
      case DiaDaSemana.Domingo:
        console.log("Hoje é dia de descansar!");
        break;
      case DiaDaSemana.Segunda:
        console.log("Comece a semana com energia!");
        break;
      case DiaDaSemana.Terca:
        console.log("É terça-feira, a semana está só começando!");
        break;
      case DiaDaSemana.Quarta:
        console.log("Quarta-feira, estamos na metade da semana!");
        break;
      case DiaDaSemana.Quinta:
        console.log("Quase lá! Quinta-feira chegou.");
        break;
      case DiaDaSemana.Sexta:
        console.log("Sextou! O final de semana está quase aí.");
        break;
      case DiaDaSemana.Sabado:
        console.log("Sábado é dia de relaxar e se divertir!");
        break;
      default:
        console.log("Dia inválido.");
    }
  }
  

  mensagemDoDia(DiaDaSemana.Segunda); 
  mensagemDoDia(DiaDaSemana.Sexta); 
  */

  
/*4
type Produto = [string, number];


function imprimirProduto(produto: Produto): void {
  const [nome, preco] = produto; 
  console.log(`Produto: ${nome}`);
  console.log(`Preço: R$ ${preco.toFixed(2)}`);
}


const produto: Produto = ["Camiseta", 49.99];


imprimirProduto(produto); 
*/

/*5
let valor: any;


valor = "Texto"; 
console.log("String:", valor);

valor = 42; 
console.log("Número:", valor);

valor = true; 
console.log("Booleano:", valor);

valor = [1, 2, 3]; 
console.log("Array de números:", valor);

valor = { nome: "João", idade: 30 }; 
console.log("Objeto:", valor);

valor = null; 
console.log("Null:", valor);

valor = undefined; 
console.log("Undefined:", valor);


valor = () => console.log("Função atribuída");
valor(); 
*/

/*6
function funcaoVoid(): void {
    console.log("Esta função não retorna nada!");
  }
  
 
  function funcaoUndefined(): undefined {
    console.log("Esta função retorna 'undefined' explicitamente.");
    return undefined;
  }
  
 
  funcaoVoid(); 
  const resultadoVoid = funcaoVoid();
  console.log("Resultado da função void:", resultadoVoid); 
  
  funcaoUndefined(); 
  const resultadoUndefined = funcaoUndefined();
  console.log("Resultado da função que retorna undefined:", resultadoUndefined); 
  */