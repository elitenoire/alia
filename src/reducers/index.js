import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form'
import snaps from './snaps'

const rootReducer = combineReducers({
    form : formReducer,
    snaps
})

export default rootReducer;
