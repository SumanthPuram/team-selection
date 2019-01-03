const { k_combinations } = require('./combinations');

const playerRatings = {
  BASHEER: 100,
  SUMANTH: 75,
  RANGANATH: 75,
  PUMP: 75,
  LOKI: 60,
  SRIKANTH: 60,
  VISHWANATH: 55,
  GURU: 55,
  SAMPATH: 50,
  SHYOJI: 50
};

const names = Object.keys(playerRatings);
const sum = Object.values(playerRatings).reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

const allCombinations = k_combinations(names, 5);

const scoreDifferences = allCombinations.map(team => {
  let teamScore = 0;
  team.forEach(player => (teamScore += playerRatings[player]));
  return Math.abs(sum - teamScore - teamScore);
});

console.log(Math.min(...scoreDifferences));
const indexOfMinValue = scoreDifferences.indexOf(Math.min(...scoreDifferences));

console.log('Team 1: ' + allCombinations[indexOfMinValue]);
console.log(
  'Team 2: ' + names.filter(x => !allCombinations[indexOfMinValue].includes(x))
);
