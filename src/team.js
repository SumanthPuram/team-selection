const { k_combinations } = require('./combinations');

export const playerRatings = {
  BASHEER: 90,
  RANGANATH: 60,
  SUMANTH: 60,
  PUMP: 55,
  LOKI: 45,
  SRIKANTH: 50,
  VISHWANATH: 35,
  SAMPATH: 35,
  GURU: 25,
  SHYOJI: 20,
  SRIKANTHLOKI: 55,
  MILLI: 60,
  RANJAN: 20,
  PLAYER90: 90,
  PLAYER75: 75,
  PLAYER60: 60,
  PLAYER50: 50
};

export const generateTeams = currPlayerRatings => {
  const names = Object.keys(currPlayerRatings);
  const sum = Object.values(currPlayerRatings).reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  const teamSize = Math.floor(names.length / 2);

  const allCombinations = k_combinations(names, teamSize);

  const scoreDifferences = allCombinations.map(team => {
    let teamScore = 0;
    team.forEach(player => (teamScore += currPlayerRatings[player]));
    return Math.abs(sum - teamScore - teamScore);
  });

  console.log(Math.min(...scoreDifferences));
  const indexOfMinValue = scoreDifferences.indexOf(
    Math.min(...scoreDifferences)
  );

  return {
    team1: allCombinations[indexOfMinValue],
    team2: names.filter(x => !allCombinations[indexOfMinValue].includes(x))
  };
};
