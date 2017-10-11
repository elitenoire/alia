import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form'
import { routerReducer } from 'react-router-redux'
import snaps from './snaps'

const rootReducer = combineReducers({
    form : formReducer,
    router : routerReducer,
    snaps
})

export default rootReducer;
