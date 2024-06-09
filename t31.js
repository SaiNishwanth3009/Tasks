const calculateVotes = (candidateName, votes, region) => {
  return `Candidate ${candidateName} received ${votes} votes in the ${region} region.`;
};
console.log(calculateVotes("TDP", 25000, "North")); 

