let notas = [8, 7, 9, 4, 6, 10];

let todasValidas = notas.every(function(nota) {
  return nota >= 0 && nota <= 10;
});

if (todasValidas) {
  console.log("Todas as notas são válidas.");
} else {
  console.log("Existem notas fora do intervalo permitido.");
}

notas.push(12);

let todasValidasExtra = notas.every(function(nota) {
  return nota >= 0 && nota <= 10;
});

console.log("\n--- Após adicionar a nota 12 ---");
if (todasValidasExtra) {
  console.log("Todas as notas são válidas.");
} else {
  console.log("Existem notas fora do intervalo permitido.");
}