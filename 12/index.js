const pessoas = [
  {
    nome: "Antonio",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Maria",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Ana",
    idade: 21,
    profissao: "Programador",
  },
  {
    nome: "Beatriz",
    idade: 20,
    profissao: "Programador",
  },
  {
    nome: "José",
    idade: 32,
    profissao: "Jornalista",
  },
  {
    nome: "Marcos",
    idade: 30,
    profissao: "Programador",
  },
];

const resultado = pessoas.filter(
  ({ idade, profissao }) => idade > 20 && profissao === "Programador"
);

resultado.length > 0
  ? console.log(resultado)
  : console.log("Nenhum resultado encontrado!");
