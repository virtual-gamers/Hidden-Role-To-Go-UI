import {
  SET_GAME,
  SET_N_PLAYERS,
  SELECT_ROLES,
} from './actions'

const reducers = (state = {
  // default state
  selectedGame: undefined,
  numPlayers: undefined,
  selectedRoles: [],
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
    case SELECT_ROLES:
      return {
        ...state,
        selectedRoles: action.roles,
      }
    default:
      return state;
  }
};

export default reducers;