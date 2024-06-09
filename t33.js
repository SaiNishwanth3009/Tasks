const totalVotes = (...votes) => {
    return votes.reduce((total, vote) => total + vote, 0);
  };
  
  // Example usage:
  console.log(totalVotes(1220, 1532, 1378, 170)); 
  console.log(totalVotes(550, 722, 916));
  console.log(totalVotes());
  