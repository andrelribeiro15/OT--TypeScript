
/*1
function primeiroElemento<T>(array: T[]): T | undefined {
    return array[0];
  }

 
  const numeros = [1, 2, 3, 4, 5];
  console.log(primeiroElemento(numeros));
  
 
  const palavras = ["apple", "banana", "cherry"];
  console.log(primeiroElemento(palavras)); 
  
  const objetos = [{ nome: "João" }, { nome: "Maria" }];
  console.log(primeiroElemento(objetos)); 
 */ 


 /*2
interface Pilha<T> {
    push(elemento: T): void;
    pop(): T | undefined;
    topo(): T | undefined;
  }
  
  
  class PilhaArray<T> implements Pilha<T> {
    private elementos: T[] = [];
  
  
    push(elemento: T): void {
      this.elementos.push(elemento);
    }
  
 
    pop(): T | undefined {
      return this.elementos.pop();
    }
  

    topo(): T | undefined {
      return this.elementos[this.elementos.length - 1];
    }
  }
  
  
  const pilhaNumeros = new PilhaArray<number>();
  
  
  pilhaNumeros.push(10);
  pilhaNumeros.push(20);
  pilhaNumeros.push(30);
  
  
  console.log(pilhaNumeros.topo());
  

  console.log(pilhaNumeros.pop());  
  console.log(pilhaNumeros.topo());  
  
  
  const pilhaStrings = new PilhaArray<string>();
  

  pilhaStrings.push("apple");
  pilhaStrings.push("banana");
  pilhaStrings.push("cherry");
  

  console.log(pilhaStrings.topo());  
  
  console.log(pilhaStrings.pop());  
  console.log(pilhaStrings.topo());  
  */



/*3
class Mapa<K, V> {
    private mapa: { [key: string]: V } = {};
  
    
    adicionar(chave: K, valor: V): void {
      const chaveString = JSON.stringify(chave);  
      this.mapa[chaveString] = valor;
    }

    buscar(chave: K): V | undefined {
      const chaveString = JSON.stringify(chave);  
      return this.mapa[chaveString];
    }
  
    
    contemChave(chave: K): boolean {
      const chaveString = JSON.stringify(chave); 
      return chaveString in this.mapa;
    }
  }
  
  
  const mapaNumeros = new Mapa<string, number>();
  
  mapaNumeros.adicionar("um", 1);
  mapaNumeros.adicionar("dois", 2);
  mapaNumeros.adicionar("tres", 3);
  
 
  console.log(mapaNumeros.buscar("um"));    
  console.log(mapaNumeros.buscar("dois"));  
  console.log(mapaNumeros.buscar("quatro")); 
  

  console.log(mapaNumeros.contemChave("tres"));  
  console.log(mapaNumeros.contemChave("cinco")); 
  
  const mapaNomes = new Mapa<number, string>();
  
  mapaNomes.adicionar(1, "João");
  mapaNomes.adicionar(2, "Maria");
  
  console.log(mapaNomes.buscar(1));  
  console.log(mapaNomes.buscar(3));  
 */



 /*4
function processarElemento<T extends string | any[]>(entrada: T): T {
    if (typeof entrada === 'string') {
      console.log(`A string tem ${entrada.length} caracteres.`);
    } else {
      console.log(`O array tem ${entrada.length} elementos.`);
    }
    return entrada; 
  }
  

  
  
  const resultadoString = processarElemento("Olá, Mundo!");

  
 
  const resultadoArray = processarElemento([1, 2, 3, 4, 5]);
 
  */


  /*5
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 }; 
  }
  
  

  const objeto1 = { nome: "João", idade: 30 };
  const objeto2 = { cidade: "São Paulo", pais: "Brasil" };
  

  const objetoCombinado = mergeObjects(objeto1, objeto2);
  
  console.log(objetoCombinado); 
 
  
  const produto = { nome: "Camiseta", preco: 49.99 };
  const estoque = { quantidade: 100, local: "Depósito A" };
  
  const produtoEstoque = mergeObjects(produto, estoque);
  
  console.log(produtoEstoque); 
 */ 
  
 
