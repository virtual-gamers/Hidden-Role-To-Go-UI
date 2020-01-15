import {
  SET_GAME,
  SET_N_PLAYERS,
} from './actions'

const reducers = (state = {
  // default state
  selectedGame: undefined,
  numPlayers: undefined,
}, action) => {
  switch (action.type) {
    case SET_GAME:
      return {
        ...state,
        selectedGame: action.game,
      }
    case SET_N_PLAYERS:
      return {
        ...state,
        numPlayers: action.numPlayers,
      }
    default:
      return state;
  }
};

export default reducers;