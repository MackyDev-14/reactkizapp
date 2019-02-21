import {createStore, combineReducers, applyMiddleware} from 'redux';
import quiz from './reducers/quizreducer'
import test from './reducers/playReducer'


const store = createStore(combineReducers({quiz, test}));

export default store;