import { getRandomBlocks } from "../utils/blocks.ts";
import { logRollResult } from "../utils/resultRoll.ts";
import { rollDice } from "./rollDice.ts";

export async function raceEngine(player1, player2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`\n🏁 Rodada ${round}`);

    let block = await getRandomBlocks();
    console.log(`\nBloco: ${block}\n`);

    let diceResultPlayer1 = await rollDice();
    let diceResultPlayer2 = await rollDice();

    let totalTesteSkillPlayer1 = 0;
    let totalTesteSkillPlayer2 = 0;

    if (block === "RETA") {
      totalTesteSkillPlayer1 = diceResultPlayer1 + player1.speed;
      totalTesteSkillPlayer2 = diceResultPlayer2 + player2.speed;

      await logRollResult(
        player1,
        "velocidade",
        diceResultPlayer1,
        player1.speed
      );
      await logRollResult(
        player2,
        "velocidade",
        diceResultPlayer2,
        player2.speed
      );
    } else if (block === "CURVA") {
      totalTesteSkillPlayer1 = diceResultPlayer1 * 2 + player1.drift;
      totalTesteSkillPlayer2 = diceResultPlayer2 * 2 + player2.drift;

      await logRollResult(
        player1,
        "manobrabilidade",
        diceResultPlayer1,
        player1.drift
      );
      await logRollResult(
        player2,
        "manobrabilidade",
        diceResultPlayer2,
        player2.drift
      );
    } else if (block === "CONFRONTO") {
      let powerResultPlayer1 = diceResultPlayer1 + player1.power;
      let powerResultPlayer2 = diceResultPlayer2 + player2.power;

      console.log(`${player1.name} confrontou com ${player2.name}!🥊`);

      await logRollResult(player1, "poder", diceResultPlayer1, player1.power);
      await logRollResult(player2, "poder", diceResultPlayer2, player2.power);

      if (powerResultPlayer1 > powerResultPlayer2 && player2.points > 0) {
        console.log(
          `\n${player1.name} venceu o confronto e ${player2.name} perdeu 1 ponto!🤕\n`
        );
        player2.points--;
      } else if (
        powerResultPlayer2 > powerResultPlayer1 &&
        player1.points > 0
      ) {
        console.log(
          `\n${player2.name} venceu o confronto e ${player1.name} perdeu 1 ponto!🤕\n`
        );
        player1.points--;
      } else if (powerResultPlayer2 === powerResultPlayer1) {
        console.log("🤝 Empate no confronto, nenhum ponto foi perdido!\n");
      }
      console.log("--------------------------------------");
      continue;
    }

    if (totalTesteSkillPlayer1 > totalTesteSkillPlayer2) {
      console.log(`\n${player1.name} marcou 1 ponto!\n`);
      player1.points++;
    } else if (totalTesteSkillPlayer2 > totalTesteSkillPlayer1) {
      console.log(`\n${player2.name} marcou 1 ponto!\n`);
      player2.points++;
    } else {
      console.log(`🤝 Empate na rodada!\n`);
    }

    console.log("--------------------------------------");
  }
}