const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

const positivos = numeros.filter((numero) => numero > -1);

positivos
  ? console.log(positivos)
  : console.log("Nenhum resultado encontrado!");
