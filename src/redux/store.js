import { createStore,applyMiddleware } from "redux";
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middleware=[reduxThunk];

if(process.env.NODE_ENV === 'development'){
    middleware.push(reduxLogger);
}

const store=createStore(rootReducer,applyMiddleware(...middleware));

export default store;