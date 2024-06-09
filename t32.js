const verifyVotes = (voteCounts) => {
    if (voteCounts.length === 0) {
      return 0;
    }
    return voteCounts[0] + verifyVotes(voteCounts.slice(1));
  };
  const voteSources = [1270, 156, 1320, 16321];
  console.log(verifyVotes(voteSources));
  