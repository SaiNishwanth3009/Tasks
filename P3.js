const players = [
    { name: 'Player1', team: 'TeamA', runs: 320 },
    { name: 'Player2', team: 'TeamB', runs: 280 },
    { name: 'Player3', team: 'TeamA', runs: 500 },
    { name: 'Player4', team: 'TeamC', runs: 450 },
    { name: 'Player5', team: 'TeamB', runs: 150 },
    { name: 'Player6', team: 'TeamC', runs: 350 },
];



function getPlayersByTeam(players, teamName) {
    return players.filter(player => player.team === teamName);
}

const teamName = 'TeamA';
const playersInTeam = getPlayersByTeam(players, teamName);
console.log(playersInTeam);