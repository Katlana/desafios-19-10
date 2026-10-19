let notas =[8, 7, 9, 4, 6, 10];

let precisaRecuperacao = notas.some(function(nota) {
  return nota < 5;
});

if (precisaRecuperacao) {
  console.log("Existe pelo menos um aluno que precisa de recuperação.");
} else {
  console.log("Nenhum aluno possui nota abaixo de 5.");
}

let notasBoas = [8, 7, 9, 4, 6, 10];
let precisaRecuperacao2 = notasBoas.some(function(nota) {
  return nota < 5;
});

console.log("\n--- Teste do Desafio Extra (sem notas baixas) ---");
if (precisaRecuperacao2) {
  console.log("Existe pelo menos um aluno que precisa de recuperação.");
} else {
  console.log("Nenhum aluno possui nota abaixo de 5.");
}