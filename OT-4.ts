/*1
function concatenaNomes(nome: string, sobrenome: string): string {
    return `${nome} ${sobrenome}`;
  }

  const nomeCompleto = concatenaNomes("João", "Silva");
  
  
  console.log("Nome completo:", nomeCompleto);
 */ 


/*2
const soma = (a: number, b: number): number => a + b;


const resultado = soma(10, 15);

console.log("Resultado da soma:", resultado);
*/


/*3
function saudacao(nome: string, titulo?: string): string {
    if (titulo) {
      return `Olá, ${titulo} ${nome}!`;
    } else {
      return `Olá, ${nome}!`;
    }
  }
  
  
  const cumprimentoComTitulo = saudacao("João", "Sr.");
  const cumprimentoSemTitulo = saudacao("Maria");
  
 
  console.log(cumprimentoComTitulo); 
  console.log(cumprimentoSemTitulo); 
  */


/* 4 
function ajustar(valor: number): number;
function ajustar(valor: string): string;


function ajustar(valor: number | string): number | string {
  if (typeof valor === "number") {
    
    return valor * 2;
  } else if (typeof valor === "string") {

    return `Ajustado: ${valor}`;
  }
  throw new Error("Tipo inválido");
}

const resultadoNumero = ajustar(10); 
const resultadoString = ajustar("texto"); 

console.log("Resultado (number):", resultadoNumero); 
console.log("Resultado (string):", resultadoString); 

*/


/*5
function incrementa(numero: number, incremento: number = 1): number {
    return numero + incremento;
  }
  
  // Exemplos de uso
  const resultado1 = incrementa(10); 
  const resultado2 = incrementa(10, 5);
  
  // Imprimindo os resultados
  console.log("Resultado com incremento padrão:", resultado1); 
  console.log("Resultado com incremento fornecido:", resultado2); 
 */ 