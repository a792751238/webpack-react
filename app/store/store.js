/**
 * Created by easterCat on 2017/7/24.
 */
import {createStore, applyMiddleware, compose} from 'redux';
import {combineReducers} from 'redux-immutable';
import freeze from "redux-freeze"
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {Map} from 'immutable';
import reducers from './reducers';


let middlewares = []

middlewares.push(thunk)
middlewares.push(logger)

// add the freeze dev middleware
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(freeze);
}

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
    middleware = compose(middleware, window.devToolsExtension());
}

const reducer = combineReducers(reducers);

const store = createStore(
    reducer,
    Map({}),
    middleware
)

export default store;