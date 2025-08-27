export async function logRollResult(player, block, diceResult, attribute) {
  console.log(
    `${
      player.name
    } 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}