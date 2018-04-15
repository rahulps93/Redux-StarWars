import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
 
const loggerMiddleware = createLogger();
 
 let initialState={


 planet:
 {
 	data:[],
 	isvisible:false,
 	counter:0,
 	timer:60
 },
 planet_searchbox:
 {
 	data:[],
 	isvisible:false,
 	inputvalue:''
 }
};
export default createStore(
    rootReducer,initialState,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);