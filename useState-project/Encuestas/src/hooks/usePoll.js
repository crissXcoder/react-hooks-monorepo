import { useState } from 'react';

export function usePoll(initialOptions) {
  const [options, setOptions] = useState(
    initialOptions.map(option => ({
      text: option,
      votes: 0
    }))
  );
  const [totalVotes, setTotalVotes] = useState(0);

  const vote = (index) => {
    const newOptions = [...options];
    newOptions[index].votes += 1;
    setOptions(newOptions);
    setTotalVotes(total => total + 1);
  };

  const resetPoll = () => {
    setOptions(initialOptions.map(option => ({
      text: option,
      votes: 0
    })));
    setTotalVotes(0);
  };

  const calculatePercentage = (votes) => {
    return totalVotes > 0 
      ? ((votes / totalVotes) * 100).toFixed(1) 
      : 0;
  };

  return { 
    options, 
    totalVotes, 
    vote, 
    resetPoll, 
    calculatePercentage 
  };
}