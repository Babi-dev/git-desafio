import React from 'react';

import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import {Provider} from 'react-redux';
import reducer from './store';

import Routes from './config/routes';

const createStoreWithMiddleware= applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => {
  return (
		<Provider store={store}>
				<Routes />
		</Provider>
  );
};

export default App;
