import React from 'react';
import { usePoll } from '../hooks/usePoll';
import '../styles/Poll.css';

export function Poll() {
  const pollOptions = [
    'Frontend Development', 
    'Backend Development', 
    'Full Stack Development', 
    'Mobile Development'
  ];

  const { 
    options, 
    totalVotes, 
    vote, 
    resetPoll, 
    calculatePercentage 
  } = usePoll(pollOptions);

  return (
    <div className="poll-container">
      <h1>Developer Career Poll</h1>
      <div className="poll-stats">
        <p>Total Votes: {totalVotes}</p>
        <button 
          className="reset-btn" 
          onClick={resetPoll}
        >
          Reset Poll
        </button>
      </div>
      
      <div className="options-grid">
        {options.map((option, index) => (
          <div 
            key={option.text} 
            className="poll-option"
            onClick={() => vote(index)}
          >
            <div 
              className="option-bar" 
              style={{
                width: `${calculatePercentage(option.votes)}%`,
                backgroundColor: `hsl(${index * 90}, 70%, 50%)`
              }}
            ></div>
            <span className="option-text">{option.text}</span>
            <span className="option-votes">
              {option.votes} votes 
              ({calculatePercentage(option.votes)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}