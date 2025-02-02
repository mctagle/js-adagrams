// const scoreChartInfo = {
//   1: [A, E, I, O, U, L, N, R, S, T],
//   2: [D, G],
//   3: [B, C, M, P],
//   4: [F, H, V, W, Y],
//   5: [K],
//   8: [J, X],
//   10: [Q, Z],
// };

const scoreWord = (word) => {
  const scoreChart = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10,
  };

  word = word.toUpperCase();
  let wordScore = 0;

  if (word.length >= 7) {
    wordScore += 8;
  }
  for (let i = 0; i < word.length; i++) {
    wordScore += scoreChart[word[i]];
  }
  return wordScore;
};

console.log(scoreWord(""));
