/*1
class Carro {
    marca: string;
    modelo: string;
    ano: number;
  
   
    constructor(marca: string, modelo: string, ano: number) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
  
    
    descricao(): void {
      console.log(`Carro: ${this.marca} ${this.modelo} - Ano: ${this.ano}`);
    }
  }
  
 
  const meuCarro = new Carro("Toyota", "Corolla", 2021);
  
  
  meuCarro.descricao();
  */



/*2
class Carro {
    marca: string;
    modelo: string;
    ano: number;
  
  
    constructor(marca: string, modelo: string, ano: number) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
  
 
    descricao(): void {
      console.log(`Carro: ${this.marca} ${this.modelo} - Ano: ${this.ano}`);
    }
  }
  

  class CarroEletrico extends Carro {
    capacidadeBateria: number; 
  
 
    constructor(marca: string, modelo: string, ano: number, capacidadeBateria: number) {
      super(marca, modelo, ano); 
      this.capacidadeBateria = capacidadeBateria;
    }
  
    
    descricao(): void {
   
      super.descricao();
      console.log(`Capacidade da bateria: ${this.capacidadeBateria} kWh`);
    }
  }
  
 
  const meuCarroEletrico = new CarroEletrico("Tesla", "Model S", 2022, 100);
  
 
  meuCarroEletrico.descricao();
*/ 




/*3
class Conta {
    
    private saldo: number;
  
   
    constructor(saldoInicial: number) {
      this.saldo = saldoInicial;
    }
  
    
    depositar(valor: number): void {
      if (valor > 0) {
        this.saldo += valor;
        console.log(`Depositado: R$ ${valor}. Novo saldo: R$ ${this.saldo}`);
      } else {
        console.log("Valor do depósito deve ser positivo.");
      }
    }
  
   
    obterSaldo(): number {
      return this.saldo;
    }
  }
  
 
  const minhaConta = new Conta(1000);
  
  

  
  minhaConta.depositar(500);
  
  
  console.log(`Saldo atual: R$ ${minhaConta.obterSaldo()}`);
  */




/*4
class Conta {
    protected saldo: number;
  
    constructor(saldoInicial: number) {
      this.saldo = saldoInicial;
    }
  
   
    calcularJuros(): number {
      return this.saldo * 0.02; 
    }
  
 
    obterSaldo(): number {
      return this.saldo;
    }
  }
  
  
  class ContaCorrente extends Conta {
    
    constructor(saldoInicial: number) {
      super(saldoInicial); 
    }
  
    calcularJuros(): number {
      return this.saldo * 0.05; 
    }
  }
  

  const conta1 = new Conta(1000); 
  const contaCorrente = new ContaCorrente(1000); 
  
  console.log(`Juros para conta padrão: R$ ${conta1.calcularJuros()}`);
  console.log(`Juros para conta corrente: R$ ${contaCorrente.calcularJuros()}`);
  */


/*5
interface Motorizavel {
    ligarMotor(): void; 
  }
  
 
  class Barco implements Motorizavel {
   
    nome: string;
  
    constructor(nome: string) {
      this.nome = nome;
    }
  
   
    ligarMotor(): void {
      console.log(`O motor do barco ${this.nome} foi ligado.`);
    }
  }
  
 
  class Motocicleta implements Motorizavel {
    
    modelo: string;
  
    constructor(modelo: string) {
      this.modelo = modelo;
    }
  
  
    ligarMotor(): void {
      console.log(`O motor da motocicleta ${this.modelo} foi ligado.`);
    }
  }
  

  const meuBarco = new Barco("Veleiro Azul");
  const minhaMotocicleta = new Motocicleta("Honda CB500");
  

  meuBarco.ligarMotor();
  minhaMotocicleta.ligarMotor();
  */