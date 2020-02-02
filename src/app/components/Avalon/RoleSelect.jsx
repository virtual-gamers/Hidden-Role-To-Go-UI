import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../../assets/stylesheets/Avalon/RoleSelect.css';
import GameBoard from './GameBoard';

import { selectRoles } from '../../actions';

const players = 2;
const dummySelectableRoles = [{ name: 'Merlin' }, { name: 'Morgana' }, { name: 'Generic_Good' }, { name: 'Generic_Bad1' }, { name: 'Generic_Bad2' }, { name: 'Generic_Bad3' }, { name: 'Generic_Bad4' }]
const dummyCurrSelectedRoles = dummySelectableRoles.slice(0, players)

class RoleSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inError: false
    }
  }
  currSelectedRoles = dummyCurrSelectedRoles;

  toggleRole(event, role) {
    const roleClasses = event.target.classList;
    const isSelected = 'role-selected';
    if (!roleClasses.contains(isSelected)) {
      this.currSelectedRoles.push(role);
    } else {
      const idx = this.currSelectedRoles.indexOf(role);
      this.currSelectedRoles.splice(idx, 1);
    }
    
    roleClasses.toggle(isSelected)
    
    if (this.currSelectedRoles.length === players) {
      this.setState({inError: false})
    } else {
      this.setState({inError: true});
    }
  }

  createRoles(selectableRoles) {
    const selectableRoleImages = [];

    selectableRoles.forEach((role) => {
      const isSelected = this.currSelectedRoles.indexOf(role) !== -1 ? ' role-selected' : '';
      selectableRoleImages.push(
        <label
          id={role.name}
          key={role.name}
          className={'role' + isSelected}
          style={{ backgroundColor: 'blue' }}
          onClick={(e) => this.toggleRole(e, role)}
        />
      );
    });

    return selectableRoleImages;
  }

  handleSubmit() {
    if (this.currSelectedRoles.length === players) {
      const { selectRoles } = this.props;
      selectRoles(this.currSelectedRoles);
    }
  }

  renderError() {
    let isValid;
    if (this.state.inError) {
      isValid = '';
    } else {
      isValid = ' is-valid';
    }
    return <div className={"role-error" + isValid}>{`Please select ${players} roles`}</div>;
  }

  createRoleBoard(selectableRoles) {
    return (
      <div className="roleboard">
        <h3>Select Roles</h3>
        <div>
          {this.createRoles(selectableRoles)}
          {this.renderError()}
        </div>
        <div>
          <button type="button" disabled={this.state.inError} className="btn btn-lg btn-outline-dark" onClick={() => this.handleSubmit()} >
            Submit
          </button>
        </div>
      </div>
    );
  }

  render() {
    const { selectableRoles, selectedRoles } = this.props;
    if (selectedRoles.length) {
      return <GameBoard />;
    }
    return (this.createRoleBoard(dummySelectableRoles));
  }
}

const mapStateToProps = (state) => ({
  selectedRoles: state.selectedRoles
});

const mapDispatchToProps = (dispatch) => ({
  selectRoles: (roles) => {
    dispatch(selectRoles(roles));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RoleSelect);