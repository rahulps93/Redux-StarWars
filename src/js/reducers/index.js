// Set up your root reducer here...
import { combineReducers } from 'redux';
import { planet,planet_searchbox} from './planetReducers';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({

 planet,
 planet_searchbox,
 form: formReducer  

});
