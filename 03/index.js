const palavras = ["arroz", "feijão", "carne", "vodka", "macarrão"];

const validaPalavras = palavras.find((palavra) => {
  if (palavra === "cerveja" || palavra === "vodka") {
    return palavra;
  }
});

validaPalavras
  ? console.log(
      `revise sua lista, joão. possui bebida com venda proibida! produto => "${validaPalavras}"`
    )
  : console.log("Nunhum produto encontrado");
