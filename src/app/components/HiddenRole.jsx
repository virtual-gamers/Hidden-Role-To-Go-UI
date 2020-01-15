import React, { Component } from 'react';

import GameSelect from './GameSelect';

class HiddenRole extends Component {
  // state = {
  //   isLoading: true,
  //   groups: []
  // };

  // async componentDidMount() {
  //   const response = await fetch('/api/groups');
  //   const body = await response.json();
  //   this.setState({ groups: body, isLoading: false });
  // }

  render() {
    // const {isLoading} = this.state;

    // if (isLoading) {
    //   return <p>Loading...</p>;
    // }
    
    return (
      <GameSelect />
    );
  }
}

export default HiddenRole;