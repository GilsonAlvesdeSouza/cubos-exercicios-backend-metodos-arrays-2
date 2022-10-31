const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const validaPalavras = palavras.some((palavra) => palavra.length > 5);

validaPalavras === true
  ? console.log("Existe palavras inválidas")
  : console.log("Array valido");
