import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../../assets/stylesheets/select.css';
import GameBoard from './GameBoard';

import { selectRoles } from '../../actions';

const players = 5;

class RoleSelect extends Component {
  handleSubmit(event) {
    event.preventDefault()
    
    const form = document.querySelector('#playersForm');
    const input = document.querySelector('#playersInput');

    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      const { selectRoles } = this.props;
      selectRoles(input.value);
    }
  }

  selectRoles() {
    return (
      <div className="vertical-select">
        <h3>Select Roles</h3>
        <form id="playersForm" className="container was-validated" noValidate="">
          <div className="form-group">
            <input
              id="playersInput"
              className="form-control form-control-lg"
              type="number" // android and some browsers. enforces number keypad but also floating points
              min="1" // works with type to enforce positive numbers
              max={players} // works with type to prevent overflow
              step="1" // works with type to enforce integers
              pattern="[0-9]*" // iOS. enforces number keypad + submission, not allowed characters
              inputMode="numeric" // some extra other browsers probably
              placeholder="Players"
              required
              onKeyPress={(e) => e.which === 13 ? this.handleSubmit(e) : null} // key 13 is the enter key
            />
            <div className="invalid-feedback">{`Must be a positive integer between 1 and ${players}.`}</div>
          </div>
          <div>
            <button type="button" className="btn btn-lg btn-outline-dark" onClick={(e) => this.handleSubmit(e)} >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
  render() {
    const { selectedRoles } = this.props;
    
    if (selectedRoles) {
      return <GameBoard />;
    }
    return (this.selectRoles(selectedRoles));
  }
}

const mapStateToProps = (state) => ({
  roles: state.roles
});

const mapDispatchToProps = (dispatch) => ({
  selectRoles: (roles) => {
    dispatch(selectRoles(roles));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RoleSelect);