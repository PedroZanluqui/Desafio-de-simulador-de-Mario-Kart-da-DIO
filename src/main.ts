import { getRandomBlocks } from "./utils/blocks.ts";
import {
  Bowser,
  DonkeyKong,
  Luigi,
  Mario,
  Peach,
  Yoshi,
} from "./components/racers.ts";
import { rollDice } from "./components/rollDice.ts";
import promptSync from "prompt-sync";
import { logRollResult } from "./utils/resultRoll.ts";
import { raceEngine } from "./components/raceEngine.ts";
import { declareWinner } from "./components/winner.ts";

const prompt = promptSync();
const racers = [Bowser, DonkeyKong, Luigi, Mario, Peach, Yoshi];

(async function main() {
  console.log("\nPersonagens disponíveis:\n");
  racers.forEach((racer) => console.log(`- ${racer.name}\n`));

  const racerChoice1 = prompt("Escolha o primeiro corredor: ");
  const racerChoice2 = prompt("Escolha o segundo corredor: ");

  const player1 = racers.find(
    (racer) => racer.name.toLowerCase() === racerChoice1.toLowerCase()
  );
  const player2 = racers.find(
    (racer) => racer.name.toLowerCase() === racerChoice2.toLowerCase()
  );

  if (!player1 || !player2) {
    console.log("Jogador não foi encontrado, tente novamente");
    return;
  }

  console.log(
    `\n🏁🚨 Corrida iniciada entre ${player1.name} e ${player2.name}! 🏁🚨\n`
  );
  await raceEngine(player1, player2);
  await declareWinner(player1, player2);
})();
