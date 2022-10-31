const usuarios = [
  {
    nome: "André",
    idade: 29,
    habilitado: true,
  },
  {
    nome: "Marcos",
    idade: 70,
    habilitado: true,
  },
  {
    nome: "Ana",
    idade: 35,
    habilitado: true,
  },
  {
    nome: "Vinícius",
    idade: 44,
    habilitado: true,
  },
  {
    nome: "Carlos",
    idade: 17,
    habilitado: true,
  },
  {
    nome: "Maria",
    idade: 19,
    habilitado: true,
  },
];

const validaHabilitação = usuarios
  .filter(({ idade }) => idade >= 18 && idade <= 65)
  .every(({ habilitado }) => habilitado === true);

validaHabilitação
  ? console.log("todos precisam estão habilitados")
  : console.log("todos precisam estar habilitados");
