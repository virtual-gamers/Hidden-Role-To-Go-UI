export const SET_GAME = 'SET_GAME';
export const SET_N_PLAYERS = 'SET_N_PLAYERS';

export function setGame(game) {
  return {
    type: SET_GAME,
    game,
  };
}

export function setNumPlayers(count) {
  return {
    type: SET_N_PLAYERS,
    numPlayers: count,
  };
}

// export function retrieve_service_action(service?, params) {
//   return {
//     type: ACTION,
//     service?,
//     params,
//   };
// }