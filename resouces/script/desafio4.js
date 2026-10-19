// Array com 5 livros brasileiros
let livros = [
  "O Cortiço",
  "Grande Sertão: Veredas",
  "Dom Casmurro",
  "Memórias Póstumas de Brás Cubas",
  "Vidas Secas"
];

let livroProcurado = prompt("Digite o nome do livro que deseja buscar:");

let posicao = livros.indexOf(livroProcurado);

if (posicao === -1) {
  console.log("O livro não foi encontrado.");
} else {
  console.log("Livro encontrado na posição " + posicao + ".");
}