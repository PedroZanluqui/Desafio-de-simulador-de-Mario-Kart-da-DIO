export async function declareWinner(player1, player2) {
  console.log(`\n🏆 Placar final:`);
  console.log(`${player1.name}: ${player1.points} ponto(s)`);
  console.log(`${player2.name}: ${player2.points} ponto(s)`);

  if (player1.points > player2.points) {
    console.log(`\n🎉 ${player1.name} venceu a corrida!`);
  } else if (player2.points > player1.points) {
    console.log(`\n🎉 ${player2.name} venceu a corrida!`);
  } else {
    console.log(`\nA corrida terminou em empate!`);
  }
}