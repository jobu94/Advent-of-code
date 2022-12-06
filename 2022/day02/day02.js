"use strict";

const data = `A Y
B X
C Z`
  .split("\n")
  .map((a) =>
    a
      .replace("X", 1)
      .replace("Y", 2)
      .replace("Z", 3)
      .replace("A", 1)
      .replace("B", 2)
      .replace("C", 3)
  )
  .map((x) => x.split(" ").map(Number));
console.log(data);

// const opponent = {
//   rock: 1,
//   paper: 2,
//   scissors: 3,
// };

// const player = {
//   rock: 1,
//   paper: 2,
//   scissors: 3,
// };

function convert() {
  if (opponent === 1) {
  }
}

function game(opponentM, playerM) {
  if (opponentM === playerM) {
    return playerM + 3;
  } else if (
    opponentM.rock === playerM.paper ||
    opponentM.paper === playerM.scissors ||
    opponentM.scissors === playerM.rock
  ) {
    return playerM + 6;
  }
  return playerM;
}
let score = [];

for (const line of data) {
  score.push(game(line[0], line[1]));
}
console.log(score);
