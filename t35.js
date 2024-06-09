const calculateTotalVotes = (votesArray) => {
    if (votesArray.length === 0) {
      return 0;
    }
    return votesArray[0] + calculateTotalVotes(votesArray.slice(1));
  };
  
 
  const analyzeElection = (threshold, ...candidates) => {
   
    const filteredCandidates = candidates.filter(candidate => candidate.votes > threshold);

    const filteredNames = filteredCandidates.map(candidate => candidate.name);

    const filteredVotes = filteredCandidates.map(candidate => candidate.votes);
   
    const totalFilteredVotes = calculateTotalVotes(filteredVotes);
    
    return {
      filteredNames: filteredNames,
      totalVotes: totalFilteredVotes
    };
  };
  
  const candidates = [
    { name: "CBN", votes: 25630 },
    { name: "JMR", votes: 14727 },
    { name: "PSP", votes: 30000 },
    { name: "JCR", votes: 12500 }
  ];
  
  const threshold = 15000;
  console.log(analyzeElection(threshold, ...candidates));
 
  