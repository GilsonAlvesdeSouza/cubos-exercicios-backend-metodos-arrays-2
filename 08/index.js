const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const arrayModificado = frutas.map((fruta, index) => {
  let formataTexto = "";
  formataTexto = fruta[0].toUpperCase() + fruta.slice(1).toLowerCase();
  return `${index} - ${formataTexto}`;
});

console.log(arrayModificado);
