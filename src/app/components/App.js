import React from 'react';
import { Provider } from 'react-redux';

import storeBuilder from '../store';

import '../../assets/stylesheets/App.css';

import HiddenRole from './HiddenRole';
import RoleSelect from './Avalon/RoleSelect';

function App() {
  return (
    <Provider store={storeBuilder()}>
      <div className="App">
        {/* <HiddenRole /> */}
        <RoleSelect />
      </div>
    </Provider>
  );
}

export default App;