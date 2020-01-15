import React from 'react';

import MissionState from './helpers/MissionState';

import '../../../assets/stylesheets/Avalon/GameBoard.css';
import mission from '../../../assets/mission.svg';
import mission_passed from '../../../assets/mission_passed.svg';
import mission_failed from '../../../assets/mission_failed.svg';

function getMissionImg(missionState) {
  if (missionState === MissionState.PASSED) {
    return mission_passed;
  }
  if (missionState === MissionState.FAILED) {
    return mission_failed;
  }
  return mission;
}

function MissionMarker(props) {
  const {
    id,
    missionState,
  } = props;

  return (
    <div className="MissionMarker" id={`MissionMarker-${id}`}>
      <img src={getMissionImg(missionState)} className="MissionLogo" alt="mission" />
      <div>{`Mission ${id}`}</div>
    </div>
  );
}

export default MissionMarker;