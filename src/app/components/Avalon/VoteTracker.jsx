import React from 'react';

import '../../../assets/stylesheets/Avalon/GameBoard.css';
import quest from '../../../assets/quest.svg';
import quest_failed from '../../../assets/quest_failed.svg';

function getTrackerImg(isFailed) {
  if (isFailed) {
    return quest_failed;
  }
  return quest;
}

function VoteTracker(props) {
  const {
    id,
    isFailed,
  } = props;

  return (
    <div className="votetracker" id={`VoteTracker-${id}`}>
      <img src={getTrackerImg(isFailed)} className="votetracker-image" alt="vote tracker" />
      {/* <div>{`Vote ${id}`}</div> */}
    </div>
  );
}

export default VoteTracker;