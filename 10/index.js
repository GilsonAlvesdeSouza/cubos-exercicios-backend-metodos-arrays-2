const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const pares = numeros.filter((numeros) => numeros % 2 == 0);

pares ? console.log(pares) : console.log("Nenhum resultado encontrado!");
