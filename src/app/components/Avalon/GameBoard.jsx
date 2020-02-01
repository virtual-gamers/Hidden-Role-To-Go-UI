import React, { Component } from 'react';

import QuestMarker from './QuestMarker';
import VoteTracker from './VoteTracker';
import '../../../assets/stylesheets/Avalon/GameBoard.css';

const QUESTS = 5;
const VOTE_TRACKER = 5;

class GameBoard extends Component {
  createQuestTrackerBoard = () => {
    let questMarkers = [];
    let dummyState = ["PASSED", "FAILED", 'FAILED', '', '']

    for (let i = 1; i <= QUESTS; i++) {
      questMarkers.push(
        <QuestMarker
          id={i}
          key={`QuestMarker-${i}`}
          questState={dummyState[i-1]}
        />
      );
    }

    return questMarkers;
  }
  
  createVoteTrackerBoard = () => {
    let voteTracker = [];
    let dummyVotesFailed = 3;

    for (let i = 1; i <= VOTE_TRACKER; i++) {
      voteTracker.push(
        <VoteTracker
          id={i}
          key={`VoteTracker-${i}`}
          isFailed={i < dummyVotesFailed}
        />
      );
    }

    return voteTracker;
  }

  render() {
    return (
      <div className="gameboard">
        <div className="trackerboard quest">
          {this.createQuestTrackerBoard()}
        </div>
        <div className="trackerboard vote">
          {this.createVoteTrackerBoard()}
        </div>
      </div>
    );
  }
}

export default GameBoard;