const numeros = [0, 122, 4, 9, 12, 8, 44];

const pares = numeros.every((numero) => numero % 2 === 0);

pares ? console.log("array válido") : console.log("array inválido");
