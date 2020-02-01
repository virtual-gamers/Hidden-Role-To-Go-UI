import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../../assets/stylesheets/GameSelect.css';
import GameBoard from './GameBoard';

import { setNumPlayers } from '../../actions';

// TODO: translate quests to players via service request
// Setting this to # of quests for now
const MAX_PLAYERS = "5";

class GameSelect extends Component {
  handleSubmit(event) {
    event.preventDefault()
    
    const form = document.querySelector('#playersForm');
    const input = document.querySelector('#playersInput');

    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      const { setNumberOfPlayers } = this.props;
      setNumberOfPlayers(input.value);
    }
  }

  selectPlayers() {
    return (
      <div className="GameSelect">
        <h3>How many players?</h3>
        <form id="playersForm" className="container was-validated" noValidate="">
          <div className="form-group">
            <input
              id="playersInput"
              className="form-control form-control-lg"
              type="number" // android and some browsers. enforces number keypad but also floating points
              min="1" // works with type to enforce positive numbers
              max={MAX_PLAYERS} // works with type to prevent overflow
              step="1" // works with type to enforce integers
              pattern="[0-9]*" // iOS. enforces number keypad + submission, not allowed characters
              inputMode="numeric" // some extra other browsers probably
              placeholder="Players"
              required
              onKeyPress={(e) => e.which === 13 ? this.handleSubmit(e) : null} // key 13 is the enter key
            />
            <div className="invalid-feedback">{`Must be a positive integer between 1 and ${MAX_PLAYERS}.`}</div>
          </div>
          <div>
            <button type="button" className="btn btn-lg btn-outline-dark" onClick={(e) => this.handleSubmit(e)} >
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  }
  render() {
    const { numPlayers } = this.props;
    
    if (numPlayers) {
      return <GameBoard />
    }
    return (this.selectPlayers());
  }
}

const mapStateToProps = (state) => ({
  numPlayers: state.numPlayers
});

const mapDispatchToProps = (dispatch) => ({
  setNumberOfPlayers: (count) => {
    dispatch(setNumPlayers(count));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameSelect);