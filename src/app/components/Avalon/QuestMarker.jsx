import React from 'react';

import QuestState from './helpers/QuestState';

import '../../../assets/stylesheets/Avalon/GameBoard.css';
import quest from '../../../assets/quest.svg';
import quest_passed from '../../../assets/quest_passed.svg';
import quest_failed from '../../../assets/quest_failed.svg';

function getQuestImg(questState) {
  if (questState === QuestState.PASSED) {
    return quest_passed;
  }
  if (questState === QuestState.FAILED) {
    return quest_failed;
  }
  return quest;
}

function QuestMarker(props) {
  const {
    id,
    questState,
  } = props;

  return (
    <div className="questmarker" id={`QuestMarker-${id}`}>
      <img src={getQuestImg(questState)} className="questmarker-image" alt="quest marker" />
      {/* <div>{`Quest ${id}`}</div> */}
    </div>
  );
}

export default QuestMarker;