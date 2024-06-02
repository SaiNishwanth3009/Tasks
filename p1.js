const players = [
    { name: 'Player1', team: 'TeamA', runs: 320 },
    { name: 'Player2', team: 'TeamB', runs: 280 },
    { name: 'Player3', team: 'TeamA', runs: 500 },
    { name: 'Player4', team: 'TeamC', runs: 450 },
    { name: 'Player5', team: 'TeamB', runs: 150 },
    { name: 'Player6', team: 'TeamC', runs: 350 },
];

function findTopScorers(players) {
    const sortedPlayers = players.sort((a, b) => b.runs - a.runs);
    const topScorers = sortedPlayers.slice(0, 3);
    
    return topScorers;
}

const topScorers = findTopScorers(players);
console.log(topScorers);