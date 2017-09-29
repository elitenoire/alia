import 'grommet/grommet.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createReduxSaga from 'redux-saga';

import Main from './containers/Main';
import reducers from './reducers';
import rootSaga from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const reduxSaga = createReduxSaga();
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxSaga)))

reduxSaga.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
