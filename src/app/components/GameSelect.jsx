import React, { Component } from 'react';
import { connect } from 'react-redux';

import SupportedGames from './helpers/SupportedGames';
import '../../assets/stylesheets/select.css';
import Avalon from './Avalon/Avalon';

import { setGame } from '../actions';

class GameSelect extends Component {
  retrieveGame(selectedGame) {
    const { setSelectedGame } = this.props;
    // const { service } = this.state;
    // service={service}
    switch(SupportedGames[selectedGame]) {
      case SupportedGames.AVALON:
        return (<Avalon />);
      default:
        return (
          <div className="vertical-select">
            Something went wrong?
            <button
              type="button"
              className="btn btn-lg btn-outline-dark vertical-select-buttons"
              onClick={() => setSelectedGame(undefined)}
            >
              Return
            </button>
          </div>
        );
    }
  }

  mapGameToButton(game) {
    const { setSelectedGame } = this.props;
    return (
      <button
        key={`${game}`}
        type="button"
        className="btn btn-lg btn-outline-dark vertical-select-buttons"
        onClick={() => setSelectedGame(game)}
      >
          {SupportedGames[game]}
      </button>
    );
  }

  render() {
    const { selectedGame } = this.props;

    if (!selectedGame) {
      const supportedGames = Object.keys(SupportedGames);
      const gameButtons = supportedGames.map(game => this.mapGameToButton(game));

      return (
        <div className="vertical-select">
          <h3>Select a game:</h3>
          {gameButtons}
        </div>
      );
    } else {
      return (this.retrieveGame(selectedGame));
    }
  }
}

const mapStateToProps = (state) => ({
  selectedGame: state.selectedGame
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedGame: (game) => {
    dispatch(setGame(game));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameSelect);