const enderecos = [
  { cep: "00111222", rua: "Rua dos Artistas" },
  { cep: "00111333", rua: "Rua Augusta" },
  { cep: "00222444", rua: "Avenida Paralela" },
  { cep: "11222333", rua: "Rua Carlos Gomes" },
];

const CEP = "00222444";

const buscarRua = enderecos.find((end) => end.cep === CEP);

buscarRua
  ? console.log(`${buscarRua.rua}`)
  : console.log("Endereço não encontrado");
