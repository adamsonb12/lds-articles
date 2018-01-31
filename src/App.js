import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';

import reducers from './reducers';
import Tile from './components/Tile';
import Article from './components/Article';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <BrowserRouter>
      <div style={styles.containerStyle}>
        <Route exact path="/" component={Article} />
        <Route exact path="/tile" component={Tile} />
        {/* <Article />
        <Tile /> */}
      </div>
      </BrowserRouter>
    </Provider>
  );
}

const styles = {
  containerStyle: {
    fontFamily: 'Helvetica Neue',
    paddingBottom: 200
  }
}

export default App;
