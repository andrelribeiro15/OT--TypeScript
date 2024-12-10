
/*1
interface Contato {
    email: string;
    telefone: string;
  }
  
 
  function imprimeContato(contato: Contato): void {
    console.log(`Email: ${contato.email}`);
    console.log(`Telefone: ${contato.telefone}`);
  }
  

  const meuContato: Contato = {
    email: "exemplo@dominio.com",
    telefone: "1234-5678"
  };
  
  
  imprimeContato(meuContato);
  */

/*2
type OperacaoMatematica = (a: number, b: number) => number;

const soma: OperacaoMatematica = (a, b) => a + b;
const subtracao: OperacaoMatematica = (a, b) => a - b;
const multiplicacao: OperacaoMatematica = (a, b) => a * b;
const divisao: OperacaoMatematica = (a, b) => b !== 0 ? a / b : NaN; 


console.log("Soma:", soma(10, 5));         
console.log("Subtração:", subtracao(10, 5));  
console.log("Multiplicação:", multiplicacao(10, 5)); 
console.log("Divisão:", divisao(10, 5)); 
console.log("Divisão por zero:", divisao(10, 0));
*/

/*3
interface Configuracao {
    background?: string;
    tema: string;
    idioma: string;
  }
  
  function definirConfiguracao(config: Configuracao): void {
    if (config.background) {
      console.log(`Configuração: Tema - ${config.tema}, Idioma - ${config.idioma}, Background - ${config.background}`);
    } else {
      console.log(`Configuração: Tema - ${config.tema}, Idioma - ${config.idioma}, Background não definido`);
    }
  }
  
  
  const configComBackground: Configuracao = {
    tema: "escuro",
    idioma: "português",
    background: "imagem_de_fundo.jpg"
  };
  
  const configSemBackground: Configuracao = {
    tema: "claro",
    idioma: "inglês"
  };
  
  definirConfiguracao(configComBackground);  
  definirConfiguracao(configSemBackground);  
  */



 /*4
type Entrada = string | string[];


function processarEntrada(entrada: Entrada): string {
  if (Array.isArray(entrada)) {
 
    return entrada.join(", ");
  } else {
    
    return entrada;
  }
}


const resultado1 = processarEntrada("Texto simples");
const resultado2 = processarEntrada(["Texto1", "Texto2", "Texto3"]);


console.log(resultado1);  
console.log(resultado2); 

*/

/*5
interface Jogo {
    nome: string;
    preco: number;
    jogar?: () => void;
  }
  
  
  function mostrarDetalhesJogo(jogo: Jogo): void {
    console.log(`Jogo: ${jogo.nome}`);
    console.log(`Preço: R$ ${jogo.preco.toFixed(2)}`);
  
    
    if (jogo.jogar) {
      console.log("Você pode jogar agora! Vamos lá!");
      jogo.jogar();
    } else {
      console.log("Este jogo ainda não está disponível para jogar.");
    }
  }
  

  const jogo1: Jogo = {
    nome: "Super Jogo",
    preco: 59.90,
    jogar: () => {
      console.log("Iniciando o jogo...");
    }
  };
  

  const jogo2: Jogo = {
    nome: "Jogo de Aventura",
    preco: 49.90
  };
  
 
  mostrarDetalhesJogo(jogo1); 
  mostrarDetalhesJogo(jogo2); 
  */