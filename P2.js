
const winsByTeam = {
    "TeamA": 8,
    "TeamB": 10,
    "TeamC": 6,
    "TeamD": 12,
    "TeamE": 9
};


function findTeamWithMaxWins(winsByTeam) {
    let maxWins = -1;
    let teamWithMaxWins = '';
    
    for (const team in winsByTeam) {
        if (winsByTeam[team] > maxWins) {
            maxWins = winsByTeam[team];
            teamWithMaxWins = team;
        }
    }
    
    return teamWithMaxWins;
}


const topTeam = findTeamWithMaxWins(winsByTeam);
console.log(`The team with the maximum wins is: ${topTeam}`);
