import React, { Component } from 'react';

import MissionMarker from './MissionMarker';
import '../../../assets/stylesheets/Avalon/GameBoard.css';

class GameBoard extends Component {
  createMissions = () => {
    const { missions } = this.props;

    let missionMarkers = [];
    let dummyState = ["PASSED", "FAILED", 'FAILED', '', '']

    for (let i = 1; i <= missions; i++) {
      missionMarkers.push(
        <MissionMarker
          id={i}
          key={`MissionMarker-${i}`}
          missionState={dummyState[i-1]}
        />
      );
    }

    return missionMarkers;
  }

  render() {
    return (
      <div className="GameBoard">
        <div className="GameBoard-Missions">
          {this.createMissions()}
        </div>
      </div>
    );
  }
}

export default GameBoard;