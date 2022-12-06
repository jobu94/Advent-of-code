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

function game(opponent, player) {
  if (opponent === player) {
    return player + 3;
  } else if (
    opponent.rock === player.paper ||
    opponent.paper === player.scissors ||
    opponent.scissors === player.rock
  ) {
    return player + 6;
  }
  return player;
}
// let score = 0;
let score = [];

for (const line of data) {
  //   score += game(line[0], line[1]);
  score.push(game(line[0], line[1]));
}
console.log(score);
