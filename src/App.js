import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import Tile from './components/Tile';
import Article from './components/Article';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <div style={{fontFamily: 'Helvetica Neue'}}>
        {/* <Tile /> */}
        <Article />
      </div>
    </Provider>
  );
}

export default App;
