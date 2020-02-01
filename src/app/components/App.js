import React from 'react';
import { Provider } from 'react-redux';

import storeBuilder from '../store';

import '../../assets/stylesheets/App.css';

import HiddenRole from './HiddenRole';
import GameBoard from './Avalon/GameBoard';

function App() {
  return (
    <Provider store={storeBuilder()}>
      <div className="App">
        {/* <HiddenRole /> */}
        <GameBoard />
      </div>
    </Provider>
  );
}

export default App;