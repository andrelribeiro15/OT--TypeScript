/*1
interface Pessoa {
    nome: string;
    idade: number;
  }
  
  interface Endereco {
    rua: string;
    cidade: string;
    estado: string;
  }
  
 
  function processarInformacoes(param: string | number, detalhes: Pessoa & Endereco): void {
    console.log("Parâmetro:", param);
  
    console.log("Nome:", detalhes.nome);
    console.log("Idade:", detalhes.idade);
    console.log("Rua:", detalhes.rua);
    console.log("Cidade:", detalhes.cidade);
    console.log("Estado:", detalhes.estado);
  }
  
  const pessoaEndereco = {
    nome: "João",
    idade: 30,
    rua: "Rua das Flores",
    cidade: "São Paulo",
    estado: "SP"
  };
  
  processarInformacoes(42, pessoaEndereco);
  
  processarInformacoes("Identificação de cliente", pessoaEndereco);
  */


/*2
type TipoCondicional<T extends boolean> = T extends true ? string : number;

function exemploCondicional<T extends boolean>(valor: T, parametro: TipoCondicional<T>): void {
  console.log("Valor:", valor);
  console.log("Parametro:", parametro);
  if (valor) {
    console.log("O parâmetro é uma string:", parametro);
  } else {
    console.log("O parâmetro é um número:", parametro);
  }
}

exemploCondicional(true, "Olá, Mundo!");

exemploCondicional(false, 42);
*/



/*3
interface Configuracao {
    tema: string;
    cor: string;
    tamanhoFonte: number;
  }
  
  function aplicarConfiguracoesParciais(config: Partial<Configuracao>): void {
    console.log("Configuração aplicada:", config);
  }
  
  aplicarConfiguracoesParciais({ tema: "escuro" });
  aplicarConfiguracoesParciais({ cor: "azul", tamanhoFonte: 14 });
  
  
  function aplicarConfiguracaoNaoModificavel(config: Readonly<Configuracao>): void {
    console.log("Configuração não modificável:", config);
  }
  
  const configuracaoCompleta: Configuracao = {
    tema: "escuro",
    cor: "preto",
    tamanhoFonte: 16
  };
  
  aplicarConfiguracaoNaoModificavel(configuracaoCompleta);
  
  */


/*4
type MapaDeCapitais = Record<string, string>;

function buscarCapital(pais: string, mapa: MapaDeCapitais): string {
  const capital = mapa[pais];
  if (capital) {
    return `A capital de ${pais} é ${capital}.`;
  } else {
    return `Capital de ${pais} não encontrada.`;
  }
}

const capitais: MapaDeCapitais = {
  Brasil: "Brasília",
  EstadosUnidos: "Washington, D.C.",
  França: "Paris",
  Alemanha: "Berlim",
  Japão: "Tóquio"
};

console.log(buscarCapital("Brasil", capitais));

console.log(buscarCapital("França", capitais));

console.log(buscarCapital("Índia", capitais));
*/



/*5
interface Configuracao {
    tema: string;
    cor: string;
    tamanhoFonte: number;
  }
  
  function criarListaDeConfiguracoes<T>(configuracoes: Partial<T>[]): Partial<T>[] {
    return configuracoes;
  }
  
  const listaConfiguracoes: Partial<Configuracao>[] = [
    { tema: "escuro" },
    { cor: "azul", tamanhoFonte: 14 },
    { tema: "claro", cor: "verde" }
  ];
  
  console.log(criarListaDeConfiguracoes(listaConfiguracoes));
 */ 