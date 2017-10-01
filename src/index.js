import 'grommet/grommet.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createReduxSaga from 'redux-saga';
import { BrowserRouter } from 'react-router-dom'
import Router from './routes';

import reducers from './reducers';
import rootSaga from './sagas';
import Main from './containers/Main';
import registerServiceWorker from './registerServiceWorker';

// import App from 'grommet/components/App';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const reduxSaga = createReduxSaga();
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxSaga)))

reduxSaga.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
