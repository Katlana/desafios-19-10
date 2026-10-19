
let jogos = [
  "Minecraft",
  "The Sims",
  "Roblox",
  "Terraria",
  "Stardew Valley"
];


let jogoEscolhido = prompt("Digite o nome de um jogo:");

if (jogos.includes(jogoEscolhido)) {
  console.log("O jogo " + jogoEscolhido + " está na lista!");
} else {
  console.log("O jogo " + jogoEscolhido + " NÃO está na lista!");
}