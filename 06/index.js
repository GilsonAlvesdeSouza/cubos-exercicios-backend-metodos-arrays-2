const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];

const validaCidade = cidades.filter((cidade) => cidade.length <= 8);

validaCidade
  ? console.log(validaCidade)
  : console.log("nenhum resultado encontrado");
