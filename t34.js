const filterCandidates = (candidates, threshold) => {
    return candidates
      .filter(candidate => candidate.votes > threshold)
      .map(candidate => candidate.name);
  };
  
  const candidates = [
    { name: "CBN", votes: 25630 },
    { name: "JMR", votes: 14727 },
    { name: "PSP", votes: 30000 },
    { name: "JCR", votes: 12500 }
  ];
  
  const threshold = 15000;
  console.log(filterCandidates(candidates, threshold)); 
  