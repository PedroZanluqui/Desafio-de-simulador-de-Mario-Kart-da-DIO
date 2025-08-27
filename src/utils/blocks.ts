export async function getRandomBlocks() {
  let random = Math.random();
  let results;
  switch (true) {
    case random <= 0.33:
      results = "RETA";
      break;
    case random <= 0.66:
      results = "CURVA";
      break;
    default:
      results = "CONFRONTO";
  }
  return results;
}