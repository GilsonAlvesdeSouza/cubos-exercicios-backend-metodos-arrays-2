const nomes = [
  "Maria",
  "João",
  "José",
  "Antonio",
  "Beatriz",
  "Camila",
  "amanda",
];

const filtraNomes = nomes.filter((nome) => nome[0] === "a" || nome[0] === "A");

filtraNomes.length > 0
  ? console.log(filtraNomes)
  : console.log("nenhum resultado encontrado!");
